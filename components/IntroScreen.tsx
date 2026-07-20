"use client";

import { useEffect, useState } from "react";

const WORD = "KUBEX";

/**
 * Écran d'intro plein écran joué au chargement de la page.
 * - Phase 1 (0–0.7s) : le carré logo apparaît en scale 0.2 → 1 + glow bleu
 * - Phase 2 (0.7–1.4s) : « KUBEX » s'écrit lettre par lettre (stagger 80ms)
 * - Phase 3 (1.4–2.0s) : « PHOTOVOLTAÏQUE · POMPE À CHALEUR » apparaît en fade
 * - À 2.2s : fade out + translation -20px (400ms), puis retrait du DOM
 *
 * Les animations sont en CSS keyframes (voir globals.css). Le JS ne gère que
 * le séquencement de sortie et le démontage. prefers-reduced-motion masque
 * l'écran via CSS et on démonte immédiatement.
 */
export default function IntroScreen() {
  const [leaving, setLeaving] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      setDone(true);
      return;
    }

    const leaveTimer = setTimeout(() => setLeaving(true), 2200);
    const doneTimer = setTimeout(() => setDone(true), 2600);
    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (done) return null;

  return (
    <div
      className={`intro-screen ${leaving ? "intro-screen--leaving" : ""}`}
      role="presentation"
      aria-hidden
    >
      <div className="relative flex items-center justify-center">
        <span className="intro-glow" />
        <svg
          className="intro-logo"
          width={116}
          height={116}
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="intro-logo-gradient"
              x1="0"
              y1="0"
              x2="48"
              y2="48"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#00B4FF" />
              <stop offset="1" stopColor="#003F5C" />
            </linearGradient>
          </defs>
          <rect width="48" height="48" rx="12" fill="url(#intro-logo-gradient)" />
          <path
            d="M17 13.5h4.4v8.1l7.3-8.1h5.3l-7.9 8.6 8.3 12.4h-5.2l-6-9.1-1.8 1.95v7.15H17z"
            fill="#FFFFFF"
          />
        </svg>
      </div>

      <div className="intro-wordmark mt-8" aria-label="KUBEX">
        {WORD.split("").map((letter, i) => (
          <span
            key={`${letter}-${i}`}
            className="intro-letter"
            style={{ animationDelay: `${700 + i * 80}ms` }}
          >
            {letter}
          </span>
        ))}
      </div>

      <p className="intro-tagline mt-5">PHOTOVOLTAÏQUE · POMPE À CHALEUR</p>
    </div>
  );
}
