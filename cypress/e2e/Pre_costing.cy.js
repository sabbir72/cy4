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
    cy.get('input[data-fieldname="finished_goods_type"]').click();
    cy.get('div[role="option"]').contains("RMG").click();

    // cy.wait(2000)
    cy.get('input[data-fieldname="style"]').click();
    cy.get('div[role="option"]').contains("eid-01-2025").click();
    cy.scrollTo(0, 500);
    //    cy.wait(2000)
    // cost
    cy.contains("div.section-head", "Cost Configuration")
      .scrollIntoView()
      .wait(2000);

    cy.contains("div.section-head", "Cost Configuration").click();
    // cy.wait(2000)
    cy.get('input[data-fieldname="currency"]').click().clear().type("USD");
    cy.get('p[title="USD"]').click();

    // cy.get('input[data-fieldname="add_wastage_in_quantity"]').check();

    cy.contains("span.label-area", "Add Wastage in Quantity").parent().click(); // এর প্যারেন্টে যায় (সাধারণত চেকবক্স সহ container)
      // .find('input[type="checkbox"]') // ভিতরের চেকবক্স খুঁজে পায়
      // চেক করে (জোরপূর্বক, যদি হিডেন থাকে)

    cy.printErrors();
  })

})
