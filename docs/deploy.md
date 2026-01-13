# Deploy notes

This repo builds with Astro + the Cloudflare Worker adapter, so the site ships as static files plus SSR routes that run inside Cloudflare Pages/Workers. The following steps keep deployments reproducible for preview and production when you need to demo or hand off to someone else.

## Environment variables

- `PUBLIC_SITE_URL` (set in CI + Pages) defines the canonical host for sitemap/robots/meta tags. CI exports it as `http://127.0.0.1:4321` to make `astro` render deterministic assets (robots, sitemap, canonical URLs). The same value should match the Pages preview/production domain so absolute URLs stay consistent.
- Cloudflare secrets (Cloudflare Pages project settings or `wrangler publish`) typically include `CF_ACCOUNT_ID`, `CF_PROJECT_NAME`, and a `CF_API_TOKEN` scoped to publish `pages` & `workers`. Keep them in GitHub secrets or the Pages dashboard and never hardcode them in `web/`.

## Preview workflow

1. From the repo root run `cd web && npm install`.
2. Build and preview with `npm run preview`; Astro uses the Cloudflare adapter and starts a local preview server—any absolute URLs honor `PUBLIC_SITE_URL` if you export it before running the command.
3. For emulator parity you can run `npx wrangler dev --local --ip 127.0.0.1 --port 4321` to exercise the Cloudflare Worker runtime; combine this with `npm run build` so the server uses the exact SSR bundle that Pages would deploy.

## Production deployments

1. Cloudflare Pages automatically picks up `web/` (build command `npm run build`) and uses `wrangler publish` under the hood when you connect the GitHub repo.
2. Ensure the Pages project’s production branch matches `main`/`master` and the `PUBLIC_SITE_URL` secret equals the published domain (e.g., `https://firstspringfieldma.adventistchurch.org`). This keeps canonical tags and sitemap URLs stable.
3. When you push, the existing CI job runs `npm run test:e2e:ci`, `npm run test:links:ci`, and `lhci` assertions before handing the built `web/dist` folder off to Pages.

## Verifying sitemap + robots + canonical output

1. After `npm run build`, inspect `web/dist/sitemap.xml` and `web/dist/robots.txt` to confirm URLs point to `PUBLIC_SITE_URL`.
2. The CI job already sets the same environment variable and runs `npm run build`, meaning the generated files in CI should match the deployed output. Re-run `npm run lighthouse` locally to surface canonical/robots warnings if they regress.
3. Build artifacts (`web/.lighthouseci` and `web/dist`) and the smoke suite ensure canonical links do not regress—check the CI artifacts or rerun `npm run qa` locally when you need to audit metadata behavior before shipping.
