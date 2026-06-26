# KUBEX — Site vitrine

Site vitrine de **KUBEX**, agence Meta Ads spécialisée dans l'acquisition de
clients qualifiés pour les **artisans du bâtiment (BTP)**.

Construit avec **Next.js 14 (App Router)**, **TypeScript** et **Tailwind CSS**.
Prêt à déployer sur **Vercel**.

## Principes du contenu

Le site ne contient **aucun faux témoignage, aucune fausse preuve sociale et
aucun chiffre client inventé**. Les preuves sociales sont remplacées par des
**données réelles et sourcées** sur Meta et le marché BTP en France :

| Donnée | Source |
| --- | --- |
| 48,7 M d'utilisateurs Facebook en France | NapoleonCat, déc. 2025 |
| 9,2 % de taux de conversion moyen des annonces Facebook | SQ Magazine 2025 |
| 64 % des dépenses pub Facebook viennent de PME/TPE | SQ Magazine 2025 |
| 615 000 entreprises BTP en France (90 % de TPE/artisans) | Batiweb 2025 |
| 49 % des artisans BTP ont < 3 mois de visibilité carnet de commandes | CAPEB 2025 |
| 16 Mds € investis en rénovation énergétique en 2025 | Batiweb 2025 |
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
