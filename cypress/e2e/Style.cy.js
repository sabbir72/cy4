describe('Login Test', () => {
  it('Visits login page and logs in', () => {
    cy.visit("https://stagev15.inctl.net/");

    cy.get("input#login_email").type("Administrator");

    cy.get("input#login_password").type("admin");

    cy.contains("button", "Login").click();

    cy.wait(1000);

    cy.get("input#navbar-search").type("Style");

    cy.wait(1000);

    cy.get('li[aria-selected="true"]').first().click();

    cy.get('button[data-label="Add Style"]').click();

    cy.get('select[data-fieldname="type"]').select("Set Product");

    //    uniq name make
    const uniqueName =
      "style_" + Math.random().toString(10).substring(2, 4) + "_" + Date.now();

    cy.get('input[data-fieldname="style_name"]').type(uniqueName);
    cy.wait(1000);
    cy.get('input[data-fieldname="style_no"]').type(uniqueName);

    cy.get('input[data-fieldname="item_type"]').click().type("Jacket");

    cy.get('input[data-fieldname="customer"]').click().type("JACK & JONES");

    cy.get('input[data-fieldname="item_department"]').click().type("Men's Wear");

    cy.wait(1000);

    //  set items
    cy.get("button.grid-add-row").eq(1).click();
    cy.get('input[data-fieldname="item_code"]').type("0033");
    cy.get('p[title="Men hoodie jacket"]').first().click();
    cy.get('input[data-fieldtype="Float"]').click().type("1");
    // Click it
 

    // Type text
    cy.get('input[data-fieldname="item_type"]').eq(1).type("Jacket");

    // cy.get('input[aria-expanded="true"]')
    cy.get('input[data-fieldname="item_department"]').eq(1).click().type("Men's Wear");
    cy.contains('button', 'Insert Below').click()


 
  })
})
