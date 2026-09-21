import Image from "next/image";
import styles from "./Footer.module.css";

const COLUMNS = [
  {
    title: "Páginas",
    links: [
      { href: "#", label: "Início" },
      { href: "#como-funciona", label: "Como funciona" },
      { href: "#recursos", label: "Recursos" },
      { href: "#planos", label: "Planos" },
      { href: "#contato", label: "Contato" },
    ],
  },
  {
    title: "Utilidade",
    links: [
      { href: "#", label: "Licenças" },
      { href: "#", label: "Política de privacidade" },
      { href: "#", label: "Termos de uso" },
    ],
  },
  {
    title: "Redes",
    links: [
      { href: "#", label: "Instagram" },
      { href: "#", label: "WhatsApp" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.columns}>
          {COLUMNS.map((col) => (
            <div key={col.title} className={styles.column}>
              <span className={styles.columnTitle}>{col.title}</span>
              <div className={styles.columnLinks}>
                {col.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={styles.columnLink}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.wordmarkRow}>
          <span className={styles.wordmark}>comanda digital</span>
        </div>

        <div className={styles.bottomBar}>
          <Image
            src="/images/logo-horizontal-branco.png"
            alt="Comanda Digital"
            width={105}
            height={20}
            className={styles.bottomLogo}
          />
          <span className={styles.copyright}>
            © 2026 Comanda Digital. Todos os direitos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}
