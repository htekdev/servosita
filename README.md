# Servosita 💅

**Tu salón, en tu bolsillo.**

Voice-first AI salon management for beauty businesses in Mexico. Solo habla. Servosita se encarga del resto.

## Tech Stack

- **Frontend:** Next.js 14 (App Router) + React + Tailwind CSS
- **Backend:** tRPC + Supabase
- **Database:** PostgreSQL (Supabase)
- **Auth:** Supabase Auth (email + Google + WhatsApp OTP)
- **WhatsApp:** WhatsApp Business API
- **Payments:** Stripe (MXN) + Conekta (OXXO/SPEI)
- **Voice:** OpenAI Whisper
- **AI:** GPT-4o
- **i18n:** next-intl (es-MX primary)
- **Hosting:** Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
OPENAI_API_KEY=
STRIPE_SECRET_KEY=
CONEKTA_PRIVATE_KEY=
WHATSAPP_API_TOKEN=
```

## License

Proprietary — © 2026 Servosita
