# Naraka Cheats — Marketing Site

Static Astro 7 site for [narakacheats.org](https://narakacheats.org). Primary SEO keyword: **naraka cheats** (secondary: naraka esp, naraka aimbot, naraka wallhack).

## Stack

- Astro 7 + Tailwind CSS 4 + TypeScript
- 22-locale i18n (English at root, `/es/`, `/fr/`, …)
- Cloudflare Workers deployment with `src/worker.ts`

## Quick start

```bash
npm install
npm run dev
```

Open **http://localhost:3000** in your browser.

On a **Cursor Cloud Agent**, use the **Ports** panel (port **3000**) and open the forwarded URL — plain `localhost` on your machine does not reach the remote VM.

To preview the production build:

```bash
npm run localhost
# builds dist/ then serves at http://localhost:3000
```

## Deploy

See [DEPLOY.md](./DEPLOY.md) for Cloudflare Workers Builds setup targeting **narakacheats.org**.
