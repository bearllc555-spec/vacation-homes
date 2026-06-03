# Vacation Homes — deployment

**GitHub:** https://github.com/bearllc555-spec/vacation-homes

**Design source:** React clone of https://stayli.framer.website/ (`v1.03`); see README.

## Cloudflare Pages

| Environment | Git branch | Preview URL |
|-------------|------------|-------------|
| **Dev (sandbox)** | `dev` | https://dev.vacation-homes.pages.dev |
| **Production** | `main` | https://vacation-homes.pages.dev |

- **Pages project:** `vacation-homes`
- **URL mode:** `root` — site and assets at `/` (no mockup path prefix)
- **Build output:** `./dist` (Vite production build)
- **Account ID:** `e0f6f68f26f8a26a75eaa793385019ef`

Workflow: `.github/workflows/deploy.yml` — builds on push to `main` and `dev`, sets `VITE_SITE_URL` per branch in the workflow file (not empty repo variables), deploys with Wrangler.

### Version label

Bump `SITE_VERSION` in `src/lib/version.ts` on **every** change (`v1.01` → `v1.02`, …). It appears in the site header next to the brand name.

### Header home link

Clicking the brand title runs `goHome()` — scrolls to top and removes any `#hash` from the URL.

### Branch workflow

1. Day-to-day work on **`dev`** — pushes auto-deploy to the dev preview URL.
2. Merge to **`main`** when ready for production preview / custom domain.

### GitHub Actions secrets

Configured on the repo (do not commit tokens):

| Secret | Purpose |
|--------|---------|
| `CLOUDFLARE_API_TOKEN` | API token with Cloudflare Pages edit permission |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare account ID |

### Manual deploy (local)

```powershell
cd c:\Users\thede\OneDrive\Documents\001-cloudflare\004-vacation-homes
npm run build
$env:CLOUDFLARE_ACCOUNT_ID = "<your-account-id>"
# Set CLOUDFLARE_API_TOKEN in the environment
npx wrangler pages deploy ./dist --project-name=vacation-homes --branch=dev
```

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:5173
