describe("",()=>{
    it('4th into 1 ', () => {
        cy.visit("https://example.cypress.io/");

    cy.get(".dropdown-toggle").should("be.visible").click();
    cy.wait(1000);
    cy.get("ul.dropdown-menu").contains("Waiting").should("be.visible").click();


    cy.get('.wait-input1').type('Wait 1000ms after typing')
    cy.wait(1000)
    cy.get('.wait-input2').type('Wait 1000ms after typing')
    cy.wait(1000)
    cy.get('.wait-input3').type('Wait 1000ms after typing')
    cy.wait(1000)
    

    cy.get(".dropdown-toggle").should("be.visible").click();
    cy.wait(1000);
    cy.get("ul.dropdown-menu").contains("Network Requests").should("be.visible").click();
//     cy.request('https://jsonplaceholder.cypress.io/comments')
//   .should((response) => {
//     expect(response.status).to.eq(200)
//     expect(response.body).to.have.length(500)
//     expect(response).to.have.property('headers')
//     expect(response).to.have.property('duration')

    cy.request('https://jsonplaceholder.cypress.io/users?_limit=1')
  .its('body.0') // রেসপন্সের প্রথম ব্যবহারকারী পাওয়া
  .then((user) => {
    expect(user).property('id').to.be.a('number')
    cy.request('POST', 'https://jsonplaceholder.cypress.io/posts', {
        userId: user.id,
        title: 'Cypress Test Runner',
        body: 'Fast, easy and reliable testing for anything that runs in a browser.',
      })
      



  })
    });

})