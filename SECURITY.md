# Security Policy

## Reporting a Vulnerability

If you discover a security issue, please notify us at `security@firstspringfieldma.adventistchurch.org` with:

- A short description of the issue.
- The affected component (e.g., frontend embed, deployment).
- Steps to reproduce or a proof of concept.
- Any mitigations you’ve already tried.

We aim to respond within 48 hours, keep the report confidential, and coordinate a fix before public disclosure.

## Supported Versions

This repo runs on the latest dependencies pinned in `web/package-lock.json`. Security updates are applied through CI before merging.

## Guidance for Contributors

- Keep dependencies up to date (`npm update` inside `web/` and rerun `npm run qa`).
- Avoid committing secrets or tokens; use the GitHub secrets store for private configuration.
- Document security implications of large changes in both the PR body and `docs/ui-reliability.md` when relevant.
