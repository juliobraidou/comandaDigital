import Image from "next/image";
import Reveal from "./Reveal";
import styles from "./Showcase.module.css";

export default function Showcase() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <Reveal className={styles.copy}>
          <span className={styles.eyebrow}>O PAINEL DO BALCÃO</span>
          <h2 className={styles.title}>Todas as mesas em uma tela só</h2>
          <p className={styles.text}>
            Livre, na mesa, no forno, servida ou conta pedida. Você olha uma
            vez e sabe onde o salão está travando.
          </p>
        </Reveal>
        <Reveal delay={90} className={styles.imageStack}>
          <Image
            src="/images/salao-aberto-caixa.png"
            alt="Painel do salão mostrando mesas ocupadas e livres"
            width={2552}
            height={1592}
            sizes="(max-width: 760px) 88vw, 560px"
            className={styles.mainImage}
          />
          <Image
            src="/images/mesa-aberta-caixa.png"
            alt="Tela de fechamento de conta da Mesa 3"
            width={2552}
            height={1592}
            sizes="(max-width: 760px) 55vw, 350px"
            className={styles.overlayImage}
          />
        </Reveal>
      </div>
    </section>
  );
}
