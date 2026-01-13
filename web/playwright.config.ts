import { defineConfig, devices } from '@playwright/test';

const HOST = '127.0.0.1';
const PORT = 4321;
const BASE_URL = process.env.PLAYWRIGHT_BASE_URL ?? `http://${HOST}:${PORT}/`;

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  use: {
    baseURL: BASE_URL,
    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox-smoke',
      use: { ...devices['Desktop Firefox'] },
      testMatch: /.*smoke\.spec\.ts/,
    },
    {
      name: 'webkit-smoke',
      use: { ...devices['Desktop Safari'] },
      testMatch: /.*smoke\.spec\.ts/,
    },
    {
      name: 'mobile-smoke',
      use: { ...devices['iPhone 13'] },
      testMatch: /.*smoke\.spec\.ts/,
    },
  ],
  webServer: {
    command: `npm run build && npx wrangler dev --local --ip ${HOST} --port ${PORT} --log-level error`,
    url: BASE_URL,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
});
