describe('Login and PreCosting Single Product', () => {
  it('Handles Login and PreCosting Single Product', () => {
    cy.login();
    cy.wait(2000);
    cy.get("#navbar-search").type(" Pre Costing ");
    cy.wait(2000);
    cy.get('li[aria-selected="true"]').first().click();
    cy.wait(2000);


    cy.get('button[data-label="Add Pre Costing"]').click();










    //  inside data
    cy.wait(2000);
    cy.scrollTo("top");
    cy.get('input[data-fieldname="finished_goods_type"]')
      .click()
      .scrollIntoView();
    cy.wait(1000);


    cy.get('div[role="option"]').contains("RMG").click();
    cy.wait(2000);

    cy.get('input[data-fieldname="style"]').click().wait(1000);
    cy.get('div[role="option"]').contains("eid-01-2025").click();
   cy.wait(2000);
    
    // cost
    cy.contains("div.section-head", "Cost Configuration")
      .scrollIntoView()
      .wait(2000);

    cy.contains("div.section-head", "Cost Configuration").click();
    // cy.wait(2000)

    cy.get('input[data-fieldname="currency"]')
      .scrollIntoView()
      .click()
      .clear()
      .type("USD");
    cy.get('p[title="USD"]').click();

    // ----------------------------------------------------------------

    // // add row  -- mathod
    // Cypress.Commands.add("fabricItemCode", (itemCode, index = null) => {
    //   cy.get(
    //     "div:nth-child(5)>div:nth-child(2)>div:nth-child(6)>div:nth-child(1)>div:nth-child(1)>button:nth-child(3)"
    //   ).click({ force: true });
    //   cy.wait(500);

    //   if (index !== null) {
    //     cy.get('div[data-fieldname="item_code"]')
    //       .eq(index)
    //       .click({ force: true })
    //       .type(itemCode);
    //   } else {
    //     cy.get('div[data-fieldname="item_code"]')
    //       .last()
    //       .click({ force: true })
    //       .type(itemCode);
    //   }

    //   cy.get('div[data-fieldname="item_code"] p').first().click();
    // });

    // // ব্যবহার
    // cy.fabricItemCode("fabric-0048", 1); // last field
    // cy.wait(1000);
    // cy.fabricItemCode("fabric-0049", 2); // index 2 field

    // // cy.fabricItemCode("fabric-0050", 3); // index 3 field
    // cy.wait(1000);
    // cy.fabricItemCode("fabric-0003");


    Cypress.Commands.add("addFabricRow", () => {
      cy.get(
        "div:nth-child(5)>div:nth-child(2)>div:nth-child(6)>div:nth-child(1)>div:nth-child(1)>button:nth-child(3)"
      ).click({ force: true });
      cy.wait(500); // ensure DOM updates
    });


    // ===========2nd mathhod========================================

    //   //  delete row
    //   cy.get("div.row-check input").eq(4).check()
    //   cy.get('button[data-action="delete_rows"]').eq(2).click();

    // ================single =====================================

    //  edit icon  fabric -01
    cy.addFabricRow();
    cy.wait(1000);
    cy.get('div.btn-open-row[data-original-title="Edit"]').eq(0).click();
    cy.wait(1000);

    cy.get('input[data-fieldname="item_code"]')
      .eq(0)
      .click()
      .type("fabric-0048")
      .wait(1000);

    cy.get('div[role="option"]').contains("60/40 CVC FLEECE").wait(1000).click();    

    cy.get('input[data-fieldname="dyeing_or_fabric_color"]')
      .eq(0)
      .click({ force: true })
      .type("Black")
      .wait(1000);

    cy.get('ul[role="listbox"] div[role="option"]')
      .contains("Black")
      .click({ force: true });
    cy.wait(1000);

    cy.get('input[data-fieldname="fabric_gsm"]')
      .click()
      .type("GSM-130-0539")
      .wait(1000);

    cy.get('div[role="option"]').contains("GSM-130-0539").click().wait(1000);

    cy.get('input[data-fieldname="finish_dia_width"]')
      .click()
      .type("DIA-00001")
      .wait(1000);
    cy.get('div[role="option"]').contains("DIA-00001").click();

    cy.get(
      "div:nth-child(14)>div:nth-child(1)>div:nth-child(2)>div:nth-child(1)>div:nth-child(1)>div:nth-child(1)>input:nth-child(1)"
    ).click()
    
    cy.findByRole("option", {name:"Local"}).click().wait(1000);  

    cy.get('div[data-fieldname="quantity_and_rate"] input')
      .eq(0)
      .scrollIntoView();

    cy.get('div[data-fieldname="quantity_and_rate"] input')
      .eq(0)
      .click({ force: true })
      .clear()
      .type("1.5");
    cy.wait(1000);

    cy.get('input[data-fieldname="user_rate_entry"]')
      .eq(0)
      .click()
      .type("5.25")
      .wait(1000);

    cy.contains("kbd", "Ctrl + Down").click({ force: true });
    cy.wait(1000);

    cy.get('input[data-fieldname="gmt_wastage"]')
      .eq(0)
      .click()
      .clear()
      .type("0.5")
      .wait(1000);



    //  edit icon  fabric -02


  //  cy.addFabricRow();
  //    cy.wait(1000);
  //    cy.get('div.btn-open-row[data-original-title="Edit"]').eq(1).click()
  //    cy.wait(1000);
  //    cy.get('input[data-fieldname="item_code"]').eq(1).clear().click().type("fabric-0049").wait(1000).scrollIntoView();
  //    cy.get('div[role="option"]').contains("60% CTN 40% Poly with ELASTANE").click();

  //   cy.get('input[data-fieldname="dyeing_or_fabric_color"]').eq(1).click({ force: true }).type('Blue').wait(500);
  //   cy.get('ul[role="listbox"] div[role="option"]').contains("Blue").click({ force: true });  

  //  cy.get('input[data-fieldname="fabric_gsm"]').eq(1).click().type("GSM-200-0540").wait(1000);
  //   cy.get('div[role="option"]').contains("GSM-200-0540").click();    

    

  // cy.get('input[data-fieldname="finish_dia_width"]').eq(1)
  //     .click()
  //     .type("DIA-00001")
  //     .wait(1000);    
  //   cy.get('div[role="option"]').contains("DIA-00001").click({force: true}); 


  //   cy.get(
  //     "div:nth-child(14)>div:nth-child(1)>div:nth-child(2)>div:nth-child(1)>div:nth-child(1)>div:nth-child(1)>input:nth-child(1)"
  //   ).click();    
  //   cy.findByRole("option", { name: "Local" }).click().wait(1000);

  //   cy.get('div[data-fieldname="quantity_and_rate"] input')
  //     .eq(1)  
  //     .scrollIntoView()
  //     .click({ force: true })
  //     .clear()
  //     .type("0.5");



  //   cy.get('input[data-fieldname="user_rate_entry"]')
  //     .eq(1)
  //     .click()
  //     .type("3.25")
  //     .wait(1000);

  // ===================== Accessories =========================

  cy.get('div[data-fieldname="accessories_items"] button').eq(2).click({ force: true });
  cy.wait(1000);    

  cy.get('div.btn-open-row[data-original-title="Edit"]').eq(0).click();
  cy.wait(1000);    


  cy.get('input[data-fieldname="item_code"]')
    .eq(0)
    .click()
    .clear()
    .type("Accessories-0022")
    .wait(1000);

  cy.get('div[role="option"]').contains("Accessories Test").first().click();
  cy.wait(1000);    

  cy.get('div[data-fieldname="source"] input')
    .eq(0)
    .click()
    .clear()
    .type("Local")
    .wait(1000);

  cy.get('div[role="option"]').contains("Local").click();
  cy.wait(1000);

  cy.get('div[data-fieldname="quantity_and_rate"] input')
    .eq(0)
    .scrollIntoView()

    .click({ force: true })
    .clear()   
    .type("2.5")
    .wait(1000);

  cy.get('input[data-fieldname="user_rate_entry"]')
    .eq(0)  

    .click()
    .type("4.25") 
    .wait(1000);

  cy.contains("kbd", "Ctrl + Down").click({ force: true });
  cy.wait(1000);        



    // cy.printErrors();
  })

})
