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

Open **http://localhost:5173** in your browser.

On a **Cursor Cloud Agent**, open the **Ports** panel, find port **5173**, and click the forwarded URL.

To serve the built site without hot reload:

```bash
npm run build && npm run serve
```

## Deploy

See [DEPLOY.md](./DEPLOY.md) for Cloudflare Workers Builds setup targeting **narakacheats.org**.
