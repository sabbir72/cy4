// ===================================================

describe("Login and Buying Agent Soft Error Notes", () => {
  it("Login and Buying Agent Soft Error Notes", () => {
    // const uniqueName =
    //   "style_" + Math.random().toString(36).substring(2, 4) + "_" + Date.now();
    // cy.log("🔧 Generated Unique Name:", uniqueName);

    cy.login();
    cy.wait(2000);

    cy.get("input#navbar-search").type("Buying Agent");
    cy.get('li[aria-selected="true"]').first().click();
    cy.get('button[data-label="Add Buying Agent"]').click();
  

    cy.printErrors();
  });
});
