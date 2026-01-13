# UI reliability notes

This page explains the known UI failure modes we monitor so we can triage common issues, keep the experience responsive, and communicate how the build/release pipeline proves behavior before every deploy.

## Failure: YouTube embed blocked / slow network

- **User impact:** The sermon/media player takes center stage on the media page, so a blocked iframe can freeze loading above-the-fold content and make the hero section feel inert.
- **How the UI behaves:** The media section renders a retry-friendly CTA (watch live / try again) and drops the iframe in favor of a descriptive fallback tile with the video title and transcript preview so the rest of the page remains interactive.
- **How we test it:** The Playwright smoke suite includes `/media` coverage (see `web/tests/e2e/smoke.spec.ts`) and the a11y sweep catches residual UI shifts; we manually simulate iframe route abortion when diagnosing regressions, and `npx playwright test --project=chromium --grep media` lets us run a blocked request locally. Lighthouse CI budgets highlight any layout shift that might come from repeated iframe retries.

## Failure: Missing content collection item

- **User impact:** The equal-width grids (cards, ministries, events) depend on CMS content collections; a missing item leaves a hole that feels like a broken card or outdated listing.
- **How the UI behaves:** We render placeholder cards with the `Card` component plus muted copy, and the grid gracefully collapses while `Linkinator`/Playwright watchers flag the missing link. Content editors get a descriptive notification in the admin so they can republish.
- **How we test it:** `astro check` validates generated types inside `web/src/content`, Playwright smoke checks the `CardGrid` (`/` page) for fallout, and `linkinator.config.json` ensures published links exist. During local debugging we stub the collection (commented fixture) so we can observe the placeholder state while keeping CI green.

## Failure: Search index not ready

- **User impact:** The Pagefind-powered search overlay is often the first thing visitors touch when they land on a new topic; if the index build is in progress the search input returns no results and may mislead the user.
- **How the UI behaves:** We render a skeleton input and button with “Retry search” copy, show inline microcopy explaining the cold start, and keep the search modal open so the user can retry without navigating away.
- **How we test it:** The `phase-7-a11y` Axe test (`web/tests/e2e/phase-7-a11y.spec.ts`) already spins up the search modal and verifies accessible labels; we extend that harness with the “Search index not ready” copy while manually blocking the `/pagefind-ui` endpoint during regression runs. Lighthouse budgets guard for the skeleton’s CLS/pause, and Playwright smoke tests executed during CI ensure the UI still renders with mock search results even when the service is offline.

## Reliability signals

- Automated tooling (Playwright smoke + axe, Linkinator, Lighthouse CI) runs on every push—see `web/test-results` and `web/playwright.config.ts` for CI entry points.
- For quick triage, rerun `npm run qa` inside `web/` to reproduce a failure locally while hitting the same test matrix we rely on in CI.
