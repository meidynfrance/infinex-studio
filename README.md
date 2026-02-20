# Infinex.studio

AI Transformation & Augmented Engineering agency website.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **i18n**: next-intl (FR/EN)
- **Forms**: React Hook Form + Zod
- **Notifications**: Telegram Bot API
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Local Development

```bash
pnpm install
pnpm dev
```

The site runs at `http://localhost:3000`. You'll be redirected to `/fr` or `/en` based on your browser language.

### Environment Variables

Copy the example file:

```bash
cp .env.example .env
```

Fill in the values (see Telegram setup below).

## Telegram Bot Setup

The contact form sends notifications via Telegram. Follow these steps:

### 1. Create the bot

1. Open Telegram and search for **@BotFather**
2. Send `/newbot`
3. Choose a name (e.g., "Infinex Leads Bot")
4. Choose a username (e.g., `infinex_leads_bot`)
5. Copy the **API token** you receive

### 2. Get your Chat ID

1. Send any message to your new bot
2. Open this URL in your browser (replace `<TOKEN>` with your bot token):
   ```
   https://api.telegram.org/bot<TOKEN>/getUpdates
   ```
3. Find the `chat.id` value in the JSON response

### 3. Configure environment variables

Add these to your `.env` file (local) or Vercel environment variables (production):

| Variable | Description |
|----------|-------------|
| `TELEGRAM_BOT_TOKEN` | The bot token from BotFather |
| `TELEGRAM_CHAT_ID` | Your chat/group ID |

## Deployment

### Vercel

```bash
# Link to Vercel project
vercel link

# Add environment variables
vercel env add TELEGRAM_BOT_TOKEN
vercel env add TELEGRAM_CHAT_ID

# Deploy preview
vercel

# Deploy to production
vercel --prod
```

### Custom Domain

1. Go to Vercel Dashboard > Settings > Domains
2. Add `infinex.studio`
3. Update DNS records at your registrar:
   - **CNAME**: `cname.vercel-dns.com` (for `infinex.studio`)
   - Or use the **A record** provided by Vercel

## Project Structure

```
src/
├── app/
│   ├── [locale]/           # Localized pages
│   │   ├── layout.tsx      # Locale layout with fonts & metadata
│   │   ├── page.tsx        # Home page
│   │   ├── ai-transformation/
│   │   ├── ai-engineering/
│   │   ├── about/
│   │   └── get-started/
│   ├── api/contact/        # Contact form API route
│   ├── layout.tsx          # Root layout
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── layout/             # Header, Footer, LanguageSwitcher
│   ├── home/               # Hero, Approach, WhyNow, FAQ, etc.
│   ├── forms/              # ContactForm
│   └── ui/                 # Button, Card, Accordion, AnimatedSection
├── i18n/                   # next-intl config (routing, request, navigation)
└── lib/                    # Telegram, validations
messages/
├── fr.json                 # French translations
└── en.json                 # English translations
proxy.ts                    # Locale detection middleware
```

## Manual Actions Required

- [ ] Create Telegram bot (see instructions above)
- [ ] Add `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` to Vercel env vars
- [ ] Configure custom domain `infinex.studio` in Vercel
- [ ] Replace logo text with actual logo in `/public/images/logo.svg`
- [ ] Replace placeholder testimonials with real ones in translation files
