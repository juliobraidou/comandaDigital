"use client";

import { useState, FormEvent } from "react";
import Reveal from "./Reveal";
import styles from "./Contact.module.css";

export default function Contact({ whatsapp }: { whatsapp: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    // Sem backend conectado ainda — troque por uma chamada real (API route,
    // CRM, etc.) quando o endpoint de leads estiver definido.
    window.setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 400);
  }

  return (
    <section id="contato" className={styles.section}>
      <div className={styles.inner}>
        <Reveal className={styles.copy}>
          <h2 className={styles.title}>Vamos ver rodando na sua pizzaria?</h2>
          <p className={styles.text}>
            Vinte minutos de conversa com o seu cardápio na tela. Se fizer
            sentido, instalamos no mesmo dia.
          </p>
          <p className={styles.whatsapp}>OU CHAME NO {whatsapp}</p>
        </Reveal>

        <Reveal delay={90} className={styles.card}>
          <span className={styles.cardLabel}>AGENDAR DEMONSTRAÇÃO</span>

          {submitted ? (
            <p className={styles.success}>
              Recebemos seu contato — vamos falar com você em breve.
            </p>
          ) : (
            <form className={styles.fields} onSubmit={handleSubmit}>
              <label className={styles.field}>
                <span className={styles.fieldLabel}>SEU NOME</span>
                <input
                  className={styles.input}
                  type="text"
                  name="nome"
                  placeholder="João Pereira"
                  required
                />
              </label>
              <label className={styles.field}>
                <span className={styles.fieldLabel}>PIZZARIA</span>
                <input
                  className={styles.input}
                  type="text"
                  name="pizzaria"
                  placeholder="Pizzaria do João"
                  required
                />
              </label>
              <label className={styles.field}>
                <span className={styles.fieldLabel}>WHATSAPP</span>
                <input
                  className={styles.input}
                  type="tel"
                  name="whatsapp"
                  placeholder="(11) 98888 0000"
                  required
                />
              </label>
              <button className={styles.submit} type="submit" disabled={sending}>
                {sending ? "Enviando…" : "Quero conhecer"}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
