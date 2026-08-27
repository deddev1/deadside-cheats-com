# Naraka Cheats — Marketing Site

Static Astro 7 site for [narakacheats.org](https://narakacheats.org). Primary SEO keyword: **naraka cheats** (secondary: naraka esp, naraka aimbot, naraka wallhack).

## Stack

- Astro 7 + Tailwind CSS 4 + TypeScript
- 22-locale i18n (English at root, `/es/`, `/fr/`, …)
- Cloudflare Workers deployment with `src/worker.ts`

## Quick start

```bash
npm install
npm run localhost
# open http://localhost:5173
```

## Deploy

See [DEPLOY.md](./DEPLOY.md) for Cloudflare Workers Builds setup targeting **narakacheats.org**.
