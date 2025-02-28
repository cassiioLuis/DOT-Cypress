const { defineConfig } = require("cypress");

module.exports = defineConfig({

  viewportWidth: 1366,
  viewportHeight: 768,

  defaultCommandTimeout: 10000,
  
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    charts: true,
    reportPageTitle: 'DOT - Prova QA',
    embeddedScreenshots: true,
    inlineAssets: true,
  },

  e2e: {
    experimentalStudio: true,
    experimentalRunAllSpecs: true,

    baseUrl: 'https://www.amazon.com.br/',

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },

  retries: {
    runMode: 2,
    openMode:0
  }

});
