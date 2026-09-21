"use client";

import { useState, useSyncExternalStore } from "react";
import styles from "./CookieConsent.module.css";

const STORAGE_KEY = "cd-cookie-consent";
const EXIT_MS = 190;

type Choice = "accepted" | "rejected";

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  return () => window.removeEventListener("storage", onChange);
}

function getStoredChoice() {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    // localStorage bloqueado (janela privativa).
    return null;
  }
}

// O servidor não tem como saber a escolha, então o HTML estático nunca traz o
// banner — ele só aparece depois da hidratação, para quem ainda não decidiu.
const getServerSnapshot = () => "unknown";

export default function CookieConsent() {
  const storedChoice = useSyncExternalStore(
    subscribe,
    getStoredChoice,
    getServerSnapshot
  );
  const [dismissed, setDismissed] = useState(false);
  const [closing, setClosing] = useState(false);

  function decide(choice: Choice) {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ choice, date: new Date().toISOString() })
      );
    } catch {
      // Sem persistência: a escolha vale só para esta sessão.
    }

    // Deixa a saída rodar antes de desmontar, em vez de o banner sumir seco.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDismissed(true);
      return;
    }
    setClosing(true);
    window.setTimeout(() => setDismissed(true), EXIT_MS);
  }

  // Gravar a escolha muda o snapshot do store e faria o banner sumir no
  // render seguinte — por isso o guard do store não vale enquanto a saída roda.
  if (dismissed) return null;
  if (!closing && storedChoice !== null) return null;

  return (
    <div
      className={styles.banner}
      role="dialog"
      aria-label="Aviso de cookies"
      aria-live="polite"
    >
      <div className={`${styles.card} ${closing ? styles.cardClosing : ""}`}>
        <p className={styles.text}>
          Usamos cookies para entender como o site é usado e melhorar sua
          experiência. Você escolhe se quer permitir.{" "}
          <a href="#" className={styles.link}>
            Política de privacidade
          </a>
          .
        </p>
        <div className={styles.actions}>
          <button
            type="button"
            className={`${styles.button} ${styles.reject}`}
            onClick={() => decide("rejected")}
          >
            Rejeitar
          </button>
          <button
            type="button"
            className={`${styles.button} ${styles.accept}`}
            onClick={() => decide("accepted")}
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
