# First Springfield Church Website

![CI](https://github.com/josuejero/church-website/actions/workflows/web/.github/workflows/ci.yml/badge.svg) ![Lighthouse CI budget enforced](https://img.shields.io/badge/Lighthouse%20CI-budget%20enforced-brightgreen)

This repo hosts the new First Springfield SDA site built with Astro and Cloudflare Workers. The focus is on a fast, accessible experience for worshipers, visitors, and church staff who need schedules, ministries, giving links, and helpful content in a heartbeat.

**Live demo:** https://firstspringfieldma.adventistchurch.org/

## Why this project is a UI-intern-quality repo

- **UI from spec:** the designer handoff lives in [docs/ui-handoff.md](docs/ui-handoff.md), showing how colors, spacing, and layout principles translate into code.
- **Cross-browser smoke:** Playwright runs the Chromium full suite plus Firefox/WebKit smoke tests to prove it works everywhere.
- **Accessibility:** axe scans are part of the CI workflow so every push guards against regressions.
- **Performance:** Lighthouse CI budgets are enforced to keep the experience fast.
- **Cross-device:** Playwright `mobile-smoke` project plus device emulation validate the UI at representative mobile viewports.

## Getting started

1. `cd web`
2. `npm install`
3. `npm run dev`

The remaining scripts live inside `web/package.json`. `npm run build` produces a static output in `web/dist`, and `npm run preview` lets you inspect the production bundle locally before deployment.

## Local development

| Command | Purpose |
| --- | --- |
| `cd web && npm install` | Install dependencies and make the Astro scripts available. |
| `cd web && npm run dev` | Start the Astro dev server at `localhost:4321`. |
| `cd web && npm run qa` | Run `astro check`, Playwright E2E, Linkinator, and Lighthouse locally. |
| `cd web && npm run format` | Format Astro/Svelte files with Prettier + plugins. |

## Tech highlights

- Astro + Cloudflare Workers deliver content-first rendering with partial hydration where it makes the most sense.
- Tokens govern spacing, typography, color, and elevation so the component library stays cohesive.
- Accessibility-first surface rules (focus-visible, skip link, 44px tap targets, semantic headings) keep the site welcoming to everyone.
- Accessibility commitment: We follow WCAG 2.2 intent—44px tap targets, strong focus indicators, meaningful heading hierarchy, and keyboard navigation via the skip link so the UI feels reliable on every device (`web/src/styles/a11y.css`, `web/tests/e2e/phase-7-a11y.spec.ts`).
- A smoke suite (Playwright E2E, Linkinator links, Lighthouse CI) keeps regressions off the branch.
- Performance, accessibility, best practices, and SEO budgets run inside CI so builds never slip below the target thresholds.

## Engineering highlights

- Design tokens and the shared component library keep layout rhythm consistent as new stories land.
- The cross-engine smoke suite stitches together Playwright, link checking, and Lighthouse to prove the experience in multiple browsers.
- CI enforces the lightweight Lighthouse budget plus Playwright/linkinator updates on every push.

## Performance budget (Lighthouse CI)

![Latest Lighthouse CI run](docs/assets/lighthouse-latest.png)

We enforce a small Lighthouse CI budget in order to catch “death by a thousand cuts” (unoptimized images, heavy scripts, accidental layout shifts) before it reaches production:
- The CI workflow now runs `treosh/lighthouse-ci-action`, uploads `web/.lighthouseci` as the `lighthouseci` artifact, and posts a PR comment (`tag: lighthouse-ci`) that links to the temporary HTML report so reviewers see the latest scores without rerunning locally.
- Performance score must stay at or above 0.90.
- Accessibility score must stay at or above 0.95.
- Best Practices score must stay at or above 0.95.
- SEO score must stay at or above 0.95.

Lighthouse category assertions operate on a 0–1 scale in CI configs, so 0.90 corresponds to “90/100 style” expectations. Config: `web/lighthouserc.cjs`. Run locally from the `web/` folder via `npm run lighthouse`.

## Supporting docs

- [Design handoff](docs/ui-handoff.md)
- [Web developer README](web/README.md)
- [Component guide (living style guide)](/components)
- [Community health docs](CONTRIBUTING.md) _(includes CONTRIBUTING, CODE_OF_CONDUCT, SECURITY, LICENSE)_

## Troubleshooting

- If Playwright fails locally, run `npx playwright install --with-deps` and consult Playwright’s docs on CI workflows/setup patterns.
- If Lighthouse CI fails, inspect large images or heavyweight scripts, optimize them, and rerun `npm run lighthouse`; budgets guard performance, accessibility, best practices, and SEO.
