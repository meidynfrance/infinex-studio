# CLAUDE.md — Infinex.studio

## 🎯 Projet

Infinex est une agence de transformation IA et d'ingénierie augmentée par l'IA. On aide les entreprises à passer d'un état "AI-absent" à "AI-native" avec une approche orientée résultats, rapide, sans bullshit consulting.

**Domaine** : infinex.studio
**Modèle de référence** : https://www.tenex.co/ (même positionnement, même structure de services)
**Marché** : Francophone d'abord, international ensuite.

---

## 🏗️ Stack technique

| Composant | Choix |
|-----------|-------|
| Framework | Next.js 14+ (App Router) |
| Langage | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| i18n | next-intl |
| Formulaire | React Hook Form + Zod |
| Notifications | Telegram Bot API |
| Déploiement | Vercel (CLI) |
| Repo | GitHub (CLI `gh`) |
| Package manager | pnpm |

---

## 🌍 Internationalisation (i18n)

- Le site DOIT être disponible en **français (fr)** et **anglais (en)**.
- Utiliser `next-intl` avec le App Router de Next.js.
- **Détection automatique de la langue du navigateur** :
  - Si `Accept-Language` contient `fr` → afficher en français
  - Sinon → afficher en anglais (langue par défaut)
- Structure des URLs :
  - `/fr/...` pour le français
  - `/en/...` pour l'anglais
  - `/` redirige automatiquement vers `/fr` ou `/en` selon le navigateur
- Les fichiers de traduction sont dans `/messages/fr.json` et `/messages/en.json`
- Le switch de langue doit être visible dans le header (drapeau ou code FR/EN)

---

## 📄 Structure du site (pages)

### 1. Page d'accueil (`/`)
- **Hero section** : Headline percutante + sous-titre + CTA "Commencer"
  - FR: "Croissance infinie." / "Votre partenaire de transformation IA."
  - EN: "Infinite growth." / "Your AI transformation partner."
- **Section approche** : 3 cartes (Stratégie, Transformation, Ingénierie)
- **Section "pourquoi maintenant"** : Texte provocateur sur l'urgence de l'IA
- **Section témoignages** : Carrousel (placeholder pour le moment)
- **Section FAQ** : Accordéon
- **CTA final** : "Restez du bon côté de l'histoire" + bouton

### 2. Transformation IA (`/ai-transformation`)
- Détail du service de stratégie et transformation IA
- Process en étapes
- Bénéfices mesurables

### 3. Ingénierie IA (`/ai-engineering`)
- Détail du service d'engineering augmenté par l'IA
- Modèle subscription / outcome-based
- Avantages vs dev shop classique

### 4. À propos (`/about`)
- Vision et mission
- Valeurs
- Équipe (placeholder)

### 5. Contact / Get Started (`/get-started`)
- Formulaire de contact :
  - Nom complet
  - Email
  - Entreprise
  - Chiffre d'affaires approximatif (select : < 1M€, 1-5M€, 5-25M€, 25M€+)
  - Message / besoin
  - Bouton "Envoyer"
- À la soumission → notification Telegram

---

## 🎨 Design & Branding

### Identité visuelle
- **Style** : Moderne, bold, premium, tech-forward. Inspiré de Tenex mais avec sa propre identité.
- **Palette de couleurs** :
  - Fond principal : Noir profond (`#0A0A0A`)
  - Fond secondaire : Gris très foncé (`#141414`)
  - Accent primaire : Violet électrique (`#8B5CF6`) 
  - Accent secondaire : Cyan (`#06B6D4`)
  - Texte principal : Blanc (`#FAFAFA`)
  - Texte secondaire : Gris (`#A1A1AA`)
- **Typographie** : 
  - Headings : Inter ou Space Grotesk (bold, letterspacing tight)
  - Body : Inter (regular)
- **Logo** : Texte "INFINEX" stylisé avec le symbole ∞ intégré subtilement. Pour le moment, utiliser un logo texte simple en attendant le vrai logo.

### Animations
- Scroll-triggered animations (fade in, slide up) via Framer Motion
- Hover effects sur les cartes et boutons
- Transition de page fluide
- Pas de GIF — des animations CSS/JS pures

### Responsive
- Mobile-first
- Breakpoints : sm (640px), md (768px), lg (1024px), xl (1280px)
- Le site doit être parfait sur mobile

---

## 📨 Formulaire & Telegram

### Fonctionnement
1. L'utilisateur remplit le formulaire sur `/get-started`
2. Validation côté client (React Hook Form + Zod)
3. Soumission vers une API Route Next.js (`/api/contact`)
4. L'API Route envoie une notification Telegram via le Bot API
5. Réponse de succès affichée à l'utilisateur

### Configuration Telegram
- Les variables d'environnement nécessaires :
  - `TELEGRAM_BOT_TOKEN` — Token du bot Telegram
  - `TELEGRAM_CHAT_ID` — ID du chat/groupe où envoyer les notifs
