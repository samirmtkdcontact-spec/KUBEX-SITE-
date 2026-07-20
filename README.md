# KUBEX — Site vitrine

Site vitrine de **KUBEX**, agence Meta Ads spécialisée dans la génération de
**leads de propriétaires qualifiés en continu pour les installateurs
photovoltaïque RGE QualiPV** (résidentiel et petit tertiaire).

Construit avec **Next.js 14 (App Router)**, **TypeScript** et **Tailwind CSS**.
Prêt à déployer sur **Vercel**.

## Positionnement

- **Cible** : installateurs photovoltaïque RGE QualiPV (résidentiel et petit
  tertiaire).
- **Problème** : marché en croissance record mais instable réglementairement —
  les installateurs sans flux régulier de leads subissent de plein fouet chaque
  changement de prime ou de TVA.
- **Solution** : des campagnes Meta Ads ciblées pour générer des leads de
  propriétaires qualifiés en continu, indépendamment des aides du moment.
- **Angle** : on ne bâtit pas les campagnes sur une aide qui peut changer, mais
  sur des bénéfices durables (économies, autoconsommation, valorisation). La
  certification RGE QualiPV est une barrière à l'entrée (contrat EDF OA, TVA
  réduite) que les non-certifiés ne peuvent pas franchir.

## Principes du contenu

Le site ne contient **aucun faux témoignage, aucune fausse preuve sociale et
aucun chiffre client inventé**. Les preuves sociales sont remplacées par des
**données réelles et sourcées** sur le marché du photovoltaïque et Meta :

| Donnée | Source |
| --- | --- |
| 5,9 GW installés en 2025 — record historique en France | Hellowatt / panneau-solaire.net, jan. 2026 |
| 1 298 633 installations PV raccordées au T1 2026 | SDES / Enedis via ECOinfos, 2026 |
| 31 565 nouvelles installations raccordées au T1 2026 | les-energies-renouvelables.eu, juin 2026 |
| Croissance : 32,9 GW (2026) → 78,1 GW (2031), TCAC 18,84 % | Mordor Intelligence, 2026 |
| 13 % des nouvelles installations intègrent un stockage | Hellowatt, jan. 2026 |
| 60 000 artisans touchés par les réformes de 2025 | ECOinfos, 2026 |
| TVA réduite à 5,5 % pour les installations ≤ 9 kWc (oct. 2025) | Helios Solaire, 2026 |
| 800 à 1 100 €/an d'économies (20 000 à 30 000 € sur 25 ans) | Helios Solaire, 2026 |
| RGE QualiPV obligatoire (contrat EDF OA, TVA réduite) | GridLabs / fournisseurs-electricite.com, 2026 |
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
