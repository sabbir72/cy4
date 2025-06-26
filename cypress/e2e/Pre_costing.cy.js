describe('Login and PreCosting Single Product', () => {
  it('Handles Login and PreCosting Single Product', () => {
  
     cy.login()
     cy.wait(2000)
      cy.get("input#navbar-search").type("Pre Costing");
     cy.get('li[aria-selected="true"]').first().click();
     cy.get('button[data-label="Add Pre Costing"]').click(); 

    //  inside data
// cy.wait(2000)
    cy.get('input[data-fieldname="finished_goods_type"]').scrollIntoView().wait(300).click()
    cy.get('div[role="option"]').contains("RMG").click();

    // cy.wait(2000)
    cy.get('input[data-fieldname="style"]').scrollIntoView().wait(300).click()
    cy.get('div[role="option"]').contains("eid-01-2025").click();
    
    //    cy.wait(2000)
    // cost
     cy.contains('div.section-head', 'Cost Configuration').scrollIntoView().wait(300);

    cy.contains('div.section-head', 'Cost Configuration').scrollIntoView().wait(300).click();
        // cy.wait(2000)
    cy.get('input[data-fieldname="currency"]').click().clear().type('USD')
    cy.get('p[title="USD"]').click()


   cy.get('div[data-fieldname="calculation_section"] span').eq(3).click();


    cy.printErrors()
  })

})
