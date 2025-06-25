// ===================================================

describe('Login and Style Test with Soft Error Notes', () => {
  it('Handles login failure softly and proceeds', () => {
    const uniqueName = "style_" + Math.random().toString(36).substring(2, 4) + "_" + Date.now()
    cy.log('🔧 Generated Unique Name:', uniqueName)

    cy.login()

    cy.wait(2000)

    // ✅ Check login success
    cy.then(() => {
      const loginOk = cy.softCheck('input#navbar-search', "Login Success Check")

      if (loginOk) {
        cy.get('input#navbar-search').type("Style")
        cy.get('li[aria-selected="true"]').first().click()

      }
    })

    cy.printErrors()
  })
})
