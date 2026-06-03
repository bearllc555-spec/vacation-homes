# Vacation Homes

Standalone vacation-rentals marketing site (**Shoreline Stays** design concept), built with **Vite**, **React 19**, and **Tailwind CSS**, deployed to **Cloudflare Pages**.

## Stack

- Vite 7 + React 19 + TypeScript
- Tailwind CSS 3
- Cloudflare Pages + GitHub Actions

## Design source

- **Reference:** [Stayli on Framer](https://stayli.framer.website/) (listed in `998webdesigns.comX` portfolio as vacation-rentals inspiration)
- **URL mode:** `root` (assumed until you specify otherwise)
- **Version:** `v1.01` in header — bump `src/lib/version.ts` each iteration

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build & preview

```bash
npm run build
npm run preview
```

Static output is written to `dist/`.

## Deploy

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for branch URLs and secrets.

| Branch | Cloudflare preview |
|--------|-------------------|
| `dev` | https://dev.vacation-homes.pages.dev |
| `main` | https://vacation-homes.pages.dev |

1. Work on **`dev`**; merge to **`main`** for production preview.
2. GitHub secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`.
3. Push — Actions deploys to Pages project **vacation-homes**.
