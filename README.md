# SoCo Creator Collective

A marketplace connecting Sonoma County businesses with local creators for authentic,
cost-effective paid promotion. Built by McBratney Media.

## Running locally

```bash
npm install
npm run dev      # dev server at http://localhost:5173
npm run build    # type-check + production build
```

## Project structure

```
src/
  styles/            Design tokens (theme.css) + base styles (global.css)
  types/             Domain types shared across the app
  data/              Creator/business data (only ever read by the service layer)
  services/          Data access layer — the UI never touches the data files directly
  utils/             Small shared helpers (number/currency formatting)
  components/
    layout/          Header, Footer
    ui/              Reusable primitives (Button, Tag, Avatar)
  features/
    creators/        Everything creator-browsing: card, map, filters, contact modal
  pages/             One component per route (Home, Creators, Sign Up)
```

## Retheming the app

Every color, font, radius, shadow, and spacing value lives in
[`src/styles/theme.css`](src/styles/theme.css). Components only ever reference
`var(--token-name)`, so editing that one file rethemes the entire app. Display and
body fonts are loaded in `index.html` (Google Fonts) with serif system fallbacks.

## Deploying to GitHub Pages

The site is fully static — all data is bundled at build time; there is no backend.
Pushing to `main` runs [.github/workflows/deploy.yml](.github/workflows/deploy.yml),
which builds the site (TypeScript → JS via `tsc` + Vite) and publishes `dist/` to
GitHub Pages. One-time setup in the GitHub repo:

1. **Settings → Pages → Build and deployment → Source**: choose **GitHub Actions**.
2. Push to `main` (or run the workflow manually from the Actions tab).

The site is served at the custom domain
[sococreatorcollective.com](https://sococreatorcollective.com) (set under
Settings → Pages, DNS at Namecheap), so the workflow builds with base path `/`.
Deep links like `/creators` work via a `404.html` single-page-app fallback.

To update the creator roster, edit
[`src/data/mockCreators.ts`](src/data/mockCreators.ts) (read only through
[`src/services/creatorService.ts`](src/services/creatorService.ts)) and push.

## Current MVP scope

- **Home** — what the platform is about, for businesses and creators
- **Creators** — browse 20 (mock) creators in a card grid or on a Sonoma County map
  (Leaflet + OpenStreetMap, no API key needed), with search, filters (opportunity
  type, hometown, budget) and sorting (price, IG/TikTok followers, name)
- **Sign Up** — visual shell only; submission is not wired up yet
- "Submit an Offer" buttons show a coming-soon dialog by design
