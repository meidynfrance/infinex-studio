# CLAUDE.md — Infinex.studio

## Projet

Infinex est une agence de transformation IA et d'ingénierie augmentée par l'IA. On aide les entreprises à passer d'un état "AI-absent" à "AI-native" avec une approche orientée résultats, rapide, sans bullshit consulting.

**Domaine** : infinex.studio (live sur Vercel)
**Repo** : https://github.com/meidynfrance/infinex-studio
**Marché** : Francophone d'abord, international ensuite.

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
- **Hero** : "Croissance infinie." + bouton WhatsApp
- **Approche** : 3 cartes (Stratégie, Transformation, Ingénierie)
- **Cas d'usage** : 6 cartes (Automatisation, IA générative, IA prédictive, Outils métier, Formation, Agents IA)
- **Pourquoi maintenant** : Texte provocateur sur l'urgence IA
- **Témoignages** : 3 témoignages (Jeremy, Xavier, Gabriel)
- **FAQ** : 4 questions en accordéon
- **CTA final** : "Restez du bon côté de l'histoire" + WhatsApp

### 2. Transformation IA (`/ai-transformation`)
- Hero + process en 4 étapes + bénéfices chiffrés + CTA WhatsApp

### 3. Ingénierie IA (`/ai-engineering`)
- Hero + modèle (abo, outcome, IA) + comparaison vs dev shop + CTA WhatsApp

### 4. À propos (`/about`)
- Vision, mission, 4 valeurs (pas de section équipe)

### 5. Get Started (`/get-started`)
- Titre + sous-titre + bouton WhatsApp (pas de formulaire)

### CTA
- **Tous les CTA** sont des boutons "Discuter sur WhatsApp" via le composant `WhatsAppButton`
- Numéro WhatsApp : +33647770475

---

## Design & Branding

- **Palette** : Noir #0A0A0A, Gris #141414, Violet #8B5CF6, Cyan #06B6D4, Blanc #FAFAFA, Gris texte #A1A1AA
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
│   │   │   ├── page.tsx       # Home (Hero, Approach, UseCases, WhyNow, Testimonials, FAQ, FinalCTA)
│   │   │   ├── ai-transformation/
│   │   │   ├── ai-engineering/
│   │   │   ├── about/
│   │   │   └── get-started/
│   │   ├── api/contact/route.ts
│   │   ├── layout.tsx         # Root layout (passthrough)
│   │   ├── globals.css        # Tailwind + theme colors
│   │   ├── sitemap.ts / robots.ts / icon.svg
│   ├── components/
│   │   ├── layout/            # Header, Footer, LanguageSwitcher
│   │   ├── home/              # Hero, Approach, UseCases, WhyNow, Testimonials, FAQ, FinalCTA
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
