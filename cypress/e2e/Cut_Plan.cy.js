// ===================================================

describe('Cut_plan Test', () => {
  it('Handles Cut_Plan', () => {
    cy.login()
     cy.get("input#navbar-search").type("Cut Plan");
     cy.get('li[aria-selected="true"]').first().click();
    cy.get('button[data-label="Add Cut Plan"]').click();
    cy.get('input[data-fieldname="customer"]').click()
    cy.get('div[role="option"]').contains("Pinaki Group").click();

    cy.get('input[data-fieldname="style_no"]').click().type("eid-01-2025")
    cy.get('div[role="option"]').contains('eid-01-2025').click();
    cy.wait(1000)
    cy.get('input[data-fieldtype="Table MultiSelect"]').click().type("Pinaki Group-00746");
    cy.get('p[title*="Pinaki Group-"]').click()
     cy.wait(1000);
     cy.get('div[data-fieldname="section_break_bruw"]').click()
    // cy.get('input[data-fieldtype="Table MultiSelect"]').type('Pinaki Group-00746').click()
     
    // marker list add button
    cy.contains('button', 'Add Row').eq(0).click()

  
    // list 1

    cy.get('div[data-original-title="Edit"]').click();
    cy.contains('div[role="option"]', "100% BCI Cotton S/J").click()
    
    
    // cy.get('input[data-fieldname="marker"]').click();
    // cy.contains('div[role="option"]', "M1").scrollIntoView().click();
    
    cy.get('input[data-fieldname="marker"]').click();

    cy.contains('div[role="option"]', "M1")
      .scrollIntoView()
      .should("be.visible") // Optional: ensures the element is interactable
      .click();


    cy.printErrors()
  })
})