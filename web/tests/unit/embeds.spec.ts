import { expect, test } from "vitest";
import { trustedGoogleCalendarEmbedUrl } from "../../src/lib/embeds";

test("trustedGoogleCalendarEmbedUrl accepts the public Google Calendar embed", () => {
  expect(
    trustedGoogleCalendarEmbedUrl(
      "https://calendar.google.com/calendar/embed?src=firstspringfieldsda%40gmail.com&ctz=America%2FNew_York",
    ),
  ).toBe(
    "https://calendar.google.com/calendar/embed?src=firstspringfieldsda%40gmail.com&ctz=America%2FNew_York",
  );
});

test("trustedGoogleCalendarEmbedUrl rejects non-calendar iframe sources", () => {
  expect(trustedGoogleCalendarEmbedUrl("javascript:alert(1)")).toBeUndefined();
  expect(trustedGoogleCalendarEmbedUrl("https://example.com/calendar/embed?src=test")).toBeUndefined();
  expect(trustedGoogleCalendarEmbedUrl("https://calendar.google.com/calendar/embed")).toBeUndefined();
});
