## Connect Card / Connect Card (Static)

### What’s live

- `web/src/pages/connect/connect-card/index.astro` renders the Connect Card, complete with the photo gallery, gallery captions, and the refreshed specification described below.
- `web/src/pages/connect/connect-card/thank-you.astro` is the post-submit landing page.
- Header navigation and the hero banner now highlight the new page.

### Connect Card spec

- **This is your church family** – a 3–6 image gallery near the top of the page shows worship, fellowship, service, and welcome moments so visitors see the mix of people and gatherings before they hit the form.
- **Required fields & flow** – the Connect Card is intentionally narrower than a generic contact form: email is optional, phone, a preferred visit date, the “Visited before?” radio, and a structured address block for street, line 2, city, state, ZIP, and country are all required so the hospitality team can respond with confidence.
- **Interest list** – the checkbox set now follows the outreach categories you requested: Prayer; Bible study; Visitation; Conversion; Baptism; Transfer; Facility use. At least one option must be selected, and the hidden `address` input (supported by the client-side address summary script) keeps the submission schema aligned with your destination sheet.
- **Deliverability / spam handling** – Cloudflare Turnstile stays on the form. The built-in `/api/connect-card` endpoint verifies each `cf-turnstile-response` with `PRIVATE_TURNSTILE_SECRET_KEY` before forwarding the submission to `PRIVATE_CONNECT_CARD_FORWARD_URL` (your Apps Script, SheetMonkey hook, etc.). You can also configure `CONNECT_CARD_NOTIFY_EMAILS`, `CONNECT_CARD_NOTIFY_FROM`, and `CONNECT_CARD_SENDGRID_API_KEY` to send inbox alerts via SendGrid. If you prefer to post directly to your script, set `PUBLIC_CONNECT_CARD_FORM_ACTION` to that URL instead.

### Field & data mapping

| Field | Input name | Notes |
| --- | --- | --- |
| Full Name | `fullName` | Required |
| Email | `email` | Optional |
| Phone | `phone` | Required so we can follow up when email bounces |
| Preferred visit date | `visitDate` | Required to plan hospitality |
| Visited before? | `visitedBefore` | Required radio (yes/no) |
| Street address | `addressStreet` | Required |
| Address line 2 | `addressLine2` | Optional (apt, suite, etc.) |
| City | `addressCity` | Required |
| State | `addressState` | Required |
| ZIP | `addressZip` | Required |
| Country | `addressCountry` | Optional unless you are visiting from outside the United States; helps the hospitality team prepare travel directions or mailings. |
| Address (formatted) | `address` | Hidden input populated by the client-side script |
| Reason for connecting | `connectionReason` | Required |
| Interests | `interests[]` | Required checkbox set (select at least one from the canonical list) |
| Preferred follow-up | `preferredContact` | Required |
| Notes | `notes` | Optional free text |
| Redirect URL | `redirectUrl` | Defaults to `/connect/connect-card/thank-you` |
| Source | `formSource` | `connect-card-web` (static form identifier) |

The front-end script also ensures at least one `interests[]` checkbox is checked before submission and keeps the hidden `address` field in sync with the structured address inputs.

### Option A: Google Sheet + Web App (static-friendly, recommended)

1. In Google Sheets, create a tab called **ConnectCards**. Add columns that match the form `name` attributes:

   | Column | Field name |
   | --- | --- |
   | `Full Name` | `fullName` |
   | `Email` | `email` |
   | `Phone` | `phone` |
   | `Preferred visit date` | `visitDate` |
   | `Visited before?` | `visitedBefore` |
   | `Street address` | `addressStreet` |
   | `Address line 2` | `addressLine2` |
   | `City` | `addressCity` |
   | `State` | `addressState` |
   | `ZIP` | `addressZip` |
   | `Address line (formatted)` | `address` |
   | `Reason` | `connectionReason` |
   | `Interests` | `interests` (comma-separated, from checkboxes) |
   | `Preferred Contact` | `preferredContact` |
   | `Notes` | `notes` |
   | `Source` | `formSource` |
   | `Submitted At` | you can add a timestamp column |

   The form script constructs the `address` column from the street/city/state/ZIP parts so you can use the formatted version in mailings while still keeping the discrete parts for logistics.

