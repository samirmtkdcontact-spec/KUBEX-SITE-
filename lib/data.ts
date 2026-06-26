/**
 * Données réelles et vérifiées — marché des pompes à chaleur (PAC),
 * aides d'État et Meta Ads en France.
 * Chaque chiffre est accompagné de sa source — AUCUNE donnée inventée.
 */

export type Stat = {
  value: string;
  label: string;
  source: string;
  detail?: string;
  icon?: string;
};

/** 3 stats « Pourquoi Meta Ads ? » mises en avant dans le hero */
export const heroStats: Stat[] = [
  {
    value: "48,7 M",
    label: "d'utilisateurs Facebook en France",
    source: "NapoleonCat, déc. 2025",
  },
  {
    value: "9,2 %",
    label: "taux de conversion moyen des annonces Facebook (tous secteurs)",
    source: "SQ Magazine 2025",
  },
  {
    value: "200–500 €",
    label: "budget Meta Ads mensuel recommandé pour une PME",
    source: "Effinity 2026",
  },
];

/** Cards de la section « Le contexte » — marché PAC, aides d'État & Meta */
export const contextStats: Stat[] = [
  {
    icon: "📈",
    value: "+11 %",
    label: "de ventes de PAC en Europe en 2025",
    detail:
      "Soit 2,63 millions d'unités vendues sur l'année : après un trou d'air, le marché de la pompe à chaleur est clairement reparti à la hausse.",
    source: "EHPA, 2025",
  },
  {
    icon: "🔥",
    value: "×2",
    label: "ventes de PAC en France depuis octobre 2025",
    detail:
      "Un doublement observé sur la fin d'année : la demande des particuliers redémarre fort, portée par les aides et la fin du fioul.",
    source: "Hello Watt / Révolution Énergétique, déc. 2025",
  },
  {
    icon: "🎯",
    value: "1 million",
    label: "de PAC produites par an d'ici 2027 (objectif État)",
    detail:
      "L'objectif gouvernemental fixe le cap : la pompe à chaleur devient un pilier de la rénovation énergétique en France.",
    source: "economie.gouv.fr",
  },
  {
    icon: "🔧",
    value: "30 000",
    label: "installateurs PAC à former d'ici 2027",
    detail:
      "Un marché en tension où l'offre peine à suivre la demande — et où la concurrence digitale reste, aujourd'hui, faible.",
    source: "Plan PAC, gouvernement français",
  },
  {
    icon: "💶",
    value: "10 800 €",
    label: "d'aides cumulables (MaPrimeRénov' + CEE) pour une PAC air-eau",
    detail:
      "Pour un ménage très modeste. Ces aides créent une demande massive chez les particuliers — réservée aux chantiers réalisés par un installateur RGE QualiPAC.",
    source: "Idéal Système / ANAH 2026",
  },
  {
    icon: "🏛️",
    value: "3,6 Mds €",
    label: "alloués à MaPrimeRénov' en 2026",
    detail:
      "Avec une réouverture du guichet le 23 février 2026 : un budget d'État massif qui solvabilise des milliers de projets de chauffage.",
    source: "ANAH 2026",
  },
];
