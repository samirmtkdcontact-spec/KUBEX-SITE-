import Reveal from "./Reveal";

type Offer = {
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  commitment: string;
  features: string[];
  highlighted?: boolean;
};

const offers: Offer[] = [
  {
    name: "Lancement",
    tagline: "Pour tester Meta Ads sur votre zone locale, sans vous engager.",
    price: "Tarif sur devis",
    priceNote: "Audit gratuit inclus",
    commitment: "Sans engagement",
    features: [
      "Audit de votre zone et des propriétaires éligibles",
      "1 campagne de génération de leads ciblée",
      "Création des visuels et messages orientés aides",
      "Suivi mensuel des leads et des coûts",
      "Recommandation de budget pub adaptée",
    ],
  },
  {
    name: "Croissance",
    tagline: "Le Système Kube complet PAC pour un flux de leads régulier.",
    price: "Tarif sur devis",
    priceNote: "Audit gratuit inclus",
    commitment: "Engagement 3 mois",
    highlighted: true,
    features: [
      "Tout le contenu de Lancement",
      "Système Kube complet : audit → ciblage → création → optimisation",
      "Plusieurs campagnes & tests d'audiences",
      "Optimisation hebdomadaire des annonces",
      "Tableau de bord partagé + point téléphonique mensuel",
    ],
  },
  {
    name: "Domination",
    tagline: "Pour prendre votre département et verrouiller votre zone.",
    price: "Sur mesure",
    priceNote: "Audit stratégique offert",
    commitment: "Exclusivité département",
    features: [
      "Tout le contenu de Croissance",
      "Exclusivité sur votre département (sous réserve de disponibilité)",
      "Stratégie multi-campagnes avancée",
      "Production de contenus dédiée",
      "Optimisation continue, reporting détaillé & accompagnement prioritaire",
    ],
  },
];

function Check() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 flex-none text-kubex-accent"
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

export default function Offers() {
  return (
    <section id="offres" className="py-24 sm:py-32">
      <div className="container-kubex">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Nos offres</span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-kubex-ink sm:text-4xl">
            Trois formules, une seule philosophie
          </h2>
          <p className="mt-4 text-lg text-kubex-ink/70">
            Chaque formule est chiffrée après un audit gratuit de votre zone :
            on ne vend pas un tarif au hasard. Le budget publicitaire (versé
            directement à Meta) reste distinct de nos honoraires de gestion — on
            recommande 200 à 500 €/mois pour bien démarrer.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {offers.map((offer, i) => (
            <Reveal key={offer.name} delay={i * 90}>
              <article
                className={`flex h-full flex-col rounded-2xl border p-7 ${
                  offer.highlighted
                    ? "border-transparent bg-kubex-gradient text-white shadow-kubex"
                    : "border-kubex-ink/10 bg-white text-kubex-ink"
                }`}
              >
                {offer.highlighted && (
                  <span className="mb-3 inline-flex w-fit rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
                    Le plus choisi
                  </span>
                )}
                <h3 className="font-display text-2xl font-bold">{offer.name}</h3>
                <p
                  className={`mt-1.5 text-sm ${
                    offer.highlighted ? "text-white/80" : "text-kubex-ink/65"
                  }`}
                >
                  {offer.tagline}
                </p>

                <div className="mt-5">
                  <span className="font-display text-2xl font-bold sm:text-3xl">
                    {offer.price}
                  </span>
                  <span
                    className={`mt-1.5 block text-sm font-semibold ${
                      offer.highlighted ? "text-white" : "text-kubex-to"
                    }`}
                  >
                    {offer.priceNote}
                  </span>
                </div>

                <span
                  className={`mt-3 inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ${
                    offer.highlighted
                      ? "bg-white/15 text-white"
                      : "bg-kubex-light text-kubex-to"
                  }`}
                >
                  {offer.commitment}
                </span>

                <ul className="mt-6 flex-1 space-y-3">
                  {offer.features.map((f) => (
                    <li
                      key={f}
                      className={`flex gap-2.5 text-sm ${
                        offer.highlighted ? "text-white/90" : "text-kubex-ink/75"
                      }`}
                    >
                      <Check />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-7 inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-transform duration-200 hover:-translate-y-0.5 ${
                    offer.highlighted
                      ? "bg-white text-kubex-to"
                      : "bg-kubex-gradient text-white shadow-kubex"
                  }`}
                >
                  Réserver un audit gratuit
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <p className="mx-auto max-w-3xl text-center text-sm text-kubex-ink/50">
            Tarifs établis sur devis, après un audit gratuit, selon votre zone
            et votre situation. Le budget publicitaire Meta est à votre charge et
            reste votre propriété.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
