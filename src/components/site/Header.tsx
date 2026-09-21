"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#recursos", label: "Recursos" },
  { href: "#planos", label: "Planos" },
];

const MENU_EXIT_MS = 190;

export default function Header({ ctaLabel }: { ctaLabel: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  // Deixa a animação de saída rodar antes de desmontar; sem isso o menu
  // simplesmente sumia da tela.
  function closeMenu() {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setMenuOpen(false);
      return;
    }
    setClosing(true);
    window.setTimeout(() => {
      setClosing(false);
      setMenuOpen(false);
    }, MENU_EXIT_MS);
  }

  function toggleMenu() {
    if (menuOpen) closeMenu();
    else setMenuOpen(true);
  }

  return (
    <>
      <header className={styles.header}>
        <Image
          src="/images/logo-horizontal-branco.png"
          alt="Comanda Digital"
          width={232}
          height={44}
        />

        <nav className={`${styles.nav} ${styles.desktopNav}`}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
          <a href="#contato" className={styles.navCta}>
            {ctaLabel}
          </a>
        </nav>

        <button
          className={`${styles.hamburger} ${styles.mobileToggle}`}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span className={styles.hamburgerBar} />
          <span className={styles.hamburgerBar} />
        </button>
      </header>

      {menuOpen && (
        <div
          className={`${styles.mobileMenuWrap} ${
            closing ? styles.mobileMenuWrapClosing : ""
          }`}
        >
          <div className={styles.mobileMenu}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={styles.mobileLink}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            <a href="#contato" className={styles.mobileCta} onClick={closeMenu}>
              {ctaLabel}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
