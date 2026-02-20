# TODO.md — Infinex.studio

---

## Phase 0 : Setup initial
- ✅ Initialiser le projet Next.js avec TypeScript + Tailwind + pnpm
- ✅ Configurer `tsconfig.json` strict
- ✅ Configurer `tailwind.config.ts` avec la palette Infinex (via globals.css @theme)
- ✅ Installer les dépendances : `next-intl`, `framer-motion`, `react-hook-form`, `zod`
- ✅ Setup `.gitignore` (node_modules, .next, .env, etc.)
- ✅ Créer `.env.example` avec les variables nécessaires
- [ ] Créer le repo GitHub via `gh repo create`
- [ ] Premier commit + push

## Phase 1 : Structure & Config
- ✅ Configurer `next-intl` (proxy, routing, provider)
- ✅ Créer `/messages/fr.json` avec tout le contenu FR
- ✅ Créer `/messages/en.json` avec tout le contenu EN
- ✅ Créer le `proxy.ts` pour la détection de langue navigateur
- ✅ Créer le layout racine `/src/app/layout.tsx`
- ✅ Créer le layout localisé `/src/app/[locale]/layout.tsx`
- ✅ Configurer les fonts (Inter / Space Grotesk via next/font)
- ✅ Créer `globals.css` avec les variables CSS et styles de base

## Phase 2 : Composants UI de base
- ✅ `Button.tsx` — composant bouton réutilisable (variantes: primary, secondary, outline)
- ✅ `Card.tsx` — composant carte réutilisable
- ✅ `Accordion.tsx` — pour la FAQ
- ✅ `AnimatedSection.tsx` — wrapper Framer Motion pour animations au scroll
- ✅ `Header.tsx` — navigation + logo texte + switch de langue + CTA
- ✅ `Footer.tsx` — liens, copyright, email de contact
- ✅ `LanguageSwitcher.tsx` — toggle FR/EN

## Phase 3 : Pages
### 3a. Page d'accueil
- ✅ `Hero.tsx` — headline + sous-titre + CTA + animation de fond
- ✅ `Approach.tsx` — 3 cartes (Stratégie, Transformation, Ingénierie) avec hover effects
- ✅ `WhyNow.tsx` — section texte provocateur avec animation
- ✅ `Testimonials.tsx` — carrousel (placeholders pour le moment)
- ✅ `FAQ.tsx` — accordéon avec les 5 questions
- ✅ `FinalCTA.tsx` — section CTA de fin de page
- ✅ Assembler la page d'accueil `/src/app/[locale]/page.tsx`

### 3b. Pages secondaires
- ✅ Page Transformation IA `/ai-transformation/page.tsx`
- ✅ Page Ingénierie IA `/ai-engineering/page.tsx`
- ✅ Page À propos `/about/page.tsx`
- ✅ Page Get Started `/get-started/page.tsx` (avec formulaire)

## Phase 4 : Formulaire & Telegram
- ✅ `validations.ts` — schéma Zod pour le formulaire
- ✅ `ContactForm.tsx` — formulaire React Hook Form
- ✅ `telegram.ts` — fonction d'envoi de message Telegram
- ✅ `/api/contact/route.ts` — API Route pour recevoir le formulaire
- ✅ Gérer les états : loading, success, error dans le formulaire
- 🚫 Tester le formulaire (nécessite les tokens Telegram)

## Phase 5 : SEO & Performance
- ✅ Metadata SEO pour chaque page (title, description, OG tags) en FR et EN
- ✅ Générer `sitemap.xml` dynamique
- ✅ Créer `robots.txt`
- ✅ Favicon (∞ SVG)
- ✅ Build réussi sans erreur
- ✅ Optimiser les animations (utilisation de transform et opacity via Framer Motion)

## Phase 6 : Déploiement
- ✅ S'assurer que tout compile sans erreur (`pnpm build`)
- [ ] Linker le projet à Vercel via `vercel link`
- [ ] Déployer en prod via `vercel --prod`
- 🚫 Configurer le domaine `infinex.studio` dans Vercel (action manuelle)

## Phase 7 : Finalisation
- ✅ Rédiger le `README.md` complet
- [ ] Commit final + push

---

## 🔴 Actions manuelles requises (à faire par le propriétaire)

1. **Créer le bot Telegram** (voir README.md pour les instructions)
2. **Ajouter les variables d'env sur Vercel** : `TELEGRAM_BOT_TOKEN` et `TELEGRAM_CHAT_ID`
3. **Configurer le domaine** : `infinex.studio` dans Vercel + DNS
4. **Remplacer le logo** : `/public/images/logo.svg`
5. **Ajouter les vrais témoignages** : dans `messages/fr.json` et `messages/en.json`
