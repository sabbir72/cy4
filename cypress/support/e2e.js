// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-xpath';
require('cypress-xpath');
import "@testing-library/cypress/add-commands";
require("cypress-xpath");


Cypress.on("uncaught:exception", (err, runnable) => {
  if (err.message.includes("erpnext.bom.update_cost is not a function")) {
    // এই error হলে test fail করবে না
    return false;
  }
});
  