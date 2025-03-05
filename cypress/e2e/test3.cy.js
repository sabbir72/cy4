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

    const arr = ['foo', 'bar', 'baz']

cy.wrap(arr).spread(function(foo, bar, baz){
  expect(foo).to.eq('foo')
  expect(bar).to.eq('bar')
  expect(baz).to.eq('baz')

  cy.get(".dropdown-toggle").should("be.visible").click();
    cy.wait(1000);
  cy.get("ul.dropdown-menu").contains("Aliasing").should("be.visible").click();

  cy.xpath("//button[normalize-space()='Get Comment']").click();

  cy.get('.as-table')
  .find('tbody>tr').first()
  .find('td').first()
  .find('button').as('firstBtn')
  cy.get('@firstBtn').click()
})
  });
});
