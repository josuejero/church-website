# First Springfield Church Website

![CI](https://github.com/josuejero/church-website/actions/workflows/web/.github/workflows/ci.yml/badge.svg) ![Lighthouse CI budget enforced](https://img.shields.io/badge/Lighthouse%20CI-budget%20enforced-brightgreen)

First Springfield SDA’s public site rebuilt with Astro + Cloudflare Workers, focused on worshipers, visitors, and church staff who need a fast, accessible experience to find ministries, schedules, and giving info.

**Live demo:** https://firstspringfieldma.adventistchurch.org/

### Tech highlights
- Astro + Cloudflare Workers deliver content-first rendering with partial hydration where it matters.
- Tokens power spacing, typography, color, and elevation so the component library stays cohesive.
- Accessibility-first surface rules (focus-visible, skip link, 44px tap targets, semantic headings) keep the site welcoming to everyone.
- Smoke suite (Playwright E2E, Linkinator links, Lighthouse CI) keeps regressions off the branch.
- Performance, accessibility, best practices, and SEO budgets live inside CI so builds never slip below 0.90/0.95 thresholds.

### Engineering highlights
- Design tokens and the shared component library keep layout rhythm consistent as new stories land.
- Cross-engine smoke suite stitches together Playwright, link checking, and Lighthouse to prove the experience in multiple browsers.
- CI enforces the lightweight Lighthouse budget plus Playwright/linkinator checks on every push.

### Local development
| Command | Purpose |
| --- | --- |
| `cd web && npm install` | Install dependencies and make scripts available. |
| `cd web && npm run dev` | Start the Astro dev server at `localhost:4321`. |
| `cd web && npm run qa` | Run `astro check`, Playwright E2E, Linkinator, and Lighthouse locally. |
| `cd web && npm run format` | Format Astro/Svelte files with Prettier + plugins. |

### Supporting docs
- [Design handoff](docs/ui-handoff.md)
- [Web developer README](web/README.md)

### Troubleshooting
- If Playwright fails locally, run `npx playwright install --with-deps` and consult Playwright’s docs on CI workflows/setup patterns.
- If Lighthouse CI fails, inspect large images or heavyweight scripts, optimize them, and rerun `npm run lighthouse`; budgets guard performance, accessibility, best practices, and SEO.
