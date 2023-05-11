const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3001',
    env: {
      // requestMode: true,
      hideCredentials: true,
      hideCredentialsOptions: {
        body: ['username'],
      }
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
