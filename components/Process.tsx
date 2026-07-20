import Reveal from "./Reveal";

const steps = [
  {
    title: "Vous réservez un audit gratuit",
    desc: "30 minutes, en visio ou par téléphone. Sans engagement.",
  },
  {
    title: "On analyse votre zone et vos concurrents",
    desc: "Potentiel de leads, positionnement des acteurs locaux, profil acheteur.",
  },
  {
    title: "On vous présente une stratégie sur mesure",
    desc: "Ciblage, messages, budget recommandé — adaptés à votre métier et votre zone.",
  },
  {
    title: "Vous donnez votre accord — on lance",
    desc: "Création des campagnes Meta Ads et mise en ligne.",
  },
  {
    title: "Vous recevez vos premiers leads",
    desc: "Suivi hebdomadaire et optimisation continue dès le démarrage.",
  },
];

export default function Process() {
  return (
    <section id="processus" className="py-24 sm:py-32">
      <div className="container-kubex">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Comment on travaille</span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-kubex-ink sm:text-4xl">
            De l'audit au premier lead —{" "}
            <span className="gradient-text">voici comment ça se passe</span>.
          </h2>
        </Reveal>

        <ol className="mx-auto mt-16 max-w-2xl">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 80}>
              <div className="relative flex gap-5 pb-10 last:pb-0">
                {/* Ligne verticale de connexion */}
                {i < steps.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute left-[22px] top-12 h-[calc(100%-2rem)] w-px bg-gradient-to-b from-kubex-accent/60 to-kubex-accent/10"
                  />
                )}
                <div className="z-10 flex h-11 w-11 flex-none items-center justify-center rounded-full bg-kubex-gradient font-display text-base font-bold text-white shadow-kubex">
                  {i + 1}
                </div>
                <div className="pt-1">
                  <h3 className="font-display text-lg font-semibold text-kubex-ink">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-kubex-ink/65">
                    {step.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mx-auto mt-6 max-w-2xl">
          <p className="rounded-xl border border-kubex-ink/10 bg-white/70 px-5 py-4 text-center text-sm text-kubex-ink/60 backdrop-blur-sm">
            Les tarifs sont communiqués lors de l'audit selon votre situation,
            votre zone et vos objectifs.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
