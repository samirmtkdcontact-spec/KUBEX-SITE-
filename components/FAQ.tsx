"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "Quel budget faut-il prévoir ?",
    a: "Il y a deux postes distincts : nos honoraires de gestion (à partir de 490 €/mois) et le budget publicitaire versé directement à Meta. Pour ce dernier, une fourchette de 200 à 500 €/mois est recommandée pour une PME afin d'alimenter correctement l'algorithme et obtenir des données exploitables (source : Effinity 2026). On définit ensemble ce qui est réaliste pour votre situation.",
  },
  {
    q: "Combien de temps avant de voir des résultats ?",
    a: "Honnêtement : il faut du temps. L'algorithme Meta a besoin d'une phase d'apprentissage et de données pour s'optimiser, ce qui prend généralement quelques semaines. Les premiers contacts peuvent arriver rapidement, mais une campagne se juge sur la durée, une fois les audiences et messages affinés. Personne de sérieux ne peut vous promettre un flux de clients dès le premier jour.",
  },
  {
    q: "Quelle différence avec Google Ads ?",
    a: "Google Ads capte une demande existante : la personne cherche déjà « plombier + ville ». Meta Ads (Facebook/Instagram) crée la demande : on va chercher des propriétaires qui ne vous cherchent pas encore mais correspondent à votre cible, par zone, profil et centres d'intérêt. Les deux sont complémentaires ; nous sommes spécialisés sur Meta, particulièrement efficace pour la notoriété locale et la génération de demandes.",
  },
  {
    q: "Travaillez-vous partout en France ?",
    a: "Oui. Nos campagnes s'adressent aux artisans du BTP partout en France, en métropole. Le ciblage géographique de Meta nous permet de concentrer la diffusion sur votre zone d'intervention précise, qu'il s'agisse d'une ville, d'un département ou d'un rayon autour de votre atelier.",
  },
  {
    q: "Y a-t-il une exclusivité de zone ?",
    a: "Nous évitons de faire campagne pour deux artisans directement concurrents sur la même zone et le même métier, car cela nuirait à l'efficacité de chacun. L'exclusivité éventuelle se discute lors de l'audit, en fonction de votre secteur géographique et de votre activité. C'est un point qu'on aborde clairement, en toute transparence.",
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
    <section id="faq" className="bg-white py-20 sm:py-28">
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
