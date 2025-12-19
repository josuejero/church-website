import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import icon from "astro-icon";
import pagefind from "astro-pagefind";
import { defineConfig } from "astro/config";

const site = process.env.PUBLIC_SITE_URL;

export default defineConfig({
  // Used for canonical URLs + sitemap/robots generation.
  // In Cloudflare Pages: set PUBLIC_SITE_URL to your production domain (e.g. https://example.org)
  site: site ?? "http://localhost:4321",
  trailingSlash: "always",

  integrations: [
    mdx(),
    icon(),
    compress(),
    pagefind(),
    sitemap({
      // Internal site search is not a page you want indexed.
      filter: (page) => !page.endsWith("/search/"),
    }),
  ],

  output: "static",
  adapter: cloudflare(),
  vite: {
    ssr: {
      noExternal: ["@fontsource-variable/inter"],
    },
  },
});