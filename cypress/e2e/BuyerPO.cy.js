
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

cy.get('input[data-fieldname="shipment_date"]')
  .clear()
  .type(' 28-08-2025').click({force:true}); // 🎯 যদি এ ফরম্যাটে সাপোর্ট করে


// function selectDate(date, month, year) {
//   cy.get('input[data-fieldname="shipment_date"]').click();

//   // মাস ও বছর সঠিক না হলে, পুনরায় next/month ক্লিক করে যায়
//   cy.get('.datepicker--nav-title').then(($title) => {
//     if (!$title.text().includes(year)) {
//       cy.get('.datepicker--nav-action[data-action="next"]').click();
//       cy.wait(300); // wait for DOM update
//       selectDate(date, month, year);
//     } else {
//       // cy.get(`.datepicker--cell-month[data-month="${month}"]`).click();
//       cy.get(`.datepicker--cell-day[data-date="${date}"][data-month="${month}"][data-year="${year}"]`)
//         .should('be.visible')
//         .click();
//     }
//   });
// }


// // Call example:
// selectDate(28,  2025); //

// // date 
// cy.get('input[data-fieldname="shipment_date"]').click();

// //   // Select year and month first (if dropdowns are available)
//   cy.get('.datepicker--nav-title').eq(3).click({force:true}); // open year/month picker
 
//    cy.get('.datepicker--cell-month[data-month="6"]').click();
// //   // Optional: Select year (if required)
//   // cy.contains('.datepicker--nav-title', '2025').click({ force: true });

// //   // Optional: Click on July
//   // cy.contains('.datepicker--cell-month', 'July').click({ force: true });

// //   // Finally: Select 31
//  cy.get('.datepicker--cell-day[data-date="31"][data-month="6"][data-year="2025"]').click();

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

  