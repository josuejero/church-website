# Connect Card

## Active launch path

The Connect Form is hosted in Google Forms; the website links out to the published responder link.

Published form:

https://docs.google.com/forms/d/e/1FAIpQLSe8tLdlnVMI7tGSlVptPOlY4oE6nqm0ihw71NVCwIfZFaE0ag/viewform?usp=header

The website bridge page is:

- /connect/connect-card

The primary button on that page is:

- Open Connect form

That button should link to docs.google.com/forms and open the published Google Forms responder page in a new tab.

## What is not in the launch path

The custom internal Connect Card backend is not part of launch.

Do not configure these custom backend secrets for launch:

- PUBLIC_CONNECT_CARD_FORM_ACTION
- PUBLIC_TURNSTILE_SITE_KEY
- PRIVATE_TURNSTILE_SECRET_KEY
- PRIVATE_CONNECT_CARD_FORWARD_URL
- CONNECT_CARD_NOTIFY_EMAILS
- CONNECT_CARD_NOTIFY_FROM
- CONNECT_CARD_SENDGRID_API_KEY

Do not test custom form submission for launch.

Do not treat the old lowercase Astro post export in the removed API route as a blocker. The custom API route is intentionally removed from the launch path.

## Files intentionally removed or archived

These files belonged to the unused custom form/backend path and should not be imported by active launch code:

- web/src/pages/api/connect-card.ts
- web/src/components/connect/ConnectCardForm.astro
- web/src/lib/connectCard.ts
- web/src/lib/connect-card.ts
- web/tests/unit/connect-card.spec.ts

## Launch verification

Run the Connect Card e2e test and confirm:

- /connect/connect-card renders the bridge page.
- Open Connect form is visible.
- Open Connect form links to https://docs.google.com/forms/....
- The page does not render the old internal form fields.
- No custom backend secrets are required.
