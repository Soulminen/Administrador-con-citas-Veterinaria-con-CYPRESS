const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '5seeh2',
  e2e: {
    "viewportHeight": 1500,
    "viewportWidth": 1200,
    "baseUrl": "http://127.0.0.1:5500",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  },
});
