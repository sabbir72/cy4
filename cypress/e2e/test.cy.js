describe("My 1st Test", () => {
  it('finds the content "type"', () => {
    

    cy.visit("https://example.cypress.io");
    cy.contains("get").click();
    cy.url().should("include", "/querying");
    cy.get("#query-btn").should("contain", "Button");
    cy.get("#query-btn").should("have.text","\n                Button\n              ");
     
    cy.get("#query-btn")
      .invoke("text")
      .then((text) => {
        expect(text.trim()).to.eq("Button");
      });

//     //   cy.get("#query-btn").should("be.visible");
  });
});

describe("My 2nd Test", () => {
  it("Gets, types and asserts", () => {
    cy.visit("https://example.cypress.io");

    cy.contains("type").click();

    // Should be on a new URL which
    // includes '/commands/actions'
    cy.url().should("include", "/commands/actions");

    // Get an input, type into it
    cy.get(".action-email").type("fake@email.com");

    //  Verify that the value has been updated
    cy.get(".action-email").should("have.value", "fake@email.com");
  });
});

describe( "3rd test ", ()=> {
  it('double click', () => {
    cy.visit("https://example.cypress.io");

    cy.contains("type").click();

    cy.scrollTo(0,1000);
    cy.wait(1000);
    cy.get('.action-div').scrollIntoView().dblclick();

    cy.get('.action-div').should('not.be.visible')
    cy.get('.action-input-hidden').should('be.visible')

    //checkbox
    cy.wait(1000);
    cy.get('.action-checkboxes [value="checkbox1"]').not('[disabled]').check();

    cy.get('.action-checkboxes [value="checkbox1"]').should('be.checked');

    cy.wait(1000);
    cy.get('.action-checkboxes [value="checkbox2"]').check('checkbox2',{force:true});// specific check for use value .

    cy.get('.action-checkboxes [value="checkbox1"]').uncheck();
    cy.wait(1000);
    cy.get(".action-multiple-checkboxes [type='checkbox']").check();  // specific check for use value .


    // radio 

    cy.get("#optionsRadios1").check().should('be.checked');
    cy.get('.action-radios [type="radio"]').check('radio3',{force:true});



    cy.get('.action-select').should('have.value', '--Select a fruit--');
    
    cy.get('.action-select').select('bananas');

    it("Dropdown Selector Test", () => {
      cy.get(".action-select").should("have.value", "--Select a fruit--");
      cy.get(".action-select").select("bananas");
      cy.get(".action-select").should("have.value", "bananas"); // Verify selection
    });

    cy.wait(1000);
    
    cy.get('#scroll-horizontal').scrollIntoView();

    cy.get('#scroll-horizontal button').should('not.be.visible');
    
    cy.get('.trigger-input-range').invoke('val', 25);


  });

});

// describe ("selector", ()=>{

//   it('Selector test', () => {
//     cy.get('.action-select').should('have.value', '--Select a fruit--');
  
//     cy.get('.action-select').select('bananas');
//   });
// })