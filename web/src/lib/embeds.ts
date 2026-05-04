const GOOGLE_CALENDAR_EMBED_HOST = "calendar.google.com";
const GOOGLE_CALENDAR_EMBED_PATH = "/calendar/embed";

export function trustedGoogleCalendarEmbedUrl(embedUrl?: string | null) {
  const rawUrl = embedUrl?.trim();
  if (!rawUrl) return undefined;

  try {
    const url = new URL(rawUrl);
    const hasCalendarSource = (url.searchParams.get("src") ?? "").trim().length > 0;

    if (
      url.protocol !== "https:" ||
      url.hostname !== GOOGLE_CALENDAR_EMBED_HOST ||
      url.pathname !== GOOGLE_CALENDAR_EMBED_PATH ||
      !hasCalendarSource
    ) {
      return undefined;
    }

    return url.toString();
  } catch {
    return undefined;
  }
}
