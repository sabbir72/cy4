
describe("Login and cut plan Test with duplicate", () => {
  it("Handles login to cut plan", () => {
    cy.login();
    cy.wait(2000);

    cy.get("input#navbar-search").type("Buyer PO");
    cy.get('li[aria-selected="true"]').first().click();
    cy.wait(1000);

     // Click Add Buyer Po
    cy.get('button[data-label="Add Buyer PO"]').click();
   
    cy.wait(1000);


    // customer
    cy.get('input[data-fieldname="customer"]').eq(1).click()
    //  cy.get('div[role="option"]').contains("TOM TAILOR").click({force:true});
     cy.get('div[role="option"]').contains("C&A").click({force:true});

    cy.get('input[data-fieldname="season"]')
    .should('be.visible')
    .clear()
    .type('Summer');
  cy.get('div[role="option"]').contains('Summer').click();


cy.get('div[data-fieldname="currency_and_price_list"] div').eq(0).click()

cy.get('input[data-fieldname="currency"]').click().clear().type("USD")
  cy.get('div[role="option"]').contains('USD').click();
  
cy.get('input[data-fieldname="style_no"]').type('222').click()
cy.get('div[role="option"]').contains("222").click()

cy.get('input[data-fieldname="rate"]').clear().type(15).click()

cy.get('input[data-fieldname="quantity"]').clear().click().type(200)

// cy.get('input[data-fieldname="shipment_date"]').scrollIntoView().click()
// Step 1: 
// ...existing code...
function selectDate(day, month, year) {
  cy.get('input[data-fieldname="shipment_date"]')
    .scrollIntoView()
    .click({force:true});
  cy.get('.datepicker--cell-day', { timeout: 10000 }).should('be.visible');
  cy.xpath(`//div[@class="datepicker--cell datepicker--cell-day" and @data-date="${day}" and @data-month="${month}" and @data-year="${year}"]`)
  .eq(3)  
  .should('be.visible')
    .click({force:true});
}
// Usage:
selectDate(28, 6, 2025); // July is month 6 (0-based index)
// ...existing code...



cy.wait(2000)

  // color
  function selectDropdownColor(fieldname, optionText) {
  cy.get(`input[data-fieldname="${fieldname}"]`)
    .clear()
    .type(optionText).click()
    .wait(300); // Wait for suggestions to appear

  cy.get('div[role="option"]')
    .contains(optionText)
    .first()
    .click({force:true});
}
// color
  function selectDropdownSize(fieldname, optionText) {
  cy.get(`input[data-fieldname="${fieldname}"]`)
    .clear()
    .type(optionText).click()
    .wait(300); // Wait for suggestions to appear

  cy.get('div[role="option"]')
    .contains(optionText)
    .first()
    .click({force:true});
}
selectDropdownColor("colors", "Blue");
cy.get('div[data-fieldname="product_populating_section"] div').eq(0).click().scrollIntoView()
selectDropdownColor("colors", "Red");

cy.get('div[data-fieldname="product_populating_section"] div').eq(0).click().scrollIntoView()
selectDropdownSize("sizes", "L");
cy.get('div[data-fieldname="product_populating_section"] div').eq(0).click().scrollIntoView()
selectDropdownSize("sizes", "M");
cy.get('div[data-fieldname="product_populating_section"] div').eq(0).click().scrollIntoView()

cy.get('button[data-fieldname="apply"]').click().wait(1000)

cy.get('input[data-fieldname="taxes_and_charges"]').click().scrollIntoView()
cy.get('div[role="option"]').contains("Bangladesh Tax - INCTL").first().click()



  // Save the form  not fixed 
        cy.get('button[data-label="Save"] span').eq(0).click({force:true});

        cy.printErrors();
      });
  });


  // Print

  