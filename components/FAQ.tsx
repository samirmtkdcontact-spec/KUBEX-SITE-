"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "En quoi Meta Ads est-il adapté à mon métier ?",
    a: "Vos futurs clients — propriétaires de maisons individuelles de 35 à 65 ans — passent chaque jour du temps sur Meta (48,7 millions d'utilisateurs actifs en France, source NapoleonCat déc. 2025). Ils ne cherchent pas activement un installateur, mais Meta Ads permet de susciter la demande auprès des bons profils, sur votre zone précise. Là où le référencement met des mois à porter, une campagne bien ciblée met votre offre sous leurs yeux en continu.",
  },
  {
    q: "Combien de temps avant les premiers leads ?",
    a: "Honnêtement : il faut un peu de temps. L'algorithme Meta a besoin d'une phase d'apprentissage et de données pour s'optimiser, ce qui prend généralement quelques semaines. Les premiers leads peuvent arriver assez vite, mais une campagne se juge sur la durée, une fois les audiences et messages affinés. Personne de sérieux ne peut vous promettre un volume de leads dès le premier jour.",
  },
  {
    q: "Qu'est-ce qui garantit la qualité des leads ?",
    a: "Rien n'est « garanti » — mais tout est fait pour la maximiser. On cible finement (zone, profil propriétaire, centres d'intérêt), on qualifie via les messages et les formulaires, et on optimise chaque semaine pour écarter les contacts hors cible. La qualité se travaille en continu, avec vos retours terrain sur les leads reçus : ceux qui se transforment nous disent quoi amplifier.",
  },
  {
    q: "Les évolutions réglementaires impactent-elles vos campagnes ?",
    a: "On construit les campagnes sur des bénéfices durables — économies sur facture, confort thermique, valorisation du bien — plutôt que sur une prime ou un taux de TVA précis qui peut changer. Quand une aide évolue, on ajuste le message rapidement ; le flux de leads, lui, ne s'effondre pas avec une réforme. C'est un choix assumé pour vous rendre moins dépendant des à-coups réglementaires.",
  },
  {
    q: "Travaillez-vous dans toute la France ?",
    a: "Oui. Nos campagnes s'adressent aux installateurs énergie RGE partout en France métropolitaine. Le ciblage géographique de Meta nous permet de concentrer la diffusion sur votre zone d'intervention précise — une ville, un département ou un rayon autour de votre entreprise.",
  },
  {
    q: "Puis-je travailler avec vous sur les deux niches ?",
    a: "Oui. Beaucoup d'installateurs proposent à la fois le photovoltaïque et la pompe à chaleur. On peut construire des campagnes distinctes pour chaque activité, avec des audiences et des messages propres, ou une stratégie combinée selon votre positionnement. On en discute lors de l'audit pour définir la meilleure approche.",
  },
];

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-kubex-ink/10">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-display text-base font-semibold text-kubex-ink sm:text-lg">
          {q}
        </span>
        <svg
          className={`h-5 w-5 flex-none text-kubex-accent transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden
        >
          <path d="M10 4a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H5a1 1 0 1 1 0-2h4V5a1 1 0 0 1 1-1Z" />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm leading-relaxed text-kubex-ink/70">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="container-kubex">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-kubex-ink sm:text-4xl">
            Les questions qu'on nous pose
          </h2>
          <p className="mt-4 text-lg text-kubex-ink/70">
            Des réponses directes, sans langue de bois.
          </p>
        </Reveal>

        <Reveal className="mx-auto mt-12 max-w-3xl">
          <div className="rounded-2xl border border-kubex-ink/10 bg-white px-6 sm:px-8">
            {faqs.map((faq) => (
              <AccordionItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
