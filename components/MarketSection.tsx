import Reveal from "./Reveal";
import DataCard from "./DataCard";
import type { DataCard as DataCardType } from "@/lib/data";

type MarketSectionProps = {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
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
 * Section marché (photovoltaïque ou pompe à chaleur) : image de fond +
 * overlay dégradé, texte blanc, 6 data cards sourcées avec tooltips au survol.
 */
export default function MarketSection({
  id,
  eyebrow,
  title,
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
      className="relative bg-cover bg-center bg-no-repeat py-24 text-white sm:py-32"
      style={{ backgroundImage: `${overlay}, url("${image}")` }}
    >
      <div className="container-kubex">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
            {eyebrow}
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/75">
            {subtitle}
          </p>
        </Reveal>

        {/* Marge basse élargie pour laisser la place aux tooltips au survol */}
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
