import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Audit",
    desc: "On analyse votre zone de chalandise, vos concurrents locaux (réseaux comme indépendants) et le profil des patients de 65 ans et plus dans votre secteur. Pas de campagne avant d'avoir compris votre marché et défini ce qu'est un rendez-vous vraiment exploitable.",
  },
  {
    n: "02",
    title: "Ciblage",
    desc: "On vise les bonnes audiences : personnes malentendantes et proches aidants (enfants adultes qui cherchent pour leurs parents), tranche 55-80 ans, autour de votre centre. On ne dépense pas un euro sur des profils hors cible ou hors zone.",
  },
  {
    n: "03",
    title: "Création",
    desc: "On produit des annonces claires qui parlent de bilan auditif gratuit, du 100 % Santé sans reste à charge et de la qualité de vie retrouvée — les leviers qui déclenchent la prise de rendez-vous. Des publicités faites pour remplir l'agenda, pas pour collecter des likes.",
  },
  {
    n: "04",
    title: "Optimisation",
    desc: "On suit les données chaque semaine, on coupe ce qui ne marche pas, on amplifie ce qui performe. L'algorithme Meta s'affine avec le temps — on l'alimente correctement pour faire baisser le coût par rendez-vous.",
  },
];

export default function System() {
  return (
    <section id="systeme" className="py-24 text-kubex-ink sm:py-32">
      <div className="container-kubex">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Le système KUBE</span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Une méthode en 4 étapes, sans boîte noire
          </h2>
          <p className="mt-4 text-lg text-kubex-ink/70">
            Chaque étape est documentée et partagée avec vous. Vous savez ce
            qu'on fait, pourquoi, et ce que ça donne.
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
