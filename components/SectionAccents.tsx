"use client";

import { useEffect } from "react";

/**
 * Anime la bordure gauche de chaque section au scroll : de transparent vers
 * un bleu KUBEX discret, via IntersectionObserver. Prolonge visuellement la
 * bande passante verticale du site. (Les styles vivent dans globals.css.)
 */
export default function SectionAccents() {
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main > section")
    );
    if (sections.length === 0) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduce) {
      sections.forEach((s) => s.classList.add("section-accent-on"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-accent-on");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );

    sections.forEach((s) => {
      s.classList.add("section-accent");
      observer.observe(s);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
