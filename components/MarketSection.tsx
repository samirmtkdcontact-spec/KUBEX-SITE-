import Reveal from "./Reveal";
import DataCard from "./DataCard";
import type { DataCard as DataCardType } from "@/lib/data";

type MarketSectionProps = {
  id: string;
  /** Numéro de section affiché en accent, ex. "01" */
  index: string;
  /** Nom de la niche, ex. "Photovoltaïque" */
  name: string;
  /** Accroche courte sur une ligne */
  tagline: string;
  subtitle: string;
  /** Image de fond Unsplash (URL directe) */
  image: string;
  /** Overlay gradient posé par-dessus l'image pour la lisibilité */
  overlay: string;
  cards: DataCardType[];
  ctaLabel: string;
  ctaHref: string;
};

/**
 * Section marché (photovoltaïque ou pompe à chaleur) : grand titre numéroté
 * en haut, image de fond + overlay dégradé, texte blanc, 6 data cards sourcées
 * avec tooltips au survol.
 */
export default function MarketSection({
  id,
  index,
  name,
  tagline,
  subtitle,
  image,
  overlay,
  cards,
  ctaLabel,
  ctaHref,
}: MarketSectionProps) {
  return (
    <section
      id={id}
      className="relative bg-cover bg-center bg-no-repeat py-20 text-white sm:py-28"
      style={{ backgroundImage: `${overlay}, url("${image}")` }}
    >
      <div className="container-kubex">
        {/* Grand titre de section numéroté */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2
            className="font-display font-bold leading-none"
            style={{ fontSize: "clamp(42px, 6vw, 72px)" }}
          >
            <span className="text-kubex-accent">{index} /</span>{" "}
            <span className="text-gradient-white-accent">{name}</span>
          </h2>
          <p className="mt-4 font-display text-xl font-medium text-white/85 sm:text-2xl">
            {tagline}
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70">
            {subtitle}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal key={card.value + card.label} delay={(i % 3) * 90}>
              <DataCard card={card} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center">
          <a
            href={ctaHref}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold text-kubex-to shadow-kubex transition-transform duration-200 hover:-translate-y-0.5"
          >
            {ctaLabel} <span aria-hidden>→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
