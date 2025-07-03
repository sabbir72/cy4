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
        
          
         
          cy.get("div.row-index").eq(1).click()

          cy.get('input[data-fieldname="user"]').eq(0).clear().type("Administrator").click();   
          
          cy.contains('button', 'Insert Below').click();
          
          cy.get("div.freeze-message-container").click();

          // DELETE THE  ROW
          cy.get('input.grid-row-check').eq(2).click();
          cy.get('button[data-action="delete_rows"]').eq(0).click();
          // cy.get('button[data-label="Yes"]').click();


          // aDD A NEW ROW
          
          cy.get("div:nth-child(2)>div:nth-child(1)>div:nth-child(1)>form:nth-child(1)>div:nth-child(1)>div:nth-child(2)>div:nth-child(6)>div:nth-child(1)>div:nth-child(1)>button:nth-child(3)").click({force:true});

          cy.get('div[data-fieldname="bond_license_no"]').eq(1).click();
          cy.get('p[title="Create a new Bond License"]').click();


          // new bond license

          cy.get('div[aria-modal="true"] input').click().type("Bond License " + uniquePart);
          cy.get('div[role="dialog"] button').eq(4).click();

          // contact 
          cy.get("div:nth-child(3)>div:nth-child(2)>div:nth-child(1)>form:nth-child(1)>div:nth-child(1)>div:nth-child(2)>div:nth-child(6)>div:nth-child(1)>div:nth-child(1)>button:nth-child(3)").click()
          cy.get('div[data-fieldname="first_name"]').eq(1).click().type("John");
          cy.get('input[placeholder="Email Address"]').click().type("e@gmail.com");
          cy.get('input[placeholder="Mobile No"]').click().type("1234567890");
          cy.get('input[placeholder="Is Primary Contact"]').click();
          cy.get('input[placeholder="Address"]').click().type("123 Main St, City, Country");
          cy.get('input[placeholder="Is Primary Address"]').click();
          
          //currency
          cy.get('div[data-fieldname="currency_and_exchange_rate_"] div').eq(0).click();
          cy.get('input[data-fieldname="default_currency"]').click();
          cy.get('input[data-fieldname="default_currency"]').type("USD");
          // cy.get('div[role="option"]').contains("USD").click();


          // exchange rate
          cy.get('input[data-fieldname="default_price_list"]').click();
          cy.get('p[title="Accessories-pl"]').first().click();

          // Accounting
          cy.get('div[data-fieldname="default_receivable_accounts"] div').eq(0).click();
          cy.get('div[data-fieldname="default_receivable_accounts"] button').eq(2).click();

          cy.get("div.static-area").eq(17).click();


          // cy.get('a[data-doctype="Company"]').click()
          cy.get('div[data-fieldname="account"]').eq(1).click();

          cy.get('input[data-fieldname="account"]').click().type("Debtors - INCTL")

          cy.get('div[role="option"]').contains("Debtors - INCTL").click();
    
        
     

 
          




        

      }
    });

    cy.printErrors();
  });
});
