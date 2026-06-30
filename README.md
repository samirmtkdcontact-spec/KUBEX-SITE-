# KUBEX — Site vitrine

Site vitrine de **KUBEX**, agence Meta Ads spécialisée dans la génération de
**leads de propriétaires qualifiés pour les installateurs d'isolation thermique
RGE** (ITE, ITI, combles, toiture).

Construit avec **Next.js 14 (App Router)**, **TypeScript** et **Tailwind CSS**.
Prêt à déployer sur **Vercel**.

## Positionnement

- **Cible** : installateurs d'isolation thermique RGE (ITE, ITI, combles,
  toiture).
- **Problème** : carnet de commandes imprévisible malgré une obligation
  réglementaire qui contraint des millions de propriétaires à agir.
- **Solution** : générer des leads de propriétaires qualifiés via Meta Ads
  (logements classés F/G, contraints par la loi de rénover ou de ne plus louer).
- **Angle** : la loi oblige 5,8 millions de propriétaires à rénover ; ils ne
  savent simplement pas vers quel artisan RGE se tourner. L'urgence est légale,
  pas marketing — et la certification RGE est une barrière à l'entrée précieuse.

## Principes du contenu

Le site ne contient **aucun faux témoignage, aucune fausse preuve sociale et
aucun chiffre client inventé**. Les preuves sociales sont remplacées par des
**données réelles et sourcées** sur l'urgence réglementaire, les aides d'État et
Meta :

| Donnée | Source |
| --- | --- |
| Location des logements G interdite depuis 2025 (~600 000 logements) | Service-Public.fr / Cotoit, 2025 |
| Location des logements F interdite dès 2028 (~1 M de logements) | Cotoit / Hellio, 2025-2026 |
| 5,8 M de passoires thermiques F/G (15,6 % du parc) | Toutimmo3d, 2026 |
| Décote de 15 à 20 % à la revente d'un logement F/G | Toutimmo3d, 2026 |
| Gel des loyers des logements F/G depuis août 2022 | Cotoit, 2025 |
| Jusqu'à 70 % du coût d'isolation des murs pris en charge (foyers modestes) | Ma Maison Mon Style, 2026 |
| TVA réduite à 5,5 % sur les travaux d'isolation par un RGE | Ma Maison Mon Style, 2026 |
| Coût moyen travaux F/G : 54 671 € — aide moyenne : 37 080 € | Businesscoot, 2024 |
| 48,7 M d'utilisateurs Facebook en France | NapoleonCat, déc. 2025 |
| 9,2 % de taux de conversion moyen des annonces Facebook | SQ Magazine 2025 |
| Budget Meta Ads recommandé PME : 200–500 €/mois | Effinity 2026 |

Les chiffres sont centralisés dans [`lib/data.ts`](./lib/data.ts).

## Sections

1. Nav fixe (logo SVG + liens + CTA, backdrop-blur au scroll)
2. Hero + bloc « Pourquoi Meta Ads ? »
3. Le contexte (data marché BTP & Meta)
4. Le système KUBE (Audit → Ciblage → Création → Optimisation)
5. Ce qu'on fait / ne fait pas (honnêteté)
6. Offres (Lancement / Croissance / Domination)
7. FAQ (accordéon)
8. Formulaire de contact (validation côté client + confirmation)
9. Footer (mentions légales)

## Démarrer

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Build de production

```bash
npm run build
npm start
```

## Identité visuelle

- Dégradé officiel : `#00B4FF → #003F5C` (135°)
- Fond clair : `#EAF7FF`
- Texte principal : `#0A1628`
- Accent : `#00B4FF`
- Typographies : **Inter** (corps) + **Space Grotesk** (titres) via `next/font`

## Déploiement Vercel

Importer le dépôt sur [Vercel](https://vercel.com/) — la configuration Next.js
est détectée automatiquement, aucune variable d'environnement n'est requise.
