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

      {/* Tooltip — apparait sous la card au survol */}
      <div className="pointer-events-none absolute left-0 right-0 top-full z-20 translate-y-2 pt-3 opacity-0 transition-all duration-[250ms] ease-out group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
        <div className="rounded-xl bg-kubex-gradient p-px shadow-kubex">
          <div className="rounded-[11px] bg-white p-4">
            <p className="text-sm leading-relaxed text-kubex-ink/75">
              {card.tooltip}
            </p>
            <p className="mt-2 text-xs font-medium text-kubex-ink/45">
              {card.source}
            </p>
            <a
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-kubex-accent transition-colors hover:text-kubex-to"
            >
              En savoir plus <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
