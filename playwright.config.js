/** @type {import('@playwright/test').PlaywrightTestConfig} */
module.exports = {
  testDir: 'tests',
  testMatch: '**/*.spec.js',
  timeout: 30000,
  retries: process.env.CI ? 2 : 0,
  use: {
    headless: true,
    baseURL: process.env.BASE_URL || 'https://example.com',
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
    actionTimeout: 10000
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } }
  ],
  reporter: [['list'], ['html', { open: 'never' }]]
};
