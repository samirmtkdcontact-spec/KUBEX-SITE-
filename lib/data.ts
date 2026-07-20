/**
 * Données réelles et vérifiées — marché du photovoltaïque en France,
 * contexte réglementaire et Meta Ads.
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

/** Cards de la section « Le contexte » — marché PV, réglementation & Meta */
export const contextStats: Stat[] = [
  {
    icon: "☀️",
    value: "5,9 GW",
    label: "installés en 2025 — record historique en France",
    detail:
      "Jamais autant de puissance photovoltaïque n'avait été raccordée en une année. Le marché est porteur : la demande des particuliers est bien réelle.",
    source: "Hellowatt / panneau-solaire.net, jan. 2026",
  },
  {
    icon: "🔌",
    value: "1,3 M",
    label: "d'installations photovoltaïques raccordées au T1 2026",
    detail:
      "Précisément 1 298 633 installations. Le solaire résidentiel s'installe durablement dans le paysage — et chaque foyer équipé en inspire d'autres autour de lui.",
    source: "SDES / Enedis via ECOinfos, 2026",
  },
  {
    icon: "📈",
    value: "×2,4",
    label: "de puissance attendue : 32,9 GW (2026) → 78,1 GW (2031)",
    detail:
      "Une trajectoire de croissance soutenue, avec un TCAC de 18,84 %. Le potentiel de chantiers reste immense pour les années à venir.",
    source: "Mordor Intelligence, 2026",
  },
  {
    icon: "⚖️",
    value: "60 000",
    label: "artisans touchés par les réformes de 2025",
    detail:
      "Les installateurs spécialisés dans le résidentiel subissent chaque changement de prime ou de TVA. Sans flux régulier de leads, un coup de barre réglementaire fait mal.",
    source: "ECOinfos, 2026",
  },
  {
    icon: "💶",
    value: "800–1 100 €",
    label: "d'économies annuelles pour un foyer moyen",
    detail:
      "Soit 20 000 à 30 000 € cumulés sur 25 ans. L'argument de vente se déplace vers l'autoconsommation et les économies sur facture — un discours qui parle aux propriétaires.",
    source: "Helios Solaire, 2026",
  },
  {
    icon: "🔎",
    value: "48,7 M",
    label: "d'utilisateurs Facebook en France",
    detail:
      "Vos futurs clients passent du temps chaque jour sur Meta. Le ciblage permet de toucher des propriétaires de maisons par zone, âge et centres d'intérêt liés aux économies d'énergie.",
    source: "NapoleonCat, déc. 2025",
  },
];
