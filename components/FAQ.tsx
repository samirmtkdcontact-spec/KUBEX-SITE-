"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "Mes clients sont-ils vraiment sur Facebook ?",
    a: "Oui. La France compte 48,7 millions d'utilisateurs Facebook (NapoleonCat, déc. 2025), et la plateforme est largement utilisée par les 35-65 ans propriétaires de leur maison — exactement le profil qui investit dans le photovoltaïque. Ils n'y cherchent pas activement un installateur, mais c'est justement là que Meta Ads est utile : susciter la demande auprès des bons profils, là où ils passent déjà du temps.",
  },
  {
    q: "Comment ciblez-vous des propriétaires de maisons ?",
    a: "Le ciblage Meta permet de combiner zone géographique, statut de propriétaire, tranche d'âge (35-65 ans), type de logement et centres d'intérêt (économies d'énergie, maison, écologie). On concentre la diffusion sur les profils les plus susceptibles d'être propriétaires d'une maison individuelle avec une toiture exploitable. La faisabilité technique se vérifie ensuite lors de la qualification du lead.",
  },
  {
    q: "Les réformes des aides n'impactent-elles pas l'efficacité des ads ?",
    a: "C'est justement notre parti pris : on ne bâtit pas les campagnes sur une prime ou un taux de TVA qui peut changer du jour au lendemain. On met en avant des bénéfices durables — les économies sur facture (800 à 1 100 €/an, source Helios Solaire 2026), l'autoconsommation, la valorisation du bien. Quand une aide évolue, on ajuste le message ; le flux de leads, lui, ne s'effondre pas avec une réforme.",
  },
  {
    q: "Faut-il un budget pub en plus de la prestation ?",
    a: "Oui, ce sont deux postes distincts : nos honoraires de gestion (chiffrés sur devis après votre audit gratuit) et le budget publicitaire versé directement à Meta. Pour ce dernier, une fourchette de 200 à 500 €/mois est recommandée pour une PME afin d'alimenter correctement l'algorithme et obtenir des données exploitables (source : Effinity 2026). On définit ensemble ce qui est réaliste pour votre zone.",
  },
  {
    q: "Travaillez-vous dans toute la France ?",
    a: "Oui. Nos campagnes s'adressent aux installateurs photovoltaïque RGE partout en France métropolitaine. Le ciblage géographique de Meta nous permet de concentrer la diffusion sur votre zone d'intervention précise — une ville, un département ou un rayon autour de votre entreprise. Et avec la formule Domination, nous pouvons travailler en exclusivité sur votre département, sous réserve de disponibilité.",
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
