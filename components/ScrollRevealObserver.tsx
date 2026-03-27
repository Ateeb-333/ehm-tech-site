"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const REVEAL_SELECTOR = [
  ".main-shell .section-card",
  ".main-shell article",
  ".main-shell form",
  ".main-shell aside",
  ".main-shell li.rounded-xl",
].join(", ");

export function ScrollRevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const nodes = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)).filter(
      (node) => !node.closest(".site-header") && !node.closest(".site-footer")
    );

    nodes.forEach((node, index) => {
      node.classList.add("reveal-item");
      node.style.setProperty("--reveal-delay", `${(index % 8) * 60}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target as HTMLElement;
          target.classList.add("reveal-visible");
          observer.unobserve(target);
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
