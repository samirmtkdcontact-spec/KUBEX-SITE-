import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Audit",
    desc: "Zone géographique, concurrents locaux, profil acheteur idéal. On analyse votre marché avant de lancer la moindre campagne.",
  },
  {
    n: "02",
    title: "Ciblage Meta Ads",
    desc: "Propriétaires de maisons individuelles, tranches d'âge, centres d'intérêt énergie. Un ciblage chirurgical sur votre zone.",
  },
  {
    n: "03",
    title: "Création des campagnes",
    desc: "Visuels et messages adaptés à votre niche : économies d'énergie, aides disponibles, confort thermique. Des campagnes qui parlent à vos futurs clients.",
  },
  {
    n: "04",
    title: "Optimisation continue",
    desc: "Analyse hebdomadaire, ajustements en temps réel. On fait baisser le coût par lead et monter la qualité des contacts.",
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
            Une méthode en 4 étapes construite spécifiquement pour les
            installateurs énergie. Pas de template générique — une stratégie
            taillée pour votre métier, votre zone, votre certification.
          </p>
        </Reveal>

        <div className="relative mt-20">
          {/* Ligne de connexion (desktop) */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[60px] hidden h-0.5 bg-gradient-to-r from-transparent via-kubex-accent/50 to-transparent lg:block"
          />

          <ol className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal as="li" key={step.n} delay={i * 100}>
                <div className="relative flex h-full flex-col rounded-3xl border border-kubex-ink/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-kubex">
                  <div className="z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-kubex-gradient font-display text-xl font-bold text-white shadow-kubex">
                    {step.n}
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-kubex-ink/65">
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
