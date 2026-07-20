/**
 * Données réelles et vérifiées — double spécialisation photovoltaïque (PV)
 * et pompe à chaleur (PAC). Chaque chiffre est accompagné de sa source et
 * d'un contexte affiché au survol — AUCUNE donnée inventée.
 */

export type DataCard = {
  value: string;
  label: string;
  source: string;
  /** Contexte supplémentaire affiché dans le tooltip au survol */
  tooltip: string;
  /** Lien « En savoir plus → » vers la source officielle */
  href: string;
};

/** Section photovoltaïque — 6 data cards sourcées */
export const pvCards: DataCard[] = [
  {
    value: "5,9 GW",
    label: "installés en 2025 — record historique",
    source: "Hellowatt / SDES, jan. 2026",
    tooltip:
      "Progression de +25 % vs 2024 (4,7 GW). La France accélère vers son objectif de 100 GW en 2050.",
    href: "https://www.statistiques.developpement-durable.gouv.fr",
  },
  {
    value: "1 298 633",
    label: "installations raccordées au T1 2026",
    source: "SDES / Enedis, ECOinfos 2026",
    tooltip:
      "Représente 29 310 MW de puissance totale raccordée sur le réseau Enedis au T1 2026.",
    href: "https://www.cre.fr",
  },
  {
    value: "+18,84 %",
    label: "de croissance projetée par an jusqu'en 2031",
    source: "Mordor Intelligence, 2026",
    tooltip:
      "Le parc devrait atteindre 78,1 GW en 2031 contre 32,9 GW en 2026 — soit plus du double en 5 ans.",
    href: "https://www.mordorintelligence.com",
  },
  {
    value: "800–1 100 €",
    label: "d'économies par an pour un foyer moyen",
    source: "Helios Solaire, 2026",
    tooltip:
      "Cumul estimé de 20 000 à 30 000 € sur 25 ans (durée de vie garantie des panneaux). Principal argument client depuis la réforme des primes.",
    href: "https://www.helios-solaire.fr",
  },
  {
    value: "13 %",
    label: "des nouvelles installations avec stockage",
    source: "Hellowatt, jan. 2026",
    tooltip:
      "4 636 projets avec batterie au T4 2025. Le stockage devient un argument de vente fort face à la baisse des tarifs de rachat.",
    href: "https://www.hellowatt.fr",
  },
  {
    value: "60 000",
    label: "artisans RGE spécialisés en résidentiel",
    source: "ECOinfos, 2026",
    tooltip:
      "Touchés par les réformes successives de 2025. Ceux qui ont un flux régulier de leads résistent mieux aux turbulences réglementaires.",
    href: "https://www.ecoinfos.fr",
  },
];

/** Section pompe à chaleur — 6 data cards sourcées */
export const pacCards: DataCard[] = [
  {
    value: "+11 %",
    label: "de ventes de PAC en Europe en 2025",
    source: "EHPA, 2025",
    tooltip:
      "2,63 millions de PAC vendues dans 16 pays européens en 2025, contre 2,38 millions en 2024. Reprise après 2 ans de baisse.",
    href: "https://www.ehpa.org",
  },
  {
    value: "×2",
    label: "ventes de PAC en France depuis oct. 2025",
    source: "Hello Watt / Révolution Énergétique, déc. 2025",
    tooltip:
      "Revalorisation des aides et contexte énergétique favorable ont relancé le marché français après la chute de 2024.",
    href: "https://www.revolution-energetique.com",
  },
  {
    value: "10 800 €",
    label: "d'aides cumulables pour une PAC air-eau",
    source: "ANAH / Idéal Système, 2026",
    tooltip:
      "Cumul MaPrimeRénov' (jusqu'à 5 000 €) + CEE (jusqu'à 7 200 €) pour un ménage très modeste sur une PAC air-eau. Hors éco-PTZ.",
    href: "https://www.anah.gouv.fr",
  },
  {
    value: "3,6 Mds €",
    label: "budget MaPrimeRénov' 2026",
    source: "ANAH, fév. 2026",
    tooltip:
      "Guichet rouvert le 23 février 2026 pour tous les ménages après fermeture temporaire. PAC air-eau et géothermique éligibles.",
    href: "https://www.maprimerenov.gouv.fr",
  },
  {
    value: "1 million",
    label: "de PAC par an visées d'ici 2027",
    source: "Plan PAC, economie.gouv.fr",
    tooltip:
      "Le gouvernement vise à tripler la production nationale. 30 000 installateurs PAC à former. Marché en forte tension sur la main d'œuvre qualifiée.",
    href: "https://www.economie.gouv.fr",
  },
  {
    value: "49 %",
    label: "des artisans PAC : moins de 3 mois de visibilité",
    source: "CAPEB, 2025",
    tooltip:
      "Moins d'un artisan sur deux a son carnet rempli à plus de 3 mois. L'acquisition digitale devient un enjeu de survie.",
    href: "https://www.capeb.fr",
  },
];

/** Contenu des bandeaux défilants (marquee) entre les sections */
export const pvMarquee = [
  "PHOTOVOLTAÏQUE",
  "1,3M d'installations",
  "Record 5,9 GW en 2025",
  "RGE QualiPV",
  "Économies 20 000 €+ sur 25 ans",
  "Meta Ads",
  "KUBEX",
];

export const pacMarquee = [
  "POMPE À CHALEUR",
  "+11 % ventes Europe 2025",
  "Jusqu'à 10 800 € d'aides cumulables",
  "RGE QualiPAC",
  "MaPrimeRénov'",
  "Meta Ads",
  "KUBEX",
];
