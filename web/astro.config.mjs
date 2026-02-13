import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

const site = process.env.PUBLIC_SITE_URL;

async function tryLoadPagefindIntegration() {
  try {
    const { default: pagefind } = await import("astro-pagefind");
    return pagefind();
  } catch (error) {
    if (error?.code === "ERR_UNSUPPORTED_NODE_MODULES_TYPE_STRIPPING") {
      console.warn(
        "[astro-pagefind] Skipping the search integration because Node cannot strip TypeScript in node_modules. " +
          "Run Node 24 or lower to keep search enabled."
      );
      return null;
    }
    throw error;
  }
}

const pagefindIntegration = await tryLoadPagefindIntegration();

export default defineConfig({
  // Used for canonical URLs + sitemap/robots generation.
  // In Cloudflare Pages: set PUBLIC_SITE_URL to your production domain (e.g. https://example.org)
  site: site ?? "http://localhost:4321",
  trailingSlash: "never",

  integrations: [
    mdx(),
    icon(),
    compress(),
    ...(pagefindIntegration ? [pagefindIntegration] : []),
    sitemap({
      // Internal site search is not a page you want indexed.
      filter: (page) => !page.endsWith("/search"),
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
