import type { APIRoute } from "astro";

// Force this endpoint to be emitted as a static file in dist/robots.txt
export const prerender = true;

export const GET: APIRoute = ({ site: astroSite, url }) => {
  // Prefer Astro config `site` when present, otherwise use the request origin
  // (important for local LHCI ports like http://localhost:51310)
  const origin = (astroSite?.toString() ?? url.origin).replace(/\/$/, "");

  const sitemapUrl = new URL("/sitemap-index.xml", origin).toString();

  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${sitemapUrl}`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
