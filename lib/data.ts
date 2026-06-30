/**
 * Données réelles et vérifiées — marché de l'isolation thermique (ITE/ITI),
 * urgence réglementaire (passoires thermiques), aides d'État et Meta Ads.
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

/** Cards de la section « Le contexte » — urgence réglementaire, aides & Meta */
export const contextStats: Stat[] = [
  {
    icon: "🚫",
    value: "600 000",
    label: "logements classés G interdits à la location depuis 2025",
    detail:
      "Depuis le 1er janvier 2025, un logement classé G ne peut plus être loué. Pour le propriétaire bailleur, ce n'est pas une option mais une contrainte légale immédiate.",
    source: "Service-Public.fr / Cotoit, 2025",
  },
  {
    icon: "📅",
    value: "1 million",
    label: "de logements classés F interdits à la location dès 2028",
    detail:
      "Au 1er janvier 2028, l'interdiction s'étend aux logements classés F. Des centaines de milliers de propriétaires ont une échéance — et une raison d'agir maintenant.",
    source: "Cotoit / Hellio, 2025-2026",
  },
  {
    icon: "🏠",
    value: "5,8 M",
    label: "de passoires thermiques (F ou G) en France",
    detail:
      "Soit 15,6 % du parc immobilier. Un volume immense de propriétaires concernés par l'obligation de rénover — autant de clients potentiels pour un installateur RGE.",
    source: "Toutimmo3d, 2026",
  },
  {
    icon: "📉",
    value: "−15 à −20 %",
    label: "de décote à la revente d'un logement F ou G",
    detail:
      "Par rapport à un bien équivalent classé C ou D. Au-delà de la location, c'est la valeur patrimoniale qui est en jeu : un argument fort pour déclencher des travaux.",
    source: "Toutimmo3d, 2026",
  },
  {
    icon: "💶",
    value: "70 %",
    label: "du coût d'isolation des murs pris en charge (foyers modestes)",
    detail:
      "Via MaPrimeRénov', avec une TVA réduite à 5,5 % pour des travaux réalisés par un professionnel RGE. Sur un chantier moyen de 54 671 €, l'aide perçue atteint en moyenne 37 080 €.",
    source: "Ma Maison Mon Style 2026 / Businesscoot 2024",
  },
  {
    icon: "🔒",
    value: "Gel",
    label: "des loyers des logements F et G depuis août 2022",
    detail:
      "Tant qu'aucun travaux n'est engagé, le loyer ne peut plus être augmenté. La pression réglementaire pousse les bailleurs à rénover — encore faut-il qu'ils vous trouvent.",
    source: "Cotoit, 2025",
  },
];
