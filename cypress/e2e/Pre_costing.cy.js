describe('Login and PreCosting Single Product', () => {
  it('Handles Login and PreCosting Single Product', () => {
    cy.login();
    cy.wait(2000);
    cy.get("#navbar-search").type("Pre Costing");
    cy.get('li[aria-selected="true"]').first().click();
    cy.get('button[data-label="Add Pre Costing"]').click();

    //  inside data
    // cy.wait(2000)
    cy.scrollTo("top");
    cy.get('input[data-fieldname="finished_goods_type"]').click();
    cy.get('div[role="option"]').contains("RMG").click();

    // cy.wait(2000)
    cy.get('input[data-fieldname="style"]').click();
    cy.get('div[role="option"]').contains("eid-01-2025").click();
    cy.scrollTo(0, 500);
    //    cy.wait(2000)
    // cost
    cy.contains("div.section-head", "Cost Configuration")
      .scrollIntoView()
      .wait(2000);

    cy.contains("div.section-head", "Cost Configuration").click();
    // cy.wait(2000)
    cy.get('input[data-fieldname="currency"]').scrollIntoView().click().clear().type("USD");
    cy.get('p[title="USD"]').click();

    // cy.get('div[data-fieldname="add_wastage_in_quantity"]').check({ force: true });
    // cy.get('div[data-fieldname="item_level_operation"]').check({ force: true });
    cy.findByRole("checkbox", { name: "Add Wastage in Quantity" }).click();
    cy.findByRole("checkbox", { name: "Item Level Operation" }).click();

    // add fabric

    cy.get("button.grid-add-row").eq(0).click();

     
    // cy.contains("span.label-area", "Item Level Operation").scrollIntoView().click();
    // cy.printErrors();
  })

})
