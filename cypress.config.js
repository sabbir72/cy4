// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here

      
//     },
//   },
// });

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    reporter: "mocha-junit-reporter",
  reporterOptions: {
    mochaFile: "cypress/reports/junit/test-results.xml"
  },
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: true
    }
  }
});
