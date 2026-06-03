# Vacation Homes (Stayli clone)

Pixel-faithful static clone of [Stayli on Framer](https://stayli.framer.website/), deployed to **Cloudflare Pages**.

## Stack

- Framer SSR HTML (processed from `_stayli-source.html`)
- Local assets in `public/images/`
- Vite (static `index.html` → `dist/`)
- GitHub Actions → Cloudflare Pages

## Design source

- **Reference:** https://stayli.framer.website/
- **URL mode:** `root` (confirmed)
- **Version:** `v1.02` in header (injected next to home logo)
- **Fonts:** Inter (from Framer-hosted subsets in page CSS)

## Regenerate from Framer

```bash
curl -sL "https://stayli.framer.website/" -o _stayli-source.html
node scripts/process-stayli.mjs
npm run build
```

## Local development

```bash
npm install
npm run build
npm run preview
```

Or after processing: `npx wrangler pages dev dist --port 8788`

## Deploy

See **[DEPLOYMENT.md](./DEPLOYMENT.md)**.

| Branch | Preview |
|--------|---------|
| `dev` | https://dev.vacation-homes.pages.dev |
| `main` | https://vacation-homes.pages.dev |
