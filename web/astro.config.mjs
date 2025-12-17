import pagefind from "astro-pagefind";
import { defineConfig, passthroughImageService } from "astro/config";

export default defineConfig({
  output: "static",
  integrations: [pagefind()],
  image: {
    service: passthroughImageService(),
  },
  vite: {
    ssr: {
      noExternal: ["@fontsource-variable/inter"],
    },
  },
});
