# Vacation Homes (Stayli)

React + Vite recreation of [Stayli on Framer](https://stayli.framer.website/), deployed to **Cloudflare Pages**.

## Stack

- React 19 + TypeScript + Tailwind CSS 3
- Assets in `public/images/` (from Stayli Framer export)
- GitHub Actions → Cloudflare Pages

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
```

Optional: `npm run build:framer-static` regenerates the old static HTML mirror via `scripts/process-stayli.mjs`.

## Deploy

| Branch | Preview |
|--------|---------|
| `dev` | https://dev.vacation-homes.pages.dev |
| `main` | https://vacation-homes.pages.dev |

See **[DEPLOYMENT.md](./DEPLOYMENT.md)**.
