# Deadside Cheats — Marketing Site

Static Astro 7 site for [deadsidecheats.com](https://deadsidecheats.com). Primary SEO keyword: **deadside cheats** (secondary: deadside esp, deadside aimbot, deadside wallhack).

## Stack

- Astro 7 + Tailwind CSS 4 + TypeScript
- 22-locale i18n (English at root, `/es/`, `/fr/`, …)
- Cloudflare Workers deployment with `src/worker.ts`

## Quick start

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Deploy

See [DEPLOY.md](./DEPLOY.md) for Cloudflare Workers Builds setup targeting **deadsidecheats.com**.
