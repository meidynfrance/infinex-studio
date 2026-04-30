# CLAUDE.md — Infinex.studio

## Projet

Infinex déploie l'IA là où elle crée le plus de valeur pour les PME : plus de revenus (croissance) ou moins de friction (efficacité). Résultats concrets en quelques semaines.

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
| Déploiement | Vercel (auto-deploy on push) |
| Repo | GitHub (CLI `gh`) |
| Package manager | pnpm |
| Blog | MDX (gray-matter + next-mdx-remote) |
| Contact | Formulaire /get-started → Google Sheets + Telegram |
| Notifications | Telegram Bot API (@notification_meidy_bot) |
| Icons | Custom SVG (ServiceIcon component) |

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
- **HomeHero** : "L'IA qui travaille pour votre business." — spotlight, particles, bi-tone text
- **HomeCards** : 2 cartes de choix (Croissance vert / Efficacité bleu) → liens vers sous-pages

### 2. Page Croissance (`/croissance`)
- 12 services de croissance (leads, prospection, ads, SEO, contenu, chatbot, etc.)
- Thème vert, fond animé (orbes, dot grid, scan line)
- CTA → /get-started

### 3. Page Efficacité (`/efficacite`)
- 12 services d'efficacité (reporting, automatisation, dashboards, formation, etc.)
- Thème bleu, fond animé (orbes, dot grid, scan line)
- CTA → /get-started

### 4. Blog (`/blog`)
- Listing bilingue avec filtre par catégorie (pills)
- Catégories : strategie-ia, automatisation, formation, cas-usage, outils-ia
- Articles MDX dans `content/blog/` (convention : `{slug}.{locale}.mdx`)
- Rendu via `next-mdx-remote/rsc`, styles `.prose-blog` dans globals.css
- Chaque article a un CTA fin d'article → /get-started
- JSON-LD BlogPosting sur chaque article

### 5. Get Started (`/get-started`)
- 2 colonnes : promesses à gauche, formulaire à droite
- Formulaire : firstName, lastName, email, phone, company, jobTitle, revenue (select), service (checkboxes multi-select)
- Soumission → Google Sheets + Telegram
- Succès : message + bouton "Réserver un créneau" (lien Google Calendar)

### CTA Flow
- **Tous les CTA** du site renvoient vers `/get-started` (formulaire)
- Après soumission réussie, le prospect peut réserver un créneau via Google Calendar
- Lien Calendar : `https://calendar.app.google/xqqAqmKPfrWfJrqk8`

---

## Design & Branding

- **Style** : Dark premium, inspiré dhero.studio
- **Palette** :
  - Fond : Near-black #0A0A0A, Secondaire #111111
  - Accent : Jaune #FFE501
  - Vert (croissance) : #5ec97e
  - Bleu (efficacité) : #4fa3e0
  - Texte : Blanc #FFFFFF, Gris #9CA3AF, Muted #404040
  - Bordures : #2A2A2A, Cartes/Surface : #161616
- **Font unique** : Inter partout (headings + body) via next/font
- **Logo** : Texte "INFINEX" (en attendant le vrai logo)
- **Animations** :
  - Framer Motion : scroll-triggered entrances, staggered cards
  - CSS : spotlight glow, floating particles, gradient orbs, dot grid, scan line
  - Cards : mouse-follow glow, icon scale+glow on hover, background number shift
  - Buttons : shimmer effect
- **Responsive** : Mobile-first
- **Icons** : Custom SVG via `ServiceIcon` component (26 icons)

---

## Telegram Bot

- Bot : `@notification_meidy_bot`
- Token et Chat ID configurés dans Vercel env vars (production, preview, development)
- API route `/api/contact` reçoit les soumissions du formulaire et envoie sur Telegram

---

## Blog

- Contenu dans `content/blog/` : fichiers `{slug}.fr.mdx` et `{slug}.en.mdx`
- Librairie `src/lib/blog.ts` : `getAllPosts()`, `getPostBySlug()`, `getAllSlugs()`
- Catégories : `strategie-ia`, `automatisation`, `formation`, `cas-usage`, `outils-ia`
- Frontmatter : title, description, date, author, category
- Composants blog dans `src/components/blog/`
- Styles prose dans `.prose-blog` (globals.css)

---

## Optimisation LLM (GEO)

- **llms.txt** : `/llms.txt` sert un Markdown avec description du site + liens vers toutes les pages et articles
- **JSON-LD** :
  - `OrganizationSchema` → layout (toutes les pages)
  - `BlogPostSchema` → chaque article de blog
- **SEO GEO** : articles structurés avec TL;DR, H2/H3, listes, paragraphes courts, CTA naturels

---

## Déploiement

Vercel déploie automatiquement à chaque `git push` sur `main`. Ne PAS utiliser `vercel --prod` (ça crée un doublon).

```bash
pnpm build          # Vérifier le build
git add . && git commit -m "message"
git push             # Vercel déploie automatiquement
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
│   │   │   ├── page.tsx       # Home (HomeHero + HomeCards)
│   │   │   ├── croissance/    # Page services croissance (green)
│   │   │   ├── efficacite/    # Page services efficacité (blue)
│   │   │   └── get-started/   # Page formulaire de contact
│   │   ├── api/contact/route.ts
│   │   ├── llms.txt/route.ts  # llms.txt pour LLM discoverability
│   │   ├── layout.tsx         # Root layout (passthrough)
│   │   ├── globals.css        # Tailwind + theme colors + animations + .prose-blog
│   │   ├── sitemap.ts / robots.ts / icon.svg
│   ├── components/
│   │   ├── layout/            # Header, Footer, LanguageSwitcher
│   │   ├── home/              # HomeHero, HomeCards
│   │   ├── services/          # ServiceLanding (shared for croissance/efficacite)
│   │   ├── blog/              # PostCard, PostHeader, PostContent, BlogCTA, CategoryFilter
│   │   ├── structured-data/   # OrganizationSchema, BlogPostSchema
│   │   ├── forms/             # ContactForm (formulaire /get-started)
│   │   └── ui/                # Button, ServiceCard, ServiceIcon, AnimatedSection, SplitTextReveal
│   ├── lib/                   # telegram.ts, validations.ts, blog.ts
│   └── i18n/                  # routing.ts, request.ts, navigation.ts
```

---

## Règles importantes

1. **Ne JAMAIS hardcoder du texte** : Tout passe par `messages/fr.json` et `messages/en.json`
2. **Toujours sync FR et EN** : Quand on modifie un texte FR, mettre à jour EN aussi (traductions non littérales)
3. **Commits** : atomiques, messages descriptifs en anglais
4. **TypeScript strict** : pas de `any`
5. **Workflow de deploy** : build → commit → push (Vercel auto-deploy, jamais `vercel --prod`)
6. **Variables d'env** : Ne jamais commit de secrets
7. **Font unique** : Inter partout, ne pas réintroduire Space Grotesk
8. **Pas d'emojis** : Utiliser ServiceIcon (SVG custom) à la place
