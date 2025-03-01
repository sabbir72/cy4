describe("Window Object Test", () => {
    it("Check if window has 'top' property", () => {
        cy.visit("https://example.cypress.io"); // ওয়েবসাইট লোড করা
  
      cy.window().should('have.property', 'top'); // উইন্ডোর 'top' প্রপার্টি যাচাই করা
      cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
      cy.title().should('include', 'Kitchen Sink');

      cy.title().then((title) => {
        cy.log("Page title is: " + title); // ✅ কনসোলে টাইটেল প্রিন্ট করবে
      });
      
    });

    describe("2nd",()=>{
       it('2nd ', () => {
        cy.visit("https://example.cypress.io/");
        cy.get(".dropdown-toggle").should('be.visible').click();
        cy.wait(1000);
        cy.get('ul.dropdown-menu').contains("Viewport").should('be.visible').click();
        // cy.get('#navbar').should('be.visible');
        // cy.viewport(320, 480);
        //  cy.get('#navbar').should('not.be.visible')
        //  cy.get('.navbar-toggle').should('be.visible').click()
        //  cy.get('.nav').find('a').should('be.visible')
        //  cy.viewport(2999, 2999)
        cy.get(".dropdown-toggle").should('be.visible').click();
        cy.wait(1000);
        cy.get('ul.dropdown-menu').contains("Location").should('be.visible').click();
        cy.go('back');
        cy.wait(1000)  // 1 সেকেন্ড অপেক্ষা করবে
        cy.go('forward')
        cy.reload()
        cy.reload(true) 
        cy.contains('Location');

        cy.get(".dropdown-toggle").should('be.visible').click();
        cy.wait(1000);
        cy.get('ul.dropdown-menu').contains("Assertions").should('be.visible').click();
        
        cy.get('.assertion-table').find('tbody tr:last').should('have.class', 'success').find('td').first()

        .should('have.text', 'Column content')
        .should('contain', 'Column content')
        .should('have.html', 'Column content')
        .should('match', 'td')  .invoke('text').should('match', /column content/i)
         


        cy.get('.assertions-link').should('have.class', 'active')
  .and('have.attr', 'href').and('include', 'cypress.i')
// cy.viewport('macbook-15')
// cy.wait(200)
// cy.viewport('macbook-13')
// cy.wait(200)
// cy.viewport('macbook-11')
// cy.wait(200)
// cy.viewport('ipad-2')
// cy.wait(200)
// cy.viewport('ipad-mini')
// cy.wait(200)
// cy.viewport('iphone-6+')
// cy.wait(200)
// cy.viewport('iphone-6')
// cy.wait(200)
// cy.viewport('iphone-5')
// cy.wait(200)
// cy.viewport('iphone-4')
// cy.wait(200)
// cy.viewport('iphone-3')
// cy.wait(200)

// // cy.viewport() accepts an orientation for all presets
// // the default orientation is 'portrait'
// cy.viewport('ipad-2', 'portrait')
// cy.wait(200)
// cy.viewport('iphone-4', 'landscape')
cy.wait(200)
cy.hash().should('be.empty')
cy.get(".dropdown-toggle").should('be.visible').click();
cy.wait(1000);
cy.get('ul.dropdown-menu').contains("Misc").should('be.visible').click();


cy.get(".dropdown-toggle").should("be.visible").click();
cy.wait(1000);
cy.get("ul.dropdown-menu").contains("Connectors").should("be.visible").click();

cy.get(".connectors-each-ul>li").each(function ($el, index, $list) {
  console.log($el, index, $list);
});

cy.get(".connectors-its-ul>li").its("length");
  
      });
   })
});
  
