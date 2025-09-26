const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  },
  reporter: [['list'], ['html', { outputFolder: 'results', open: 'never' }]],
});