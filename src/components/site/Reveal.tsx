"use client";

import { useEffect, useRef } from "react";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export default function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    el.style.opacity = "0";
    el.style.transform = "translateY(14px)";
    el.style.transition = `opacity var(--dur-slow) var(--ease-entrance) ${delay}ms, transform var(--dur-slow) var(--ease-entrance) ${delay}ms`;

    const reveal = () => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);

    // Safety net: guarantees content isn't left permanently invisible if the
    // observer never fires (e.g. full-page capture tools that don't scroll,
    // print/PDF export, or an element that's already off-screen on load).
    const fallback = window.setTimeout(reveal, 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
