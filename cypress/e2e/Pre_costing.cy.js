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
    // cy.findByRole("checkbox", { name: "Add Wastage in Quantity" }).click();
    // cy.findByRole("checkbox", { name: "Item Level Operation" }).click();

    // add row
    cy.get("div:nth-child(5)>div:nth-child(2)>div:nth-child(6)>div:nth-child(1)>div:nth-child(1)>button:nth-child(3)").click({force: true})

    cy.get('div.btn-open-row[data-original-title="Edit"]').click();
  
    //  edit icon
  

  

      cy.get('input[aria-expanded="true"]').click()
     
      cy.get("div.form-area p").eq(2).click()


     
      cy.get('div[aria-modal="true"] input').type("fabric-0004");
      cy.findByRole("button", { name: "Search" }).click();
      cy.findByRole("link", { name: "Fabric-0004" }).click();



     
    // cy.contains("span.label-area", "Item Level Operation").scrollIntoView().click();
    // cy.printErrors();
  })

})
