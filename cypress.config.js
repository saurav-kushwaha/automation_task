const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 250000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    // set global environment variables
    "url":"https://ndl.veris.in/"
  },
});
