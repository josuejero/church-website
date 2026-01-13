# Contributing

Thanks for improving First Springfield Church Website! Follow the guidelines below so changes stay reliable and reviewers can move quickly.

## Getting started

1. `git checkout -b feature/description` (use prefixes like `feature/`, `fix/`, `docs/`, `chore/`, etc.).
2. Always run the QA suite before opening a PR so CI has the same baseline:
   ```sh
   cd web
   npm install
   npm run qa
   ```
3. Keep commits focused and descriptive; squash/fixup as needed before merging.

## Branch naming & PR expectations

- Prefer active names like `feature/service-livestream` or `fix/banner-spacing`.
- Title PRs with the change (e.g., “Improve Banner focus states”) and cite the main README section or issue if one exists.
- Describe what was done, list any manual verifications (Lighthouse, Playwright, Linkinator), and attach screenshots when the UI changes.
- Mention any missing coverage or follow-up work in the PR description so reviewers know what to expect.
- Link to `CONTRIBUTING.md`, `SECURITY.md`, or `docs/ui-reliability.md` when relevant.

## Tests & formatting

- `npm run format` touches Astro/Svelte files; run it locally if you change markup or styles.
- `npm run test:e2e:ci` (Playwright) plus `npm run test:links:ci` ensure cross-browser and link coverage.
- `npm run lighthouse:ci` enforces performance + accessibility budgets before landing a change that touches layout.

## Questions?

Reach out on the repo or cross-post to the church tech/staff email before sending large updates. Thank you!
