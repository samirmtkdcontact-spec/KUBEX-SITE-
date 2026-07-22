"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "kubex-niche-banner-dismissed";

/**
 * Bannière d'orientation non intrusive, fixée en bas de l'écran.
 * Apparait 3 s après le chargement (slide-in depuis le bas), propose un accès
 * direct aux deux sections marché. Fermable (X) — masquée pour la session via
 * localStorage. z-index 40 (sous la nav). Respecte prefers-reduced-motion.
 */
export default function NicheBanner() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.localStorage.getItem(STORAGE_KEY) === "1") return;

    setMounted(true);
    const showTimer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(showTimer);
  }, []);

  function dismiss() {
    setVisible(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* localStorage indisponible : on masque juste pour cette vue */
    }
    // Retrait du DOM après la transition de sortie
    setTimeout(() => setMounted(false), 400);
  }

  if (!mounted) return null;

  return (
    <div
      className={`niche-banner fixed inset-x-0 bottom-0 z-40 border-t border-kubex-accent/20 transition-transform duration-[400ms] ease-out ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
      role="region"
      aria-label="Accès rapide aux marchés"
    >
      <div className="container-kubex flex h-14 items-center justify-between gap-3">
        <div className="flex items-center gap-3 overflow-x-auto sm:gap-5">
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span aria-hidden>🔥</span>
            <span className="text-sm font-medium text-kubex-ink">
              Pompe à chaleur
            </span>
            <a
              href="#section-pac"
              onClick={dismiss}
              className="text-sm font-semibold text-kubex-accent hover:text-kubex-to"
            >
              Voir →
            </a>
          </div>

          <span className="h-5 w-px flex-none bg-kubex-ink/15" aria-hidden />

          <div className="flex items-center gap-2 whitespace-nowrap">
            <span aria-hidden>☀️</span>
            <span className="text-sm font-medium text-kubex-ink">
              Photovoltaïque
            </span>
            <a
              href="#section-pv"
              onClick={dismiss}
              className="text-sm font-semibold text-kubex-accent hover:text-kubex-to"
            >
              Voir →
            </a>
          </div>
        </div>

        <button
          type="button"
          onClick={dismiss}
          aria-label="Fermer"
          className="flex h-8 w-8 flex-none items-center justify-center rounded-lg text-kubex-ink/50 transition-colors hover:bg-kubex-ink/5 hover:text-kubex-ink"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden
          >
            <path d="M5.3 5.3a1 1 0 0 1 1.4 0L10 8.6l3.3-3.3a1 1 0 1 1 1.4 1.4L11.4 10l3.3 3.3a1 1 0 0 1-1.4 1.4L10 11.4l-3.3 3.3a1 1 0 0 1-1.4-1.4L8.6 10 5.3 6.7a1 1 0 0 1 0-1.4Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
