"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "Mes patients sont-ils vraiment sur Facebook ?",
    a: "Oui. La France compte 48,7 millions d'utilisateurs Facebook (NapoleonCat, déc. 2025), et la plateforme est largement utilisée par les 55-75 ans — le cœur de cible de l'appareillage auditif. On touche aussi les proches aidants (enfants adultes) qui cherchent activement une solution pour leurs parents. C'est justement là que Meta Ads est utile : susciter la demande auprès des bons profils, là où ils passent déjà du temps.",
  },
  {
    q: "Comment ciblez-vous des personnes malentendantes ?",
    a: "Meta n'autorise pas de cibler directement une donnée de santé, et c'est normal. On procède autrement : par zone géographique autour de votre centre, tranche d'âge (55-80 ans), et centres d'intérêt liés (bien-être, santé des seniors), en visant aussi les proches aidants. La qualification du besoin auditif se fait ensuite au bilan — le rôle des campagnes est d'amener les bonnes personnes à franchir votre porte.",
  },
  {
    q: "Meta Ads est-il compatible avec la déontologie ?",
    a: "Oui, à condition de respecter le cadre. La communication des professionnels de santé est encadrée : pas d'allégation trompeuse, pas de comparaison dénigrant un confrère, pas de promesse de résultat thérapeutique. Nos annonces restent factuelles et informatives (bilan auditif, 100 % Santé, prise de rendez-vous) et chaque message est validé avec vous avant diffusion. Vous restez responsable et maître de votre communication.",
  },
  {
    q: "Faut-il un budget pub en plus de la prestation ?",
    a: "Oui, ce sont deux postes distincts : nos honoraires de gestion (chiffrés sur devis après votre audit gratuit) et le budget publicitaire versé directement à Meta. Pour ce dernier, une fourchette de 200 à 500 €/mois est recommandée pour une PME afin d'alimenter correctement l'algorithme et obtenir des données exploitables (source : Effinity 2026). On définit ensemble ce qui est réaliste pour votre zone.",
  },
  {
    q: "Travaillez-vous dans toute la France ?",
    a: "Oui. Nos campagnes s'adressent aux audioprothésistes indépendants et centres auditifs partout en France métropolitaine. Le ciblage géographique de Meta nous permet de concentrer la diffusion sur votre zone de chalandise précise — une ville, un quartier ou un rayon autour de votre centre. Et avec la formule Domination, nous pouvons travailler en exclusivité sur votre secteur, sous réserve de disponibilité.",
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
