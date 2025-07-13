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
    cy.get('input[data-fieldname="finished_goods_type"]').click().wait(1000);
    cy.get('div[role="option"]').contains("RMG").click();

    cy.wait(2000)
    cy.get('input[data-fieldname="style"]').click().wait(1000);
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

    
    // ----------------------------------------------------------------

    // add row  -- mathod
    Cypress.Commands.add("fabricItemCode", (itemCode) => {
      cy.get(
        "div:nth-child(5)>div:nth-child(2)>div:nth-child(6)>div:nth-child(1)>div:nth-child(1)>button:nth-child(3)"
      ).click({ force: true });
      cy.wait(500);

      cy.get('div[data-fieldname="item_code"]')
        .eq(1)
        .click({ force: true })
        .type(itemCode);
      cy.get('div[data-fieldname="item_code"] p').first().click();
    });
    cy.fabricItemCode("fabric-0004");
    cy.wait(1000);
    cy.fabricItemCode("fabric-0003");

    // ===========2nd mathhod========================================
    

//   //  delete row
//   cy.get("div.row-check input").eq(4).check()
//   cy.get('button[data-action="delete_rows"]').eq(2).click();


    // ================single =====================================
    

    //  edit icon  fabric -01
    cy.get('div.btn-open-row[data-original-title="Edit"]').eq(0).click().scrollIntoView();
 
    
  cy.get('input[data-fieldname="dyeing_or_fabric_color"]')
  .should('be.visible')
  .click({ force: true })  
  .type('Black')           
  .wait(500);              


  cy.get('ul[role="listbox"] div[role="option"]')
   .first()
  . click({ force: true })

    cy.get('input[data-fieldname="fabric_gsm"]').click().type("GSM-130-0539").wait(1000);
    cy.get('div[role="option"]').contains("GSM-130-0539").click();  


    cy.get('input[data-fieldname="finish_dia_width"]').click().type("DIA-00001").wait(1000);  
    cy.get('div[role="option"]').contains("DIA-00001").click();
  
    
    cy.get("div:nth-child(14)>div:nth-child(1)>div:nth-child(2)>div:nth-child(1)>div:nth-child(1)>div:nth-child(1)>input:nth-child(1)").click()
    cy.findByRole("option",{"name":"Local"}).click()

  cy.get('div[data-fieldname="quantity_and_rate"] input').eq(0).scrollIntoView()
  cy.get('div[data-fieldname="quantity_and_rate"] input').eq(0).click({ force: true }).clear().type('1.5');
  cy.wait(1000);
  cy.get('div[data-fieldname="user_rate_entry"] input').eq(1).click().type("5.25").wait(1000);
   cy.wait(2000);


   cy.contains('kbd', 'Ctrl + Down').click({ force: true });




   //  edit icon  fabric -02
   cy.get('div.btn-open-row[data-original-title="Edit"]').eq(1).click().scrollIntoView();
   cy.get('input[aria-expanded="true"]').type("fabric-0003").wait(1000);
   cy.get('div[role="option"]').contains("Single Jersey 100% Cotton Fabric").click();

    
  cy.get('input[data-fieldname="dyeing_or_fabric_color"]').eq(0).click({ force: true }).type('Black').wait(500);              


  cy.get('ul[role="listbox"] div[role="option"]')
   .first()
  . click({ force: true })

    cy.get('input[data-fieldname="fabric_gsm"]').click().type("GSM-130-0539").wait(1000);
    cy.get('div[role="option"]').contains("GSM-130-0539").click();  

    // cy.get('div[role="option"]').contains("Black")
    // cy.get('div[role="option"]').contains("Black").should("be.visible");
    // cy.get('div[role="option"]').contains("Black").click();  
    // cy.get('input[aria-expanded="true"]').click()
    // cy.get("div.form-area p").eq(2).click()
    // cy.get('div[aria-modal="true"] input').type("fabric-0004");
    // cy.findByRole("button", { name: "Search" }).click();
    // cy.findByRole("link", { name: "Fabric-0004" }).click();

    // cy.contains("span.label-area", "Item Level Operation").scrollIntoView().click();
    // cy.printErrors();
  })

})
