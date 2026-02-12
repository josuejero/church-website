## Connect Card / Connect Card (Static)

### What’s live

- `web/src/pages/connect/connect-card/index.astro` renders the form and posts to a configurable endpoint.
- `web/src/pages/connect/connect-card/thank-you.astro` is the post-submit landing page.
- Header navigation and the hero banner now highlight the new page.

### Option A: Google Sheet + Web App (static-friendly, recommended)

1. In Google Sheets, create a tab called **ConnectCards**. Add columns that match the form `name` attributes:

   | Column | Field name |
   | --- | --- |
   | `Full Name` | `fullName` |
   | `Email` | `email` |
   | `Phone` | `phone` |
   | `Address` | `address` |
   | `Reason` | `connectionReason` |
   | `Interests` | `interests` (comma-separated, from checkboxes) |
   | `Preferred Contact` | `preferredContact` |
   | `Notes` | `notes` |
   | `Source` | `formSource` |
   | `Submitted At` | you can add a timestamp column |

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
