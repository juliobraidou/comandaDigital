import styles from "./TrustBar.module.css";

const ITEMS = [
  "15 MIN DE TREINO",
  "INSTALAÇÃO NO MESMO DIA",
  "FUNCIONA OFFLINE",
  "SEM TAXA POR PEDIDO",
];

export default function TrustBar() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {ITEMS.map((item) => (
          <span key={item} className={styles.item}>
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
