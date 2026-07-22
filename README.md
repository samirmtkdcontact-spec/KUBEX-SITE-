# KUBEX — Site vitrine

Site vitrine de **KUBEX**, agence Meta Ads à **double spécialisation** :
**photovoltaïque (PV)** et **pompe à chaleur (PAC)**. Un seul site premium, deux
sections marché distinctes, chacune avec son univers visuel, ses données et sa
proposition de valeur.

Construit avec **Next.js 14 (App Router)**, **TypeScript** et **Tailwind CSS**.
Prêt à déployer sur **Vercel**.

## Positionnement

- **Cible** : installateurs photovoltaïques et poseurs de pompes à chaleur RGE
  (résidentiel et petit tertiaire).
- **Problème** : deux marchés en forte expansion mais dépendants d'aides et de
  réglementations mouvantes ; sans flux régulier de leads, chaque évolution
  fragilise l'activité.
- **Solution** : des campagnes Meta Ads ciblées, taillées par métier et par
  zone, pour générer des leads de propriétaires qualifiés.

## Principes du contenu

Le site ne contient **aucun faux témoignage, aucune fausse preuve sociale et
aucun chiffre client inventé** ; il ne mentionne jamais Facebook (uniquement
« Meta Ads ») et **n'affiche aucun tarif** (communiqués lors de l'audit). Les
preuves sociales sont remplacées par des **données réelles et sourcées**,
affichées avec leur source et un contexte au survol (tooltip).

### Photovoltaïque

| Donnée | Source |
| --- | --- |
| 5,9 GW installés en 2025 — record historique | Hellowatt / SDES, jan. 2026 |
| 1 298 633 installations raccordées au T1 2026 | SDES / Enedis, ECOinfos 2026 |
| Croissance projetée +18,84 %/an jusqu'en 2031 | Mordor Intelligence, 2026 |
| 800 à 1 100 €/an d'économies pour un foyer moyen | Helios Solaire, 2026 |
| 13 % des nouvelles installations avec stockage | Hellowatt, jan. 2026 |
| 60 000 artisans RGE spécialisés en résidentiel | ECOinfos, 2026 |

### Pompe à chaleur

| Donnée | Source |
| --- | --- |
| +11 % de ventes PAC en Europe en 2025 | EHPA, 2025 |
| Ventes PAC ×2 en France depuis oct. 2025 | Hello Watt / Révolution Énergétique, déc. 2025 |
| Jusqu'à 10 800 € d'aides cumulables (PAC air-eau) | ANAH / Idéal Système, 2026 |
| 3,6 Mds € budget MaPrimeRénov' 2026 | ANAH, fév. 2026 |
| Objectif 1 M de PAC/an d'ici 2027 | Plan PAC, economie.gouv.fr |
| 49 % des artisans PAC : < 3 mois de visibilité | CAPEB, 2025 |

Les chiffres sont centralisés dans [`lib/data.ts`](./lib/data.ts).

## Sections

1. Nav fixe (logo SVG + liens + CTA, backdrop-blur au scroll)
2. Hero global (double niche PV + PAC)
3. Section marché **photovoltaïque** (image de fond + 6 data cards à tooltip)
4. Section marché **pompe à chaleur** (image de fond + 6 data cards à tooltip)
5. Le Système Kube (Audit → Ciblage → Création → Optimisation)
6. Honnêteté (ce qu'on promet / ne promet pas)
7. Processus (timeline audit → premier lead, remplace les offres/tarifs)
8. FAQ (accordéon animé)
9. Formulaire de contact (niche + statut, validation client + confirmation)

Footer, écran d'intro animé, fond animé (orbes) et bandeaux défilants (marquee)
complètent l'expérience.

## Animations

- **Écran d'intro** plein écran au chargement (logo → « KUBEX » lettre par
  lettre → tagline `PHOTOVOLTAÏQUE · POMPE À CHALEUR`), puis fade out.
- **Fond animé** global : base `#EAF7FF` + 3 orbes de lumière en boucle infinie.
- **Bandeaux défilants** (marquee) PV et PAC entre les sections.
- **Scroll reveal** sur les titres, cards et étapes (IntersectionObserver).
- **Tooltips** interactifs au survol de chaque data card.
- Toutes les animations en **CSS keyframes**, `prefers-reduced-motion` respecté.

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

## Formulaire de contact (email via Resend)

Le formulaire poste vers la route API `app/api/contact/route.ts`, qui envoie un
email récapitulatif à `samirmtkd.contact@gmail.com` via [Resend](https://resend.com).

Configuration :

1. Créer un compte sur [resend.com](https://resend.com) → **API Keys** →
   **Create API Key**.
2. En local : renseigner la clé dans `.env.local` (non versionné) :
   ```
   RESEND_API_KEY=re_votre_cle
   ```
3. Sur Vercel : **Settings → Environment Variables → Add**
   `RESEND_API_KEY = votre_cle`, puis redéployer.

Tant qu'aucune clé valide n'est configurée, la route renvoie une erreur 500 et
le formulaire affiche sa bannière d'erreur (aucun email n'est envoyé). L'expéditeur
`onboarding@resend.dev` fonctionne sans domaine vérifié ; pour un envoi depuis
votre propre domaine, vérifiez-le dans Resend et adaptez le champ `from`.

## Déploiement Vercel

Importer le dépôt sur [Vercel](https://vercel.com/) — la configuration Next.js
est détectée automatiquement. Ajouter la variable `RESEND_API_KEY` (voir
ci-dessus) pour activer l'envoi d'emails du formulaire de contact.