- Format du message Telegram :
```
🚀 Nouveau lead Infinex !

👤 Nom : {name}
📧 Email : {email}
🏢 Entreprise : {company}
💰 CA : {revenue}
💬 Message : {message}

📅 {date} | 🌐 {locale}
```

### Instructions pour le propriétaire (à faire manuellement)
Le README doit contenir les instructions pour :
1. Créer un bot Telegram via @BotFather
2. Récupérer le token
3. Trouver son chat ID
4. Ajouter les variables dans Vercel

---

## 🔧 Setup & Déploiement

### GitHub (via `gh` CLI)
```bash
gh repo create infinex-studio --public --source=. --remote=origin --push
```

### Vercel (via `vercel` CLI)
```bash
vercel link
vercel env add TELEGRAM_BOT_TOKEN
vercel env add TELEGRAM_CHAT_ID
vercel --prod
```

### Variables d'environnement
| Variable | Description | Où |
|----------|-------------|-----|
| `TELEGRAM_BOT_TOKEN` | Token du bot Telegram | Vercel env |
| `TELEGRAM_CHAT_ID` | Chat ID Telegram | Vercel env |

---

## 📁 Structure du projet

```
infinex-studio/
├── CLAUDE.md
├── TODO.md
├── README.md
├── package.json
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── .env.example
├── .gitignore
├── messages/
│   ├── fr.json
│   └── en.json
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── ai-transformation/
│   │   │   │   └── page.tsx
│   │   │   ├── ai-engineering/
│   │   │   │   └── page.tsx
│   │   │   ├── about/
│   │   │   │   └── page.tsx
│   │   │   └── get-started/
│   │   │       └── page.tsx
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── LanguageSwitcher.tsx
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── Approach.tsx
│   │   │   ├── WhyNow.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── FAQ.tsx
│   │   │   └── FinalCTA.tsx
│   │   ├── forms/
│   │   │   └── ContactForm.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Accordion.tsx
│   │       └── AnimatedSection.tsx
│   ├── lib/
│   │   ├── telegram.ts
│   │   └── validations.ts
│   └── i18n/
│       ├── request.ts
│       └── routing.ts
├── public/
│   ├── favicon.ico
│   └── images/
└── middleware.ts
```

---

## 🧠 Contenu & Copywriting

### Ton de voix
- **Audacieux** mais pas arrogant
- **Direct** — pas de jargon consulting
- **Provocateur** — challenge le statu quo
- **Confiant** — on sait ce qu'on fait
- Inspiré du ton de Tenex : "You have a choice. Disrupt yourself. Or be disrupted by others."

### Messages clés
- "Le coût de l'intelligence tend vers zéro. Et vous ?"
- "Pas de decks de 200 slides. Pas de diagnostics de 6 mois. On exécute."
- "On ne se soucie pas d'aujourd'hui. On se soucie de la prochaine décennie."
- "L'IA n'est pas effrayante. L'ignorer, si."

### FAQ (contenu)
1. **En quoi Infinex est différent d'un cabinet de conseil classique ?**
   → On ne fait pas de slides, on exécute. On mesure le ROI, pas les heures.

2. **Que signifie "transformation IA" ?**
   → Identifier vos bottlenecks, créer des solutions IA, former vos équipes, mesurer les résultats. Rinse and repeat.

3. **Comment fonctionne le pricing ?**
   → Engineering : abonnement mensuel basé sur les résultats. Transformation : partenariat custom. Appelez-nous.

4. **Avec quel type d'entreprises travaillez-vous ?**
   → Entreprises matures (>5M€ CA) motivées à devenir AI-native mais qui n'ont pas les ressources en interne.

5. **Comment fonctionne l'ingénierie IA ?**
   → Squads d'ingénierie outcome-based, augmentées par l'IA. Vous payez pour les features livrées, pas les heures.

---

## ⚡ Performance & SEO

- Score Lighthouse > 90 sur toutes les métriques
- Metadata SEO complète (title, description, OG tags) en FR et EN
- Sitemap.xml automatique
- robots.txt
- Fonts optimisées (next/font)
- Images optimisées (next/image si besoin)
- Préférer les composants Server par défaut, Client uniquement quand nécessaire

---

## 🚨 Règles importantes

1. **TODO.md** : Toujours mettre à jour le fichier TODO.md avant et après chaque tâche. C'est le fichier de coordination entre les terminaux Claude Code parallèles.
2. **Commits** : Commits atomiques et fréquents avec messages descriptifs en anglais.
3. **Types** : TypeScript strict, pas de `any`.
4. **Tests** : Pas de tests pour le moment (MVP).
5. **Ne JAMAIS hardcoder du texte** : Tout le contenu visible doit passer par les fichiers de traduction i18n.
6. **Variables d'env** : Ne jamais commit de secrets. Utiliser `.env.example` comme template.
7. **Si quelque chose nécessite une action manuelle** : Le noter clairement dans le README et dans la TODO.
