import Reveal from "./Reveal";
import styles from "./Pricing.module.css";

export default function Pricing() {
  return (
    <section id="planos" className={styles.section}>
      <div className={styles.inner}>
        <Reveal>
          <span className={styles.eyebrow}>PLANOS</span>
          <h2 className={styles.title}>Mensalidade fixa, sem taxa por pedido</h2>
        </Reveal>

        <Reveal className={styles.grid}>
          <div className={styles.plan}>
            <span className={styles.planLabel}>BALCÃO</span>
            <div className={styles.priceRow}>
              <span className={styles.price}>R$ 89</span>
              <span className={styles.pricePeriod}>/mês</span>
            </div>
            <p className={styles.planNote}>Para quem está saindo do papel agora.</p>
            <div className={styles.planFeatures}>
              <span className={styles.planFeatureItem}>Até 10 mesas</span>
              <span className={styles.planFeatureItem}>
                App do garçom e tela da cozinha
              </span>
              <span className={styles.planFeatureItem}>Cardápio ilimitado</span>
              <span className={styles.planFeatureItem}>
                Suporte por WhatsApp
              </span>
            </div>
            <a href="#contato" className={styles.planCta}>
              Começar
            </a>
          </div>

          <div className={styles.planFeatured}>
            <div className={styles.planHeadRow}>
              <span className={styles.planLabelInverse}>SALÃO</span>
              <span className={styles.badge}>MAIS ESCOLHIDO</span>
            </div>
            <div className={styles.priceRow}>
              <span className={styles.priceFeatured}>R$ 169</span>
              <span className={styles.pricePeriodInverse}>/mês</span>
            </div>
            <p className={styles.planNoteInverse}>
              Para a pizzaria que lota na sexta e no sábado.
            </p>
            <div className={styles.planFeatures}>
              <span className={styles.planFeatureItemInverse}>
                Mesas ilimitadas
              </span>
              <span className={styles.planFeatureItemInverse}>
                Relatórios de venda e giro de mesa
              </span>
              <span className={styles.planFeatureItemInverse}>
                Controle de equipe e turnos
              </span>
              <span className={styles.planFeatureItemInverse}>
                Impressão automática na cozinha
              </span>
            </div>
            <a href="#contato" className={styles.planCtaFeatured}>
              Agendar demonstração
            </a>
          </div>

          <div className={styles.plan}>
            <span className={styles.planLabel}>REDE</span>
            <div className={styles.priceRow}>
              <span className={styles.priceCustom}>Sob medida</span>
            </div>
            <p className={styles.planNote}>Para quem tem mais de uma casa aberta.</p>
            <div className={styles.planFeatures}>
              <span className={styles.planFeatureItem}>Tudo do plano Salão</span>
              <span className={styles.planFeatureItem}>
                Comparativo entre unidades
              </span>
              <span className={styles.planFeatureItem}>
                Cardápio padrão da rede
              </span>
              <span className={styles.planFeatureItem}>
                Atendimento dedicado
              </span>
            </div>
            <a href="#contato" className={styles.planCta}>
              Falar com a gente
            </a>
          </div>
        </Reveal>

        <p className={styles.footnote}>
          Primeiro mês por nossa conta. Sem fidelidade, cancela quando quiser.
        </p>
      </div>
    </section>
  );
}
