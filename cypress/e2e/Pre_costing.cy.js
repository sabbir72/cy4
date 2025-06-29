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
    // cy.get('input[data-fieldname="style"]').click();
    // cy.get('div[role="option"]').contains("eid-01-2025").click();
    // cy.scrollTo(0, 500);
    // //    cy.wait(2000)
    // // cost
    // cy.contains("div.section-head", "Cost Configuration")
    //   .scrollIntoView()
    //   .wait(2000);

    // cy.contains("div.section-head", "Cost Configuration").click();
    // // cy.wait(2000)
    // cy.get('input[data-fieldname="currency"]').scrollIntoView().click().clear().type("USD");
    // cy.get('p[title="USD"]').click();

    // =================no need now====================
    // cy.get('div[data-fieldname="add_wastage_in_quantity"]').check({ force: true });
    // cy.get('div[data-fieldname="item_level_operation"]').check({ force: true });
    // cy.findByRole("checkbox", { name: "Add Wastage in Quantity" }).click();
    // cy.findByRole("checkbox", { name: "Item Level Operation" }).click();
    // ----------------------------------------------------------------

    // add row  -- mathod
    // Cypress.Commands.add("fabricItemCode", (itemCode) => {
    //   cy.get(
    //     "div:nth-child(5)>div:nth-child(2)>div:nth-child(6)>div:nth-child(1)>div:nth-child(1)>button:nth-child(3)"
    //   ).click({ force: true });
    //   cy.wait(500);

    //   cy.get('div[data-fieldname="item_code"]')
    //     .eq(1)
    //     .click({ force: true })
    //     .type(itemCode);
    //   cy.get('div[data-fieldname="item_code"] p').first().click();
    // });
    // cy.fabricItemCode("fabric-0004");
    // cy.fabricItemCode("fabric-0003");

    // ===========2nd mathhod========================================
    Cypress.Commands.add("Add_Row_Fabric", () => {
      // নির্দিষ্ট item_code বোতামে ক্লিক
      cy.get(
        "div:nth-child(5) > div:nth-child(2) > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > button:nth-child(3)"
      ).click({ force: true });
    });

    // addd one
    cy.contains("label", "Fabric Items").scrollIntoView();
   cy.Add_Row_Fabric()
   cy.get('div[data-fieldname="item_code"]').eq(1).click({ force: true }).type('fabric').wait(100)
   cy.get('ul[role="listbox"]:not([hidden]) div[role="option"]').first().click();
   cy.wait(1000)
    //  source
   cy.get('input[data-fieldname="source"]').type('Local').click().wait(200)
   cy.get('p[title="Local"]').first().click()
  //  cy.get('ul[role="listbox"]:not([hidden]) p[title="Local"]').click();
  // comsume
  cy.get('input[placeholder="Consumption"]').eq(0).click({force:true}).type(2.25).wait(100)
  // user rate
  cy.get('input[data-fieldname="user_rate_entry"]').type(5.25).click()
   cy.wait(2000)

   // add two

cy.contains("label", "Fabric Items").scrollIntoView();
cy.Add_Row_Fabric()
   cy.get('div[data-fieldname="item_code"]').eq(3).click({ force: true }).type('Single Jersey 100% Cotton Fabric').wait(100)
   cy.get('ul[role="listbox"]:not([hidden]) div[role="option"]').first().click();
   
     //  source
    //  cy.get('input[data-fieldname="source"]').eq(3).click({force:true}).type('Local').wait(200)
    cy.get('input[data-fieldname="source"]').eq(3).should('be.visible').click({ force: true }).type('Local');
     cy.get('p[title="Local"]').first().click()
    //  cy.get('ul[role="listbox"]:not([hidden]) p[title="Local"]').click();
    // comsume
    cy.get('input[placeholder="Consumption"]').eq(3).click({force: true }).type(2.25).wait(100)
    // user rate
    cy.get('input[data-fieldname="user_rate_entry"]').type(5.25).click()
   cy.wait(2000);


//    // add three
//  cy.contains("label", "Fabric Items").scrollIntoView();
// cy.Add_Row_Fabric()
// cy.get('div[data-fieldname="item_code"]').eq(5).click({ force: true }).type('Fabric Material1').wait(100)
// cy.get('ul[role="listbox"]:not([hidden]) div[role="option"]').first().click();
// cy.wait(2000);

//    // add Four
//    cy.contains("label", "Fabric Items").scrollIntoView();
//    cy.Add_Row_Fabric()
//    cy.get('div[data-fieldname="item_code"]').eq(7).click({ force: true }).type('100% BIO Cotton Mesh SA').wait(100)
//    cy.get('ul[role="listbox"]:not([hidden]) div[role="option"] p').contains("100% BIO Cotton Mesh SA").click();
//    cy.wait(2000)


//   //  delete row
//   cy.get("div.row-check input").eq(4).check()
//   cy.get('button[data-action="delete_rows"]').eq(2).click();


    // ================single =====================================
    

    //  edit icon
    // cy.get('div.btn-open-row[data-original-title="Edit"]').click();
    // cy.get('input[aria-expanded="true"]').click()
    // cy.get("div.form-area p").eq(2).click()
    // cy.get('div[aria-modal="true"] input').type("fabric-0004");
    // cy.findByRole("button", { name: "Search" }).click();
    // cy.findByRole("link", { name: "Fabric-0004" }).click();

    // cy.contains("span.label-area", "Item Level Operation").scrollIntoView().click();
    // cy.printErrors();
  })

})
