import { defineConfig } from '@playwright/test';

const HOST = '127.0.0.1';
const PORT = 4321;
const BASE_URL = `http://${HOST}:${PORT}/`;

export default defineConfig({
  webServer: {
    // Cloudflare adapter doesn't support `astro preview`; run the built worker via Wrangler instead.
    command: `npm run build && npx wrangler dev --local --port ${PORT}`,
    url: BASE_URL,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: BASE_URL,
  },
});