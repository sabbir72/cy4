describe(" ", () => {
  it("1st", () => {
    cy.visit("https://example.cypress.io/");

    cy.get(".dropdown-toggle").should("be.visible").click();
    cy.wait(1000);
    cy.get("ul.dropdown-menu")
      .contains("Connectors")
      .should("be.visible")
      .click();

    cy.get(".connectors-each-ul>li").each(function ($el, index, $list) {
      console.log($el, index, $list);
    });

    cy.get(".connectors-its-ul>li").its("length");
  });
});
