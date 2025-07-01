// ===================================================

describe("Login and Customer and buyer", () => {
  it("Login and Customer and buyer", () => {

    cy.login();

    cy.wait(2000);


    // ✅ Check login success
    cy.then(() => {
      const loginOk = cy.softCheck(
        "input#navbar-search",
        "Login Success Check"
      );

      if (loginOk) {
        const prefix = "BDGarm";
        const uniquePart = Math.random()
          .toString(36)
          .substring(2, 7)
          .toUpperCase();
        const uniqueCompanyName = prefix + "_" + uniquePart;

        cy.log("🧵 Generated Garments Company Name:", uniqueCompanyName);
        cy.get("input#navbar-search").type("Customer/Buyer");
        cy.get('li[aria-selected="true"]').first().click();
        cy.get('button[data-label="Add Customer/Buyer"]').click();
        // Full open  in the form
        cy.contains("button", "Edit Full Form").click();

        cy.get("input.bold").eq(0).click().type(uniqueCompanyName);
       
        const countries = [
          "Bangladesh",
          "India",
          "Germany",
          "Italy",
          "Vietnam",
          "China",
          "Turkey",
        ];

        const randomCountry =
          countries[Math.floor(Math.random() * countries.length)];

        cy.get('input[data-fieldname="country"]')
          .eq(0) 
          .clear() 
          .type(randomCountry);
          cy.get('div[role="option"] p').eq(0).click();
          

// OTHER FIELDS
          cy.get('a[data-fieldname="portal_users_tab"]').click();
          

          cy.contains('button', 'Add Row').eq(0).click();
        
          
         
          cy.get('div.row-index').eq(1).click()
          
// cy.get('div[data-fieldname="user"] ul')
//           .eq(0)
//           .find('li[role="option"]')
//           .contains('Administrator')
//           .click();
          

          
        

      }
    });

    cy.printErrors();
  });
});
