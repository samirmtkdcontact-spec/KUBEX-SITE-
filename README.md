# KUBEX — Site vitrine

Site vitrine de **KUBEX**, agence Meta Ads spécialisée dans la génération de
**rendez-vous de patients malentendants qualifiés pour les audioprothésistes
indépendants et centres auditifs**.

Construit avec **Next.js 14 (App Router)**, **TypeScript** et **Tailwind CSS**.
Prêt à déployer sur **Vercel**.

## Positionnement

- **Cible** : audioprothésistes indépendants et petits centres auditifs.
- **Problème** : agenda imprévisible alors que la demande explose depuis le
  100 % Santé — mais les grands réseaux (Amplifon, Audika, Alain Afflelou
  Acousticien) investissent massivement en digital pendant que les indépendants
  restent invisibles.
- **Solution** : des campagnes Meta Ads ciblées pour attirer des patients
  malentendants qualifiés dans leur zone, avant que la concurrence ne les capte.
- **Angle** : impossible de rivaliser avec les réseaux sur le SEO et la
  notoriété de marque ; Meta Ads est le terrain où un indépendant peut cibler
  chirurgicalement sa zone et ses 65+ ans avec un budget accessible.

## Principes du contenu

Le site ne contient **aucun faux témoignage, aucune fausse preuve sociale et
aucun chiffre client inventé**. Les preuves sociales sont remplacées par des
**données réelles et sourcées** sur le marché de l'audioprothèse et Meta :

| Donnée | Source |
| --- | --- |
| 6,5 M de Français malentendants (9,7 %) | EuroTrak France 2025 / Sonup.fr |
| 55,5 % des malentendants appareillés (vs 45,7 % en 2022) | EuroTrak France 2025 / Snitem |
| 44,5 % des malentendants non encore appareillés | EuroTrak France 2025 |
| Croissance du marché : 4 à 6 % / an jusqu'en 2030 | Audition Conseil, mars 2026 |
| 407 M€ de remboursements Assurance Maladie en 2025 (+7,9 %) | Audition Conseil, mars 2026 |
| 872 551 aides auditives livrées au S1 2025 (+132 % vs 2020) | Snitem, 2025 |
| 8 000 centres audio en France (+25 % en 3 ans) | ENSAO, 2025 |
| 200 fermetures de centres en 2024 | ENSAO, 2025 |
| 65 % des malentendants cherchent leur audioprothésiste en ligne | Twaino, 2026 |
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
