import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Audit",
    desc: "On analyse votre marché, votre zone et vos concurrents locaux. C'est la base de tout ce qu'on fait ensuite.",
  },
  {
    n: "02",
    title: "Création des campagnes",
    desc: "Visuels, messages, ciblage — tout est construit pour votre métier et votre secteur. On lance quand vous validez.",
  },
  {
    n: "03",
    title: "Optimisation",
    desc: "Suivi hebdomadaire, ajustements en continu. On pilote vos campagnes pour améliorer les résultats dans la durée.",
  },
];

export default function System() {
  return (
    <section id="systeme" className="py-24 text-kubex-ink sm:py-32">
      <div className="container-kubex">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Notre approche</span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Le <span className="gradient-text">Système Kube</span>
          </h2>
          <p className="mt-4 text-lg text-kubex-ink/70">
            Une méthode en 3 étapes construite spécifiquement pour les
            installateurs énergie. Pas de template générique — une stratégie
            taillée pour votre métier, votre zone, votre certification.
          </p>
        </Reveal>

        <div className="relative mx-auto mt-20 max-w-5xl">
          {/* Ligne de connexion horizontale entre les cercles (desktop) */}
          <div
            aria-hidden
            className="absolute left-[16%] right-[16%] top-12 hidden h-0.5 bg-gradient-to-r from-kubex-accent/20 via-kubex-accent/60 to-kubex-accent/20 lg:block"
          />

          <ol className="grid gap-14 lg:grid-cols-3 lg:gap-10">
            {steps.map((step, i) => (
              <Reveal as="li" key={step.n} delay={i * 120}>
                <div className="flex flex-col items-center text-center">
                  <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-kubex-gradient font-display text-3xl font-bold text-white shadow-kubex ring-8 ring-white">
                    {step.n}
                  </div>
                  <h3 className="mt-7 font-display text-2xl font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-xs text-base leading-relaxed text-kubex-ink/65">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
