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
    cy.wait(2000);

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
      .click();
    cy.wait(1000);
    // selection

  //  cy.get('select[data-fieldname="rm_cost_as_per"]').select("Manual");
  //  cy.wait(1000)


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

    cy.get(
      "div:nth-child(14)>div:nth-child(1)>div:nth-child(2)>div:nth-child(1)>div:nth-child(1)>div:nth-child(1)>input"
    ).click();
    cy.findByRole("option", { name: "Local" }).click();
    cy.wait(1000);

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
    cy.wait(2000);

    Cypress.Commands.add("addAccRow", () => {
      cy.contains("label", "Accessories Items") 
        .parents(".form-group") 
        .find("button.grid-add-row") 
        .click();
    });

   cy.addAccRow();

    cy.get('div.btn-open-row[data-original-title="Edit"]').eq(1).click();

    cy.wait(1000);

   Cypress.Commands.add("Acce_MaterialRow", (data) => {
     // Fill Material Code (item_code field, 2nd occurrence)
     cy.get('input[data-fieldname="item_code"]')
       .eq(1)
       .click({ force: true })
       .clear()
       .type(data.material_code);

     // Fill Source (Link Field, 2nd occurrence)
     cy.get('input[data-fieldname="source"]')
       .eq(1)
       .click({ force: true })
       .clear()
       .type(data.source)
       .wait(200); // wait a bit for dropdown to appear

     // Wait for dropdown and select source
     cy.get('ul[role="listbox"] li')
       .contains(data.source).first()
       .click();

     // Fill Qty Ratio
     cy.get('input[data-fieldname="qty_ratio"]')
       .eq(1)
       .click({ force: true })
       .clear()
       .type(data.Qty_ratio);

     // Fill User Rate Entry
     cy.get('input[data-fieldname="user_rate_entry"]')
       .eq(1)
       .click({ force: true })
       .clear()
       .type(data.rate);
   });

  

   cy.Acce_MaterialRow({
     material_code: "ACC-456",
     source: "Import",    // বা Local / In House
     Qty_ratio: "1.25",
     rate: "12.50",
   });



    // cy.get('input[data-fieldname="item_code"]')
    //   .first()
    //   .clear()
    //   .type("Accessories-0022");
    // cy.get('div[role="option"]').contains("Accessories Test").first().click();
    // cy.wait(1000);

    // cy.get('div[data-fieldname="source"] input').first().click().type("Local");
    // cy.get('div[role="option"]').contains("Local").click({ force: true });
    // cy.wait(1000);

    // cy.get('div[data-fieldname="quantity_and_rate"] input')
    //   .first()
    //   .scrollIntoView()
    //   .clear()
    //   .type("2.5");
    // cy.wait(1000);

    // cy.get('input[data-fieldname="user_rate_entry"]')
    //   .first()
    //   .click()
    //   .type("4.25");
    // cy.wait(1000);

    // cy.contains("kbd", "Ctrl + Down").click({ force: true });
    cy.wait(1000);
  });
});
