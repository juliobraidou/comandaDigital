import Reveal from "./Reveal";
import styles from "./Features.module.css";

const CARDS = [
  {
    title: "Cardápio no seu controle",
    text: "Acabou a calabresa? Desative o item e ele some do app do garçom na mesma hora.",
  },
  {
    title: "Fechamento do dia",
    text: "Quanto vendeu, o que mais saiu do forno e qual mesa girou mais rápido.",
  },
  {
    title: "Equipe e turnos",
    text: "Cada pedido fica registrado com quem atendeu, sem burocracia de login a cada mesa.",
  },
  {
    title: "Aguenta internet ruim",
    text: "Se a conexão cair, o pedido continua sendo anotado e sobe quando voltar.",
  },
];

export default function Features() {
  return (
    <section id="recursos" className={styles.section}>
      <Reveal className={styles.header}>
        <div className={styles.headerCopy}>
          <span className={styles.eyebrow}>RECURSOS</span>
          <h2 className={styles.title}>Pensado no que trava a sexta à noite</h2>
        </div>
        <p className={styles.headerNote}>
          Feito ouvindo quem atende no salão, não quem programa em escritório.
        </p>
      </Reveal>

      <Reveal className={styles.grid}>
        <div className={styles.feature}>
          <div className={styles.featureCopy}>
            <h3 className={styles.featureTitle}>
              Pizza meio a meio sem confusão
            </h3>
            <p className={styles.featureText}>
              Dois sabores, uma comanda e a regra de preço que você escolhe. A
              cozinha vê exatamente qual metade é qual.
            </p>
          </div>
          <div className={styles.pizzaCard}>
            <span className={styles.pizzaName}>
              Pizza Portuguesa <span className={styles.pizzaSize}>G</span>
            </span>
            <span className={styles.pizzaToggle}>
              <span className={styles.pizzaToggleOption}>Inteira</span>
              <span className={styles.pizzaToggleOptionActive}>
                Meio a meio
              </span>
            </span>
            <span className={styles.pizzaHalves}>
              <span className={styles.halfFilled}>
                <span className={styles.halfLabel}>1ª METADE</span>
                <span className={styles.halfValue}>Portuguesa</span>
              </span>
              <span className={styles.halfEmpty}>
                <span className={styles.halfLabelMuted}>2ª METADE</span>
                <span className={styles.halfValueMuted}>Escolher</span>
              </span>
            </span>
            <span className={styles.pizzaTotalRow}>
              <span className={styles.pizzaTotalLabel}>TOTAL</span>
              <span className={styles.pizzaTotalValue}>R$ 58,90</span>
            </span>
          </div>
        </div>

        {CARDS.map((card) => (
          <div key={card.title} className={styles.card}>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardText}>{card.text}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
