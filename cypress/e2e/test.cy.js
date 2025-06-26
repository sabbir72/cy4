// describe("My 1st Test", () => {
//   it('finds the content "type"', () => {
    

//     cy.visit("https://example.cypress.io");
//     cy.contains("get").click();
//     cy.url().should("include", "/querying");
//     cy.get("#query-btn").should("contain", "Button");
//     cy.get("#query-btn").should("have.text","\n                Button\n              ");
     
//     cy.get("#query-btn")
//       .invoke("text")
//       .then((text) => {
//         expect(text.trim()).to.eq("Button");
//       });

// //     //   cy.get("#query-btn").should("be.visible");
//   });
// });

// describe("My 2nd Test", () => {
//   it("Gets, types and asserts", () => {
//     cy.visit("https://example.cypress.io");

//     cy.contains("type").click();

//     // Should be on a new URL which
//     // includes '/commands/actions'
//     cy.url().should("include", "/commands/actions");

//     // Get an input, type into it
//     cy.get(".action-email").type("fake@email.com");

//     //  Verify that the value has been updated
//     cy.get(".action-email").should("have.value", "fake@email.com");
//   });
// });

// describe( "3rd test ", ()=> {
//   it('double click', () => {
//     cy.visit("https://example.cypress.io");

//     // cy.contains("type").click();

//     // cy.scrollTo(0,1000);
//     // cy.wait(1000);
//     // cy.get('.action-div').scrollIntoView().dblclick();

//     // cy.get('.action-div').should('not.be.visible')
//     // cy.get('.action-input-hidden').should('be.visible')

//     // //checkbox
//     // cy.wait(1000);
//     // cy.get('.action-checkboxes [value="checkbox1"]').not('[disabled]').check();

//     // cy.get('.action-checkboxes [value="checkbox1"]').should('be.checked');

//     // cy.wait(1000);
//     // cy.get('.action-checkboxes [value="checkbox2"]').check('checkbox2',{force:true});// specific check for use value .

//     // cy.get('.action-checkboxes [value="checkbox1"]').uncheck();
//     // cy.wait(1000);
//     // cy.get(".action-multiple-checkboxes [type='checkbox']").check();  // specific check for use value .


//     // // radio 

//     // cy.get("#optionsRadios1").check().should('be.checked');
//     // cy.get('.action-radios [type="radio"]').check('radio3',{force:true});



//     // cy.get('.action-select').should('have.value', '--Select a fruit--');
    
//     // cy.get('.action-select').select('bananas');

//     // it("Dropdown Selector Test", () => {
//     //   cy.get(".action-select").should("have.value", "--Select a fruit--");
//     //   cy.get(".action-select").select("bananas");
//     //   cy.get(".action-select").should("have.value", "bananas"); // Verify selection
//     // });

//     // cy.wait(1000);
    
//     // cy.get('#scroll-horizontal').scrollIntoView();

//     // cy.get('#scroll-horizontal button').should('not.be.visible');
    
//     // cy.get('.trigger-input-range').invoke('val', 25);


//   });

// });


// // // Querying
// // describe ("Querying", ()=>{

// //   it('Querying test', () => {
// //     cy.visit("https://example.cypress.io");
// //     cy.get(".dropdown-toggle").click();
// //     cy.url().should("include", "/commands/Querying");
// //     // cy.get("Querying").click();
// //     // cy.get('[data-test-id="test-example"]').should('have.class', 'example')
// //   });
// // })

// context("4th test", () => {
// 	before(() => {
// 		cy.visit("https://example.cypress.io/");
// 			});

// it("should select 3rd one",()=>{
// cy.get(".dropdown-toggle").should('be.visible').click();
// cy.wait(1000);
// cy.get('ul.dropdown-menu').contains("Querying").should('be.visible').click();
// cy.get('[data-test-id="test-example"]').should('have.class', 'example');


// cy.get(".dropdown-toggle").should('be.visible').click();
// cy.wait(1000);
// cy.get('ul.dropdown-menu').contains("Traversal").should('be.visible').click();
// cy.wait(1000)
// cy.get(".dropdown-menu").children('.active').should('contain', 'Traversal');
// cy.get(".dropdown-menu").find('.active').should('contain', 'Traversal');


//    });
// });

// context ("5 th Test ", ()=>{

//   before(() => {
// 		cy.visit("https://example.cypress.io/");
// 			});
//   it('closest', () => {
//     cy.get(".dropdown-toggle").should('be.visible').click();
//     cy.wait(1000);
// cy.get('ul.dropdown-menu').contains("Traversal").should('be.visible').click();
//     cy.get(".list-group") .closest('ul').should('have.class','list-group');
//     cy.get('#eq').scrollIntoView();
//     cy.get('.traversal-list>li').eq(3).should('contain','sphynx');
//     cy.get('.traversal-list>li').first().should('contain','tabby');
//     cy.get(".traversal-list>li").last().should("contain", "burmese")
//   });
// });


// context("6th test", ()=>{
//   before(() => {
// 		cy.visit("https://example.cypress.io/commands/traversal#");
// 			});
//   it('other test ', () => {

//     cy.get('.traversal-nav>li').filter('.active').should('contain','About');
//     cy.xpath("//a[normalize-space()='5']").click();
//     cy.get('#next').scrollIntoView();

//     cy.wait(1000);

//     cy.scrollTo(0, 200);
//     cy.get('.traversal-ul') .contains('oranges').next().should('contain', 'bananas');
//     cy.get('.traversal-next-all').contains('oranges').nextAll().should('have.length', 3) ;

//     cy.get('#nextUntil').scrollIntoView();
  
//     cy.get("#fruits").nextUntil("#nuts").should("have.length", 7);
//     cy.get('.traversal-disabled .btn').not('[disabled]').should('not.contain', 'Disabled');
//     cy.get('.traversal-mark').parent().should('contain', 'porta ac consectetur ac');
//     cy.get('.traversal-cite').parents();
//     cy.get('.clothes-nav').find('.active').parentsUntil('.clothes-nav').should('have.length', 2);

//   cy.get('.birds').find('.active').prev().click();
//   cy.get('.traversal-pills .active').siblings().eq(0).click();
    
//   });
// })
