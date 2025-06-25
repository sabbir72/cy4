// ===================================================

describe('Cut_plan Test', () => {
  it('Handles Cut_Plan', () => {
    cy.login()
     cy.get("input#navbar-search").type("Cut Plan");
     cy.get('li[aria-selected="true"]').first().click();
    cy.get('button[data-label="Add Cut Plan"]').click();
    cy.get('input[data-fieldname="customer"]').click()
    cy.get('div[role="option"]').contains('JACK & JONES').click();

    cy.get('input[data-fieldname="style_no"]').click().type("eid-01-2025")
    cy.get('div[role="option"]').contains('eid-01-2025').click();
    cy.wait(1000)

    cy.get('input[data-fieldtype="Table MultiSelect"]').click().type('Pinaki Group-00746')
    cy.wait(1000);

  

  

    cy.printErrors()
  })
})