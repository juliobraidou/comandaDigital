import Reveal from "./Reveal";
import { FAQS } from "@/data/faq";
import styles from "./Faq.module.css";

export default function Faq() {
  return (
    <section className={styles.section}>
      <Reveal className={styles.intro}>
        <span className={styles.eyebrow}>DÚVIDAS</span>
        <h2 className={styles.title}>Perguntas que sempre aparecem</h2>
        <p className={styles.text}>
          Se a sua não estiver aqui, é só chamar. Respondemos no mesmo dia.
        </p>
      </Reveal>
      <Reveal delay={90} className={styles.list}>
        {FAQS.map((faq) => (
          <div key={faq.q} className={styles.item}>
            <h3 className={styles.question}>{faq.q}</h3>
            <p className={styles.answer}>{faq.a}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
