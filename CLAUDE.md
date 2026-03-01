# CLAUDE.md — Infinex.studio

## Projet

Infinex aide les PME à augmenter leurs marges grâce à l'IA. On automatise les process, on forme les équipes, et on réduit la charge administrative. Résultats concrets en quelques semaines.

**Domaine** : infinex.studio (live sur Vercel)
**Repo** : https://github.com/meidynfrance/infinex-studio
**Marché** : Francophone d'abord, international ensuite.
**Cible** : Chefs d'entreprise de PME (5-200 salariés)

---

## Stack technique

| Composant | Choix |
|-----------|-------|
| Framework | Next.js 16 (App Router) |
| Langage | TypeScript (strict) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| i18n | next-intl v4 |
| Déploiement | Vercel (CLI) |
| Repo | GitHub (CLI `gh`) |
| Package manager | pnpm |
| Contact | Formulaire /get-started |
| Notifications | Telegram Bot API (@notification_meidy_bot) |

---

## Internationalisation (i18n)

- Site disponible en **français (fr)** et **anglais (en)**
- `next-intl` v4 avec App Router
- Détection automatique via `Accept-Language` dans `middleware.ts`
- URLs : `/fr/...` et `/en/...`, `/` redirige automatiquement
- Fichiers de traduction : `messages/fr.json` et `messages/en.json`
- Switch FR/EN visible dans le header
- Traductions non littérales : chaque langue sonne naturellement

**Important** : Next.js 16 utilise encore `middleware.ts` (pas `proxy.ts`)

---

## Structure du site

### 1. Page d'accueil (`/`)
- **Hero** : "Prenez une longueur d'avance." + bouton Get Started
- **Approche** : 3 cartes numérotées (01 Audit & Stratégie, 02 Déploiement IA, 03 Formation & Adoption)
- **ValueProp** : phrase d'impact bold ("Vous avez le choix. Adopter l'IA maintenant. Ou regarder vos concurrents le faire.")
- **Témoignages** : 3 témoignages (Jeremy, Xavier, Gabriel)
- **FAQ** : 6 questions en accordéon
- **CTA final** : "Restez du bon côté de l'histoire." + Get Started

### 2. Get Started (`/get-started`)
- 2 colonnes : infos + bénéfices à gauche, formulaire à droite
- Formulaire 10 champs : firstName, lastName, email, phone, company, jobTitle, revenue (select), service (checkboxes multi-select), needs (textarea), source (select)
- Soumission → notification Telegram

### CTA
- **Tous les CTA** sont des boutons "Commencer" / "Get Started" qui renvoient vers `/get-started`

---

## Design & Branding

- **Palette (thème dark, inspiré tenex.co)** :
  - Fond : Near-black #0A0A0A, Secondaire #111111
  - Accent : Jaune #FFE501
  - Texte : Blanc #FFFFFF, Gris #9CA3AF
  - Bordures : #2A2A2A, Cartes/Surface : #161616
- **Footer** : Fond secondaire #111111
- **Fonts** : Space Grotesk (headings), Inter (body) via next/font
- **Logo** : Texte "INFINEX" (en attendant le vrai logo)
- **Animations** : Framer Motion — SplitTextReveal (word-by-word) pour titres, AnimatedSection pour scroll
- **Responsive** : Mobile-first

---

## Telegram Bot

- Bot : `@notification_meidy_bot`
- Token et Chat ID configurés dans Vercel env vars (production, preview, development)
- API route `/api/contact` reçoit les soumissions du formulaire et envoie sur Telegram

---

## Déploiement

```bash
pnpm build          # Vérifier le build
git add . && git commit -m "message"
git push
vercel --prod       # Déployer en production
```

---

## Structure du projet

```
infinex-studio/
├── CLAUDE.md / README.md
├── middleware.ts              # next-intl locale detection
├── next.config.ts             # withNextIntl plugin
├── messages/
│   ├── fr.json / en.json      # Tout le contenu du site
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx     # Fonts, metadata, Header/Footer
│   │   │   ├── page.tsx       # Home (Hero, Approach, ValueProp, Testimonials, FAQ, FinalCTA)
│   │   │   └── get-started/   # Page formulaire de contact
│   │   ├── api/contact/route.ts
│   │   ├── layout.tsx         # Root layout (passthrough)
│   │   ├── globals.css        # Tailwind + theme colors (dark)
│   │   ├── sitemap.ts / robots.ts / icon.svg
│   ├── components/
│   │   ├── layout/            # Header, Footer, LanguageSwitcher
│   │   ├── home/              # Hero, Approach, ValueProp, Testimonials, FAQ, FinalCTA
│   │   ├── forms/             # ContactForm (formulaire /get-started)
│   │   └── ui/                # Button, Card, Accordion, AnimatedSection, SplitTextReveal, SplitTextRevealOnScroll
│   ├── lib/                   # telegram.ts, validations.ts
│   └── i18n/                  # routing.ts, request.ts, navigation.ts
```

---

## Règles importantes

1. **Ne JAMAIS hardcoder du texte** : Tout passe par `messages/fr.json` et `messages/en.json`
2. **Toujours sync FR et EN** : Quand on modifie un texte FR, mettre à jour EN aussi (traductions non littérales)
3. **Commits** : atomiques, messages descriptifs en anglais
4. **TypeScript strict** : pas de `any`
5. **Workflow de deploy** : build → commit → push → `vercel --prod`
6. **Variables d'env** : Ne jamais commit de secrets
