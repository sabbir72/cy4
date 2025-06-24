// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

let errorLog = []

Cypress.Commands.add("softCheck", (selector, msg) => {
  const el = Cypress.$(selector)
  if (el.length === 0) {
    const note = `❌ ${msg} - Not Found: ${selector}`
    errorLog.push(note)
    Cypress.log({ name: "softCheck", message: note })
    cy.screenshot(msg.replace(/\s+/g, "_").toLowerCase())
    cy.task?.('writeErrorLog', note) // Optional: write to file if task exists
    return false
  }
  return true
})

Cypress.Commands.add("printErrors", () => {
  if (errorLog.length > 0) {
    cy.log("⚠️ Soft errors found:")
    errorLog.forEach(e => cy.log(e))
  } else {
    cy.log("✅ No soft errors found.")
  }
})


Cypress.Commands.add("login", (username = "Administrator", password = "admin") => {
  cy.visit("https://stagev15.inctl.net/");

    cy.get("input#login_email").type(username);

    cy.get("input#login_password").type(password);

    cy.contains("button", "Login").click();
})