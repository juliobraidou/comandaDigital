import Image from "next/image";
import Header from "./Header";
import styles from "./Hero.module.css";

export default function Hero({ ctaLabel }: { ctaLabel: string }) {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/hero-salao.jpg"
        alt="Salão de pizzaria cheio à noite"
        fill
        priority
        sizes="100vw"
        className={styles.bgImage}
      />
      <div className={styles.scrim} />

      <Header ctaLabel={ctaLabel} />

      <div className={styles.content}>
        <span className={styles.eyebrow}>SISTEMA DE SALÃO PARA PIZZARIAS</span>
        <h1 className={styles.title}>Sexta lotada, e nenhum pedido perdido</h1>
        <div className={styles.actionsRow}>
          <p className={styles.subtitle}>
            O garçom anota na mesa, a cozinha recebe na hora, a conta fecha
            sozinha.
          </p>
          <a href="#contato" className={styles.cta}>
            {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
