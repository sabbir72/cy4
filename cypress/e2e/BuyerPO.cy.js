
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
     cy.get('div[role="option"]').contains("TOM TAILOR").click();

    cy.get('input[data-fieldname="season"]')
    .should('be.visible')
    .clear()
    .type('Summer');
  cy.get('div[role="option"]').contains('Summer').click();


cy.get('div[data-fieldname="currency_and_price_list"] div').eq(0).click()

cy.get('input[data-fieldname="currency"]').click().clear().type("USD")
  cy.get('div[role="option"]').contains('USD').click();
  
cy.get('input[data-fieldname="style_no"]').type('Printed Photo T-Shirt').click()
cy.get('div[role="option"]').contains("Printed Photo T-Shirt").click()

cy.get('input[data-fieldname="quantity"]').clear().click().type(200)


// date 
cy.get('input[data-fieldname="shipment_date"]').click();

  // Select year and month first (if dropdowns are available)
  cy.get('.datepicker--nav-title').eq(2).click({force:true}); // open year/month picker

  // Optional: Select year (if required)
  cy.contains('.datepicker--nav-title', '2025').click({ force: true });

  // Optional: Click on July
  cy.contains('.datepicker--cell-month', 'July').click({ force: true });

  // Finally: Select 31
  cy.get('.datepicker--cell-day')
    .not('.-other-month-')     // only current month dates
    .contains(/^31$/)
    .click();

//     cy.get('button[title="Clear all filters"]').click();

//     // ✅ First row checkbox check
//     cy.get(".list-row-container")
//       .first()
//       .find("input.list-row-checkbox")
//       .check({ force: true });

//     // ✅ Get title and use it inside .then()
//     cy.get('a[data-doctype="Cut Plan"]')
//       .first()
//       .invoke("attr", "title")
//       .then((title) => {
//         cy.log("Title value:", title);

//         // ✅ Use title inside this block
//         cy.get('input[data-fieldname="name"]').clear().type(title);
//         cy.get(`a[data-name="${title}"]`).click();

//         cy.wait(1000);
//         cy.get('button[aria-label="Menu"]').eq(2).click();
//         cy.get('span[data-label="Duplicate"] span').eq(1).click();

        cy.printErrors();
      });
  });


  // Print

  