describe('Login and Buyer wise color size Test with Soft Error Notes', () => {
    it('Login and Buyer wise color Test with Soft Error Notes', () => {
    //   const uniqueName = "style_" + Math.random().toString(36).substring(2, 4) + "_" + Date.now()
    //   cy.log('🔧 Generated Unique Name:', uniqueName)
  
      cy.login()
      cy.wait(2000)
          cy.get('input#navbar-search').type("Buyer Wise Color")
          cy.get('li[aria-selected="true"]').first().click()
          cy.get('button[data-label="Add Buyer Wise Color"]').click();


        //   buyer name
         
        cy.get('input[data-fieldname="customer"]').click()
        cy.get('div[role="option"]').contains("JACK & JONES").click();

        cy.get('input[data-fieldname="color"]').click()
        cy.get('div[role="option"]').contains("Average Color").click(); 

// color hex code
        cy.get("label.control-label").then(($labels) => {
          const label = $labels.filter(
            (i, el) => el.innerText.trim() === "Color Hex Code"
          );
          if (label.length && Cypress.$(label).is(":visible")) {
            cy.log("Field is visible");
          } else {
            cy.log("This field is not visible");
          }
        });
        
// minimum dyeing duration
        cy.get("body").then(($body) => {
          if (
            $body.find(
              'label.control-label:contains("Minimum Dyeing Duration")'
            ).length > 0
          ) {
            cy.get(
              'label.control-label:contains("Minimum Dyeing Duration")'
            ).then(($el) => {
              if ($el.is(":visible")) {
                cy.log("Field is visible");
              } else {
                cy.log("This field is not visible");
              }
            });
          } else {
            cy.log("This field is not visible");
          }
        });
        
        
        
  
      cy.printErrors()
    })
  })
  