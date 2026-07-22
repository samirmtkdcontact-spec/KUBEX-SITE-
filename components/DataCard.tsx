import type { DataCard as DataCardType } from "@/lib/data";

/**
 * Data card sourcée avec tooltip interactif au survol.
 * - Card : fond blanc semi-transparent, texte sombre, scale + glow au hover
 * - Tooltip : panneau en dessous (bordure dégradée), source + contexte + lien
 * Implémentation 100 % CSS (group hover Tailwind), aucun JS.
 */
export default function DataCard({ card }: { card: DataCardType }) {
  return (
    <div className="group relative">
      <article className="flex h-full flex-col rounded-2xl bg-white/95 p-6 shadow-lg ring-1 ring-white/40 backdrop-blur-sm transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-[0_24px_60px_-15px_rgba(0,180,255,0.55)]">
        <p className="font-display text-4xl font-bold gradient-text">
          {card.value}
        </p>
        <h3 className="mt-3 flex-1 font-semibold leading-snug text-kubex-ink">
          {card.label}
        </h3>
        <p className="mt-4 text-xs font-medium text-kubex-ink/45">
          Source : {card.source}
        </p>
      </article>

      {/* Tooltip — apparait AU-DESSUS de la card au survol (fond navy, lisible) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-full z-[9999] translate-y-2 pb-3 opacity-0 transition-all duration-[250ms] ease-out group-hover:translate-y-0 group-hover:opacity-100">
        <div
          style={{
            background: "#003F5C",
            border: "1px solid rgba(0,180,255,0.3)",
            borderRadius: "12px",
            padding: "16px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          }}
        >
          <p className="text-sm leading-relaxed text-white">{card.tooltip}</p>
          <p className="mt-2 text-xs font-medium text-white/55">
            {card.source}
          </p>
          <span
            className="mt-3 inline-flex items-center gap-1 text-sm font-semibold"
            style={{ color: "#00B4FF" }}
          >
            En savoir plus <span aria-hidden>→</span>
          </span>
        </div>
      </div>
    </div>
  );
}
