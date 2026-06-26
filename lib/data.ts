/**
 * Données réelles et vérifiées sur Meta et le marché BTP France.
 * Chaque chiffre est accompagné de sa source — AUCUNE donnée inventée.
 */

export type Stat = {
  value: string;
  label: string;
  source: string;
  detail?: string;
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
    value: "64 %",
    label: "des dépenses pub Facebook viennent de PME / TPE",
    source: "SQ Magazine 2025",
  },
];

/** Cards de la section « Le contexte » — vraies données marché BTP & Meta */
export const contextStats: Stat[] = [
  {
    value: "615 000",
    label: "entreprises BTP en France",
    detail:
      "dont 90 % de TPE et d'artisans : un marché immense, mais une concurrence locale forte où la visibilité fait la différence.",
    source: "Batiweb 2025",
  },
  {
    value: "49 %",
    label: "des artisans BTP ont moins de 3 mois de visibilité",
    detail:
      "sur leur carnet de commandes. Près d'un artisan sur deux ne sait pas de quoi seront faits les mois suivants : l'acquisition régulière devient vitale.",
    source: "CAPEB 2025",
  },
  {
    value: "16 Mds €",
    label: "investis en rénovation énergétique en 2025",
    detail:
      "Un marché porteur, soutenu par les aides publiques, où la demande existe — encore faut-il être visible au bon moment auprès des bons prospects.",
    source: "Batiweb 2025",
  },
  {
    value: "48,7 M",
    label: "d'utilisateurs Facebook en France",
    detail:
      "Vos futurs clients y passent du temps chaque jour. Le ciblage Meta permet de toucher des propriétaires par zone, âge et centres d'intérêt.",
    source: "NapoleonCat, déc. 2025",
  },
  {
    value: "9,2 %",
    label: "taux de conversion moyen des annonces Facebook",
    detail:
      "Tous secteurs confondus. Une bonne base de référence pour bâtir des campagnes performantes plutôt que de partir à l'aveugle.",
    source: "SQ Magazine 2025",
  },
  {
    value: "200–500 €",
    label: "budget Meta Ads mensuel recommandé pour une PME",
    detail:
      "Une fourchette réaliste pour alimenter correctement l'algorithme et obtenir des données exploitables, sans dilapider son budget.",
    source: "Effinity 2026",
  },
];
