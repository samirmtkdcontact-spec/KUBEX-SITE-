import Reveal from "./Reveal";

const promises = [
  "Construire des campagnes Meta Ads sérieuses et adaptées à votre secteur",
  "Vous accompagner avec des données réelles et vérifiées",
  "Être transparents sur les performances, semaine après semaine",
  "Ajuster la stratégie si les résultats ne sont pas au rendez-vous",
];

const noPromises = [
  "Le volume exact de leads générés chaque mois",
  "L'uniformité des résultats d'un client à l'autre",
  "L'impact des évolutions réglementaires sur la demande",
  "La conversion des leads en chantiers signés",
];

function Check() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 flex-none text-emerald-500"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0l-3.5-3.5a1 1 0 1 1 1.4-1.4l2.8 2.79 6.8-6.79a1 1 0 0 1 1.4 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function Cross() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 flex-none text-kubex-ink/35"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M5.3 5.3a1 1 0 0 1 1.4 0L10 8.6l3.3-3.3a1 1 0 1 1 1.4 1.4L11.4 10l3.3 3.3a1 1 0 0 1-1.4 1.4L10 11.4l-3.3 3.3a1 1 0 0 1-1.4-1.4L8.6 10 5.3 6.7a1 1 0 0 1 0-1.4Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function DoDont() {
  return (
    <section id="honnetete" className="py-24 sm:py-32">
      <div className="container-kubex">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Notre engagement</span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-kubex-ink sm:text-4xl">
            Notre engagement envers <span className="gradient-text">vous</span>.
          </h2>
          <p className="mt-4 text-lg text-kubex-ink/70">
            Nous préférons être clairs dès le départ plutôt que de promettre ce
            que nous ne pouvons pas garantir.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-emerald-500/25 bg-kubex-light/70 p-7">
              <h3 className="font-display text-xl font-bold text-kubex-to">
                Nos engagements
              </h3>
              <ul className="mt-5 space-y-3.5">
                {promises.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-kubex-ink/80">
                    <Check />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="h-full rounded-2xl border border-kubex-ink/10 bg-white p-7">
              <h3 className="font-display text-xl font-bold text-kubex-ink/70">
                Ce que nous ne contrôlons pas
              </h3>
              <ul className="mt-5 space-y-3.5">
                {noPromises.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-kubex-ink/65">
                    <Cross />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
