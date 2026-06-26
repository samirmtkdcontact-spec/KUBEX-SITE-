# KUBEX — Site vitrine

Site vitrine de **KUBEX**, agence Meta Ads spécialisée dans la génération de
**leads de particuliers qualifiés pour les installateurs de pompes à chaleur
(PAC) RGE QualiPAC**.

Construit avec **Next.js 14 (App Router)**, **TypeScript** et **Tailwind CSS**.
Prêt à déployer sur **Vercel**.

## Positionnement

- **Cible** : installateurs de pompes à chaleur RGE QualiPAC.
- **Problème** : carnet de commandes imprévisible malgré un marché en reprise et
  des aides d'État attractives.
- **Solution** : générer des leads de particuliers qualifiés via Meta Ads
  (propriétaires de logements de 15 ans et plus, éligibles MaPrimeRénov').
- **Angle** : les aides d'État (jusqu'à 10 800 € cumulables) créent une demande
  massive ; les particuliers ne savent simplement pas que l'entreprise existe.
  La certification RGE est une barrière à l'entrée précieuse à exploiter.

## Principes du contenu

Le site ne contient **aucun faux témoignage, aucune fausse preuve sociale et
aucun chiffre client inventé**. Les preuves sociales sont remplacées par des
**données réelles et sourcées** sur le marché PAC, les aides d'État et Meta :

| Donnée | Source |
| --- | --- |
| +11 % de ventes PAC en Europe en 2025 (2,63 M unités) | EHPA, 2025 |
| Ventes PAC France ×2 depuis octobre 2025 | Hello Watt / Révolution Énergétique, déc. 2025 |
| Objectif : 1 M de PAC produites/an d'ici 2027 | economie.gouv.fr |
| 30 000 installateurs PAC à former d'ici 2027 | Plan PAC, gouvernement |
| Jusqu'à 10 800 € d'aides cumulables (MPR + CEE) pour une PAC air-eau | Idéal Système / ANAH 2026 |
| 3,6 Mds € alloués à MaPrimeRénov' en 2026 (guichet rouvert le 23/02/2026) | ANAH 2026 |
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
