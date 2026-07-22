import Reveal from "./Reveal";

function IconWrap({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-kubex-gradient text-white shadow-kubex">
      {children}
    </span>
  );
}

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const TargetIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" {...stroke} aria-hidden>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.4" />
  </svg>
);

const ChartIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" {...stroke} aria-hidden>
    <path d="M4 4v16h16" />
    <path d="M7 15l3.5-4 3 2.5L20 8" />
  </svg>
);

const EyeIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" {...stroke} aria-hidden>
    <path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12Z" />
    <circle cx="12" cy="12" r="2.5" />
  </svg>
);

const ShieldIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" {...stroke} aria-hidden>
    <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const blocks = [
  {
    icon: TargetIcon,
    title: "Spécialisation sectorielle",
    desc: "On ne travaille qu'avec des installateurs énergie. Ça veut dire qu'on connaît vos clients, vos aides, vos objections.",
  },
  {
    icon: ChartIcon,
    title: "Données vérifiées",
    desc: "Toutes les statistiques présentées sont sourcées et vérifiées. Aucun chiffre inventé pour vous convaincre.",
  },
  {
    icon: EyeIcon,
    title: "Transparence totale",
    desc: "Vous avez accès aux performances de vos campagnes. On ne cache rien, on explique tout, même quand ça ne va pas dans le bon sens.",
  },
  {
    icon: ShieldIcon,
    title: "Engagement sur la méthode",
    desc: "On s'engage sur une méthode rigoureuse, pas sur des volumes. L'honnêteté est notre seul avantage concurrentiel.",
  },
];

export default function WhyKubex() {
  return (
    <section id="pourquoi" className="bg-kubex-light py-24 sm:py-32">
      <div className="container-kubex">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Notre différence</span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-kubex-ink sm:text-4xl">
            Ce qui nous <span className="gradient-text">distingue</span>.
          </h2>
          <p className="mt-4 text-lg text-kubex-ink/70">
            Pas une agence généraliste. Une agence construite pour un seul
            secteur — l'énergie RGE.
          </p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
          {blocks.map((block, i) => (
            <Reveal key={block.title} delay={(i % 2) * 90}>
              <article className="flex h-full flex-col rounded-2xl border border-kubex-ink/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-kubex">
                <IconWrap>{block.icon}</IconWrap>
                <h3 className="mt-5 font-display text-lg font-semibold text-kubex-ink">
                  {block.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-kubex-ink/65">
                  {block.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
