describe("Login and PreCosting Single Product", () => {
  it("Handles Login and PreCosting Single Product", () => {
    // Login and Navigation
    cy.login();
    cy.wait(2000);
    cy.get("#navbar-search").type("Pre Costing");
    cy.wait(2000);
    cy.get('li[aria-selected="true"]').first().click();
    cy.wait(2000);

    // Click Add Pre Costing
    cy.get('button[data-label="Add Pre Costing"]').click();
    cy.wait(1000);

    // Select Finished Goods Type
    cy.scrollTo("top");
    cy.get('input[data-fieldname="finished_goods_type"]').click();
    cy.get('div[role="option"]').contains("RMG").click();
    cy.wait(1000);

    // Select Style
    cy.get('input[data-fieldname="style"]')
      .click()
      .type("Printed Photo T-Shirt")
      .wait(1000);
    cy.get('div[role="option"]').contains("Printed Photo T-Shirt").click();
    cy.wait(1000);

    // Cost Configuration Section
    cy.contains("div.section-head", "Cost Configuration")
      .scrollIntoView()
      .click({force:true});
    cy.wait(1000);
    // selection

  //     cy.get('select[data-fieldname="rm_cost_as_per"]').click()
  // .should('be.visible') // ensure it’s visible
  // .select('Manual'); // or 'Valuation Rate', etc.


     cy.wait(1000)

    // Set Currency
    // cy.get('input[data-fieldname="currency"]').click().clear().type("USD");
    // cy.get('p[title="USD"]').click();
    // cy.wait(1000);

    // Custom Command: Add Fabric Row
    Cypress.Commands.add("addFabricRow", () => {
      cy.contains("label", "Fabric Items") // টেবিলের লেবেল খুঁজে পাবে
        .parents(".form-group") // পুরো গ্রুপটা ধরবে
        .find("button.grid-add-row") // সেই গ্রুপের মধ্যে add row
        .click();
    });

    // Add and Edit Fabric Row
    cy.addFabricRow();
    cy.wait(1000);

    cy.get('div.btn-open-row[data-original-title="Edit"]').first().click();
    cy.wait(1000);

    cy.get('input[data-fieldname="item_code"]')
      .first()
      .click()
      .type("fabric-0048");
    cy.get('div[role="option"]').contains("60/40 CVC FLEECE").click();
    cy.wait(1000);

    cy.get('input[data-fieldname="dyeing_or_fabric_color"]')
      .first()
      .click()
      .type("Black");
    cy.get('ul[role="listbox"] div[role="option"]').contains("Black").click();
    cy.wait(1000);

    cy.get('input[data-fieldname="fabric_gsm"]').click().type("GSM-130-0539");
    cy.get('div[role="option"]').contains("GSM-130-0539").click();
    cy.wait(1000);

    cy.get('input[data-fieldname="finish_dia_width"]')
      .click()
      .type("DIA-00001");
    cy.get('div[role="option"]').contains("DIA-00001").click();
    cy.wait(1000);

     cy.get('input[data-fieldname="source"]').eq(0).click({force:true}).type("local")
     cy.get('div[role="option"]').contains("Local").click();

    cy.get('div[data-fieldname="quantity_and_rate"] input')
      .first()
      .scrollIntoView()
      .clear()
      .type("1.5");
    cy.wait(1000);

    cy.get('input[data-fieldname="user_rate_entry"]')
      .first()
      .click()
      .type("5.25");
    cy.wait(1000);

    cy.contains("kbd", "Ctrl + Down").click({ force: true });
    cy.wait(1000);

    cy.get('input[data-fieldname="gmt_wastage"]').first().clear().type("0.5");
    cy.wait(1000);

    // ================= Accessories Section ====================
    cy.contains("label", "Accessories Items").scrollIntoView();
    cy.wait(1000);

    Cypress.Commands.add("addAccRow", () => {
      cy.contains("label", "Accessories Items")
        .parents(".form-group")
        .find("button.grid-add-row")
        .click();
    });

    cy.addAccRow();

    cy.get('div.btn-open-row[data-original-title="Edit"]').eq(1).click();

    cy.wait(1000);

       cy.get('input[data-fieldname="item_code"]').eq(1).click({ force: true }).clear().type("Accessories-0003")
     
    cy.get('div[data-fieldname="source"] input').eq(1).click()
     cy.get('div[role="option"]').contains("Local").click({force:true});

    // consumtion
    cy.get('input[data-fieldname="qty_ratio"]').eq(1).click().clear().type(0.554)

    cy.get('input[data-fieldname="user_rate_entry"]').eq(1).click().clear().type(1.2)
    cy.get('button.grid-collapse-row').eq(1).click({ force: true });

// Accesories template

// cy.get('input[data-fieldname="accessories_template"]').click().type("TOM TAILOR-00915")
// cy.get('div[role="option"] p[title="TOM TAILOR-00915"]').click()




// pre_costing_data_tab
cy.get('a#pre-costing-pre_costing_data_tab-tab').click().wait(500);



cy.get('input[data-fieldname="min_ord_qty"]').click().type(2000);

cy.get('input[data-fieldname="delivery_terms"]').click({force:true}).type("FOB")
cy.get('div[role="option"]').contains("FOB").click({force:true});

cy.get('div[data-fieldname="sales_price"] input').clear().click().type(2.00);

cy.get('input[data-fieldname="payment_terms"]').click().type("120 Days")
cy.get('div[role="option"]').contains("120 Days").click({force:true});


cy.get('input[data-fieldname="shipping_mode"]').click().type("Sea")
cy.get('div[role="option"]').contains("Sea").click({force:true});


   // Save the form  not fixed 
        cy.get('button[data-label="Save"] span').eq(0).click({force:true});
  });
});
