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
| Contact | WhatsApp (wa.me/33647770475) |
| Notifications | Telegram Bot API (@infinex_studio_bot) |

---

## Internationalisation (i18n)

- Site disponible en **français (fr)** et **anglais (en)**
- `next-intl` v4 avec App Router
- Détection automatique via `Accept-Language` dans `middleware.ts`
- URLs : `/fr/...` et `/en/...`, `/` redirige automatiquement
- Fichiers de traduction : `messages/fr.json` et `messages/en.json`
- Switch FR/EN visible dans le header

**Important** : Next.js 16 utilise encore `middleware.ts` (pas `proxy.ts`)

---

## Structure du site

### 1. Page d'accueil (`/`)
- **Hero** : "Augmentez vos marges grâce à l'IA." + bouton WhatsApp
- **Approche** : 3 cartes (Audit & Diagnostic, Déploiement, Formation)
- **Cas d'usage** : 6 cartes (Automatisation admin, Assistants IA, Reporting, Gestion client, Formation IA, Agents prospection)
- **Métriques** : 4 chiffres d'impact (-60% admin, +40% productivité, 3 sem. résultats, <2 mois ROI)
- **Témoignages** : 3 témoignages (Jeremy, Xavier, Gabriel)
- **FAQ** : 4 questions en accordéon
- **CTA final** : "Prêt à augmenter vos marges ?" + WhatsApp

### 2. À propos (`/about`)
- Vision, mission, 4 valeurs (pas de section équipe)

### CTA
- **Tous les CTA** sont des boutons "Discuter avec le fondateur" via le composant `WhatsAppButton`
- Numéro WhatsApp : +33647770475

---

## Design & Branding

- **Palette (thème clair)** :
  - Fond : Off-white #FAFAF8, Crème #F0EDE6
  - Accents : Indigo #4F46E5, Teal #0D9488, Ambre #D97706
  - Texte : Quasi-noir #1E1E2E, Gris ardoise #64748B
  - Bordures : #E2DFD6, Cartes : Blanc #FFFFFF
- **Footer** : Fond sombre #1E1E2E avec texte blanc
- **Fonts** : Space Grotesk (headings), Inter (body) via next/font
- **Logo** : Texte "INFINEX" (en attendant le vrai logo)
- **Animations** : Framer Motion (fade in, slide up au scroll)
- **Responsive** : Mobile-first

---

## Telegram Bot

- Bot : `@infinex_studio_bot`
- Token et Chat ID configurés dans Vercel env vars (production, preview, development)
- API route `/api/contact` toujours présente (peut être réactivée si formulaire remis)

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
├── CLAUDE.md / TODO.md / README.md
├── middleware.ts              # next-intl locale detection
├── next.config.ts             # withNextIntl plugin
├── messages/
│   ├── fr.json / en.json      # Tout le contenu du site
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx     # Fonts, metadata, Header/Footer
│   │   │   ├── page.tsx       # Home (Hero, Approach, UseCases, Metrics, Testimonials, FAQ, FinalCTA)
│   │   │   └── about/
│   │   ├── api/contact/route.ts
│   │   ├── layout.tsx         # Root layout (passthrough)
│   │   ├── globals.css        # Tailwind + theme colors
│   │   ├── sitemap.ts / robots.ts / icon.svg
│   ├── components/
│   │   ├── layout/            # Header, Footer, LanguageSwitcher
│   │   ├── home/              # Hero, Approach, UseCases, Metrics, Testimonials, FAQ, FinalCTA
│   │   ├── forms/             # ContactForm (inactive, remplacé par WhatsApp)
│   │   └── ui/                # Button, Card, Accordion, AnimatedSection, WhatsAppButton
│   ├── lib/                   # telegram.ts, validations.ts
│   └── i18n/                  # routing.ts, request.ts, navigation.ts
```

---

## Règles importantes

1. **Ne JAMAIS hardcoder du texte** : Tout passe par `messages/fr.json` et `messages/en.json`
2. **Toujours sync FR et EN** : Quand on modifie un texte FR, mettre à jour EN aussi
3. **Commits** : atomiques, messages descriptifs en anglais
4. **TypeScript strict** : pas de `any`
5. **Workflow de deploy** : build → commit → push → `vercel --prod`
6. **Variables d'env** : Ne jamais commit de secrets
