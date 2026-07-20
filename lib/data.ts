/**
 * Données réelles et vérifiées — marché de l'audioprothèse en France,
 * concurrence des centres auditifs et Meta Ads.
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

/** Cards de la section « Le contexte » — marché audio, concurrence & Meta */
export const contextStats: Stat[] = [
  {
    icon: "👂",
    value: "6,5 M",
    label: "de Français malentendants (9,7 % de la population)",
    detail:
      "Près d'un Français sur dix déclare une perte auditive. Un marché immense de patients potentiels, dans chaque zone de chalandise.",
    source: "EuroTrak France 2025 / Sonup.fr",
  },
  {
    icon: "🎯",
    value: "44,5 %",
    label: "des malentendants ne sont PAS encore appareillés",
    detail:
      "Près d'un malentendant sur deux reste non équipé : c'est un marché adressable considérable, non capté, qui attend d'être informé et accompagné.",
    source: "EuroTrak France 2025",
  },
  {
    icon: "🔎",
    value: "65 %",
    label: "des malentendants cherchent leur audioprothésiste en ligne",
    detail:
      "Avant même de prendre rendez-vous, deux tiers passent par une recherche en ligne. Sans présence digitale, ils ne trouvent que les grandes enseignes.",
    source: "Twaino, 2026",
  },
  {
    icon: "🏥",
    value: "8 000",
    label: "centres audio en France (+25 % en 3 ans)",
    detail:
      "La demande explose depuis le 100 % Santé, mais la concurrence aussi. Les grands réseaux investissent massivement en digital face aux indépendants.",
    source: "ENSAO, 2025",
  },
  {
    icon: "⚠️",
    value: "200",
    label: "centres fermés en 2024",
    detail:
      "Les indépendants sans stratégie d'acquisition ferment. Dans un marché en croissance, l'invisibilité digitale devient un risque vital pour un centre.",
    source: "ENSAO, 2025",
  },
  {
    icon: "💶",
    value: "407 M€",
    label: "remboursés par l'Assurance Maladie en 2025 (+7,9 %)",
    detail:
      "872 551 aides auditives livrées au 1er semestre 2025 (+132 % vs 2020). Le 100 % Santé a levé le frein du reste à charge : la demande solvable est là.",
    source: "Audition Conseil mars 2026 / Snitem 2025",
  },
];
