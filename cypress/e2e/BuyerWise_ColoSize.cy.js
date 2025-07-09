describe('Login and Buyer wise color size Test with Soft Error Notes', () => {
    it('Login and Buyer wise color Test with Soft Error Notes', () => {
    
      cy.login();
      cy.wait(2000);
      cy.get("input#navbar-search").type("Buyer Wise Color");
      cy.get('li[aria-selected="true"]').first().click();
      cy.get('button[data-label="Add Buyer Wise Color"]').click();

      //   buyer name

      cy.get('input[data-fieldname="customer"]').click();
      cy.get('div[role="option"]').contains("JACK & JONES").click();

      cy.get('input[data-fieldname="color"]').click();

      // one test
      // cy.get('div[role="option"]').contains("Average Color").click();

      // two test
      // cy.get('div[role="option"]').contains("Black").click();

      // three test
      // cy.get('div[role="option"]').contains("Red").click();

      // use function to generate a random color 

      function selectRandomColorFromList(colorList) {
        const randomIndex = Math.floor(Math.random() * colorList.length);
        const randomColor = colorList[randomIndex];

        cy.log(`🎨 Randomly selected color: ${randomColor}`);

        cy.get('div[role="option"]')
          .contains(randomColor)
          .should("be.visible") // Optional: Ensure it's visible
          .click();
      }
      const colorList = [
        "Average Color","Black","Red"];
      selectRandomColorFromList(colorList);                                                     
      

      

      // color hex code

      cy.get("label.control-label").then(($labels) => {
        let found = false;

        $labels.each((index, label) => {
          const text = Cypress.$(label).text().trim();
          const isVisible = Cypress.$(label).is(":visible");

          if (text.includes("Color Hex Code") && isVisible) {
            found = true;
          }
        });

        if (found) {
          cy.log("yes field is visible for Color Hex Code");
        } else {
          cy.log("No field is not visible for Color Hex Code");
        }
      });

      // minimum dyeing duration
      cy.get("label.control-label").then(($labels) => {
        let found = false;

        $labels.each((index, label) => {
          const text = Cypress.$(label).text().trim();
          const isVisible = Cypress.$(label).is(":visible");

          if (text.includes("Minimum Dyeing Duration") && isVisible) {
            found = true;
          }
        });

        if (found) {
          cy.log("yes field is visible for Minimum Dyeing Duration");
        } else {
          cy.log("No field is not visible for Minimum Dyeing Duration");
        }
      });

      // cy.printErrors()
    });
     
    })


    describe("2nd Color create . Login and Buyer wise color size Test with Create=>", () => {
      it("2nd Color create .Login and Buyer wise color Test with create", () => {
        cy.login();
        cy.wait(2000);
        cy.get("input#navbar-search").type("Buyer Wise Color");
        cy.get('li[aria-selected="true"]').first().click();
        cy.get('button[data-label="Add Buyer Wise Color"]').click();

        //   buyer name

        cy.get('input[data-fieldname="customer"]').click();
        cy.get('div[role="option"]').contains("JACK & JONES").click();

        cy.get('input[data-fieldname="color"]').click();

        // create a new colo
        cy.get('div[role="option"]').contains(" Create a new Color").click();

        // genarate a random color name
        const greenColors = [
          "Emerald", "Olive", "Mint", "Moss", "Jade", "Sage", "Lime", "Seafoam",
          "Pine", "Fern", "Basil", "Celadon", "Chartreuse", "Avocado", "Eucalyptus"
        ];
        // Select a random color from the list
        const randomColor = greenColors[Math.floor(Math.random() * greenColors.length)];
        // Generate a unique color name using the random color and current timestamp
        const uniqueColorName = "color_" + randomColor.toLowerCase() + "_" + Date.now();
  
        cy.log("🌿 Generated Green Color Name:", uniqueColorName);

        // color page should open
        cy.get('input[data-doctype="Color"]')
          .eq(0)
          .click()
          .type(uniqueColorName);

          // color hex code generate 
          function generateRandomColor() {
            return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
          }
        const randomHexColor = generateRandomColor();
        cy.log("🎨 Generated Random Hex Color:", randomHexColor)
        
        cy.get('input[data-fieldtype="Color"]').click().type(randomHexColor); // Example hex code      
        
        cy.get('input[data-fieldtype="Duration"]').click("right"); // Example duration

        // Set the duration values
        cy.get('input[data-duration="days"]').clear().type(2).wait(1000);
        cy.get('input[data-fieldtype="Duration"]').click("right"); 
        cy.get('input[data-duration="hours"]').click().click().clear().type(5);
        cy.get('input[data-fieldtype="Duration"]').click("right");  // Example hours
        cy.get('input[data-duration="minutes"]').click().clear().type(30); 
        cy.get('input[data-fieldtype="Duration"]').click("right"); 
        cy.get('input[data-duration="seconds"]').click().clear().type(1); 
        cy.get('input[data-fieldtype="Duration"]').click("right");
        cy.get('div[data-fieldname="column_break_brmlw"]').click() // Example seconds
        cy.wait(1000);

    
      
     

 

        // save the form
        cy.get('button.btn-primary[data-label="Save"]').eq(1).click({ force: true });


        // cy.printErrors()
      });
    });
  

    