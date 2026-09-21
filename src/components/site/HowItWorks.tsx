"use client";

import { useEffect, useRef } from "react";
import Reveal from "./Reveal";
import styles from "./HowItWorks.module.css";

const STEPS = [
  {
    number: "01",
    title: "O garçom abre a mesa",
    text: "Toca no número da mesa, anota os sabores e marca meio a meio em dois toques.",
  },
  {
    number: "02",
    title: "A cozinha recebe na hora",
    text: "O pedido chega na tela do forno com horário e observações. Saiu, é só marcar pronto.",
  },
  {
    number: "03",
    title: "A conta fecha sozinha",
    text: "Tudo que passou pela mesa já está somado, com divisão por pessoa e taxa de serviço.",
  },
];

export default function HowItWorks() {
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) {
      fillRefs.current.forEach((fill) => {
        if (fill) fill.style.width = "100%";
      });
      numberRefs.current.forEach((n) => n?.setAttribute("data-active", "true"));
      return;
    }

    let rafId: number | null = null;

    const update = () => {
      rafId = null;
      const rect = track.getBoundingClientRect();
      // Janela de progresso relativa à viewport, não à altura do track: no
      // desktop os 3 passos ficam lado a lado (~200px) e o cálculo antigo
      // saturava em 1 assim que a seção entrava, matando o preenchimento.
      const start = window.innerHeight * 0.95;
      const end = window.innerHeight * 0.35;
      const progress = Math.max(
        0,
        Math.min(1, (start - rect.top) / (start - end))
      );
      fillRefs.current.forEach((fill, i) => {
        if (!fill) return;
        const pct = Math.max(0, Math.min(1, progress * 3 - i)) * 100;
        fill.style.width = `${pct}%`;
        // Secundária: o numeral acende quando a barra dele passa da metade.
        numberRefs.current[i]?.setAttribute(
          "data-active",
          pct > 50 ? "true" : "false"
        );
      });
    };

    const onScroll = () => {
      if (rafId === null) rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section id="como-funciona" className={styles.section}>
      <Reveal>
        <span className={styles.eyebrow}>COMO FUNCIONA</span>
        <h2 className={styles.title}>Três passos entre a mesa e o forno</h2>
      </Reveal>

      <Reveal>
        <div ref={trackRef} className={styles.track}>
          {STEPS.map((step, i) => (
            <div key={step.number} className={styles.step}>
              <div className={styles.progressTrack}>
                <span
                  ref={(el) => {
                    fillRefs.current[i] = el;
                  }}
                  className={styles.progressFill}
                />
              </div>
              <span
                ref={(el) => {
                  numberRefs.current[i] = el;
                }}
                className={styles.stepNumber}
                data-active="false"
              >
                {step.number}
              </span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepText}>{step.text}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
