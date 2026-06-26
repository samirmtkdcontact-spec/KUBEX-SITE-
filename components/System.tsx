import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Audit",
    desc: "On analyse votre métier, votre zone, votre concurrence et votre objectif. Pas de campagne avant d'avoir compris votre marché et défini ce qu'est un « bon client » pour vous.",
  },
  {
    n: "02",
    title: "Ciblage",
    desc: "On définit les audiences pertinentes : propriétaires de votre secteur géographique, par profil et centres d'intérêt, pour ne pas dépenser un euro sur des gens hors cible.",
  },
  {
    n: "03",
    title: "Création",
    desc: "On produit des visuels et messages clairs qui parlent de votre métier et de la transformation que vous apportez. Des annonces faites pour générer des demandes, pas des likes.",
  },
  {
    n: "04",
    title: "Optimisation",
    desc: "On suit les données semaine après semaine, on coupe ce qui ne marche pas, on amplifie ce qui performe. L'algorithme Meta s'affine avec le temps — on l'alimente correctement.",
  },
];

export default function System() {
  return (
    <section id="systeme" className="bg-kubex-ink py-20 text-white sm:py-28">
      <div className="container-kubex">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm font-semibold text-kubex-accent">
            Le système KUBE
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Une méthode en 4 étapes, sans boîte noire
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Chaque étape est documentée et partagée avec vous. Vous savez ce
            qu'on fait, pourquoi, et ce que ça donne.
          </p>
        </Reveal>

        <div className="relative mt-16">
          {/* Ligne de connexion (desktop) */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-kubex-accent/40 to-transparent lg:block"
          />

          <ol className="grid gap-8 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal as="li" key={step.n} delay={i * 100}>
                <div className="relative flex flex-col">
                  <div className="z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-kubex-gradient font-display text-lg font-bold text-white shadow-kubex">
                    {step.n}
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
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