2. Open **Extensions > Apps Script**:

  ```javascript
  const SPREADSHEET_ID = "…"; // readable from the sheet URL
   const SHEET_NAME = "ConnectCards";
   const TURNSTILE_SECRET = PropertiesService.getScriptProperties().getProperty(
     "PRIVATE_TURNSTILE_SECRET_KEY"
   );

   function doPost(e) {
     const token = e.parameter["cf-turnstile-response"];
     if (!verifyTurnstile(token, TURNSTILE_SECRET)) {
       return ContentService.createTextOutput("Bot check failed").setMimeType(
         ContentService.MimeType.TEXT
       );
     }

     const row = [
       e.parameter.fullName,
       e.parameter.email,
       e.parameter.phone,
       e.parameter.visitDate,
       e.parameter.visitedBefore,
       e.parameter.addressStreet,
       e.parameter.addressLine2,
       e.parameter.addressCity,
       e.parameter.addressState,
       e.parameter.addressZip,
       e.parameter.address,
       e.parameter.connectionReason,
       (Array.isArray(e.parameter.interests) ? e.parameter.interests : [e.parameter.interests])
         .filter(Boolean)
         .join(", "),
       e.parameter.preferredContact,
       e.parameter.notes,
       e.parameter.formSource,
       new Date().toISOString(),
     ];

     SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME).appendRow(row);

     const redirectUrl = e.parameter.redirectUrl || "/connect/connect-card/thank-you";
     return ContentService.createTextOutput(
       `<script>location.replace("${redirectUrl}")</script>`
     ).setMimeType(ContentService.MimeType.TEXT);
   }

  function verifyTurnstile(token, secret) {
    if (!token || !secret) return false;
    const response = UrlFetchApp.fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "post",
      payload: {
        secret,
        response: token,
      },
    });
    return JSON.parse(response.getContentText()).success === true;
  }
  ```

   Use this script as the destination pointed to by `PRIVATE_CONNECT_CARD_FORWARD_URL` so the built-in `/api/connect-card` proxy can append rows on your behalf. You can also deploy the script alone and set `PUBLIC_CONNECT_CARD_FORM_ACTION` directly to its URL if you prefer.

   - Store `PRIVATE_TURNSTILE_SECRET_KEY` in **Script Properties**.
   - Deploy as **Web App**: execute as yourself, access “Anyone with the link.”

3. Copy the Web App URL into your `.env` / environment as:

   ```
   PUBLIC_CONNECT_CARD_FORM_ACTION=https://script.google.com/macros/s/…/exec
   PUBLIC_TURNSTILE_SITE_KEY=… (same site key shown by Cloudflare)
   PRIVATE_TURNSTILE_SECRET_KEY=… (only in Apps Script)
   ```

4. Turnstile requires server-side verification. The script above checks `cf-turnstile-response` before writing and redirects users to `redirectUrl` (defaults to `/connect/connect-card/thank-you`).

### Optional: provider-based backend (Option B) or SSR

- If you prefer Formspree/Basin/etc., point `PUBLIC_CONNECT_CARD_FORM_ACTION` to the provider’s URL instead. Keep the same field names for consistent columns (you can use hidden inputs to rename if needed).
- When you later enable SSR hosting, implement `web/src/pages/api/connect-card.ts` to accept the form via `request.formData()`, validate Turnstile with `fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", ...)`, append to your backend datastore, and respond with a redirect/JSON success.

### Deploy checklist

1. Confirm the form page renders the Turnstile widget (requires `PUBLIC_TURNSTILE_SITE_KEY`).
2. Fill the form in the staging site and verify a row is added to the sheet within seconds.
3. Confirm the browser lands on `/connect/connect-card/thank-you` after submit.
4. Keep `PRIVATE_TURNSTILE_SECRET_KEY` secret (Apps Script only).

### Environment & protections

- The built-in `/api/connect-card` route fails closed if any of the required secrets (`PRIVATE_TURNSTILE_SECRET_KEY`, `PRIVATE_CONNECT_CARD_FORWARD_URL`, `PUBLIC_TURNSTILE_SITE_KEY`) are missing, so make sure your hosting environment defines them before going live.
- Use `CONNECT_CARD_NOTIFY_EMAILS` (comma-separated list) and `CONNECT_CARD_NOTIFY_FROM` to route email alerts via SendGrid, or set `CONNECT_CARD_NOTIFY_EMAILS` empty if you prefer forwarding only to your script.
- Rate limiting is not enforced inside the handler itself; protect the endpoint with your host’s edge rules (Cloudflare rate limiting, a WAF, or platform throttling) to guard against automated abuse before submissions reach the Turnstile check.
