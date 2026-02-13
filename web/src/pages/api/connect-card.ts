import type { APIRoute } from "astro";
import { site } from "../../data/site";

const THANK_YOU_PATH = "/connect/connect-card/thank-you";
const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const SENDGRID_ENDPOINT = "https://api.sendgrid.com/v3/mail/send";

const verifyTurnstile = async (token: string, secret: string) => {
  try {
    const response = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
    });
    const payload = await response.json();
    return payload.success === true;
  } catch (error) {
    console.error("Turnstile verification error", error);
    return false;
  }
};

const buildSummary = (entries: [string, FormDataEntryValue][]) => {
  const summary: Record<string, string> = {};

  for (const [key, value] of entries) {
    if (key === "cf-turnstile-response" || value instanceof File) {
      continue;
    }

    const normalizedKey = key.replace(/\[\]$/, "");
    const textValue = String(value).trim();
    if (!textValue) {
      continue;
    }

    summary[normalizedKey] = summary[normalizedKey]
      ? `${summary[normalizedKey]}, ${textValue}`
      : textValue;
  }

  return summary;
};

const formatSummaryText = (summary: Record<string, string>) =>
  Object.entries(summary)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");

const sendNotificationEmail = async (
  recipients: string[],
  fromEmail: string,
  apiKey: string,
  summaryText: string
) => {
  if (!recipients.length) return;

  const payload = {
    personalizations: [
      {
        to: recipients.map((email) => ({ email })),
        subject: `Connect Card · ${site.shortName}`,
      },
    ],
    from: { email: fromEmail },
    content: [{ type: "text/plain", value: summaryText }],
  };

  const response = await fetch(SENDGRID_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`SendGrid error ${response.status}: ${errorText}`);
  }
};

export const prerender = false;

export const post: APIRoute = async ({ request }) => {
  const turnstileSecret = process.env.PRIVATE_TURNSTILE_SECRET_KEY;
  if (!turnstileSecret) {
    return new Response("Turnstile secret is not configured.", { status: 503 });
  }

  const formData = await request.formData();
  const tokenValue = formData.get("cf-turnstile-response");
  if (!tokenValue) {
    return new Response("Turnstile token missing.", { status: 400 });
  }

  const token = String(tokenValue);
  const authenticated = await verifyTurnstile(token, turnstileSecret);
  if (!authenticated) {
    return new Response("Turnstile verification failed.", { status: 400 });
  }

  const forwardUrl = process.env.PRIVATE_CONNECT_CARD_FORWARD_URL;
  if (!forwardUrl) {
    return new Response("Connect Card destination is not configured.", { status: 503 });
  }

  const entries = Array.from(formData.entries());
  const payload = new URLSearchParams();

  for (const [key, value] of entries) {
    if (value instanceof File || key === "cf-turnstile-response") {
      continue;
    }
    payload.append(key, String(value));
  }

  const forwardResponse = await fetch(forwardUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: payload,
  });

  if (!forwardResponse.ok) {
    const errorText = await forwardResponse.text();
    console.error("Connect Card forward failed", errorText);
    return new Response("Unable to deliver the Connect Card submission.", { status: 502 });
  }

  const summary = buildSummary(entries);
  summary["Submitted At"] = new Date().toISOString();

  const notifyEmails = (process.env.CONNECT_CARD_NOTIFY_EMAILS ?? "")
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);
  const sendgridKey = process.env.CONNECT_CARD_SENDGRID_API_KEY;
  const summaryText = formatSummaryText(summary);

  if (sendgridKey && notifyEmails.length) {
    const fromEmail = process.env.CONNECT_CARD_NOTIFY_FROM?.trim() || site.contact.email;
    try {
      await sendNotificationEmail(notifyEmails, fromEmail, sendgridKey, summaryText);
    } catch (error) {
      console.error("Connect Card notification failed", error);
    }
  }

  const redirectValue = formData.get("redirectUrl");
  const redirectUrl = typeof redirectValue === "string" && redirectValue.trim()
    ? redirectValue
    : THANK_YOU_PATH;

  return Response.redirect(redirectUrl, 303);
};
