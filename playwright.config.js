/** @type {import('@playwright/test').PlaywrightTestConfig} */
module.exports = {
  testDir: 'tests',
  testMatch: '**/*.spec.js',
  timeout: 30000,
  retries: process.env.CI ? 2 : 0,
use: {
  headless: true,
  baseURL: 'https://black-desert-06a3c0903.2.azurestaticapps.net',
  ignoreHTTPSErrors: true,
  screenshot: 'only-on-failure',
  trace: 'on-first-retry'
}
,
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } }
  ],
  reporter: [['list'], ['html', { open: 'never' }]]
};
