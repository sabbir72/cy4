
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
      
      })
    })

describe("Test-01 Login and Buyer wise color size Test with Soft Error Notes", () => {
  it("Test-01 Login and Buyer wise color Test with Soft Error Notes", () => {
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
    const colorList = ["Average Color", "Black", "Red"];
    selectRandomColorFromList(colorList);


    // color hex code


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

// describe("2nd Color Create: Login and Buyer wise color size Test with Create =>", () => {
//   it("Check Color Hex Code & Minimum Dyeing Duration visibility, then Save", () => {
    
//     // Helper function to check if label with specific text is visible
//     function checkLabelVisibility(labelText) {
//       cy.get("label.control-label").then(($labels) => {
//         let found = false;

//         $labels.each((index, label) => {
//           const text = Cypress.$(label).text().trim();
//           const isVisible = Cypress.$(label).is(":visible");

//           if (text.includes(labelText) && isVisible) {
//             found = true;
//           }
//         });

//         if (found) {
//           cy.log(`✅ Field is visible: ${labelText}`);
//         } else {
//           cy.log(`❌ Field is NOT visible: ${labelText}`);
//         }

//         // Optional assert for automated test validation
//         expect(found, `${labelText} field should be visible`).to.be.true;
//       });
//     }

//     // Check for "Color Hex Code"
//     checkLabelVisibility("Color Hex Code");

//     // Check for "Minimum Dyeing Duration"
//     checkLabelVisibility("Minimum Dyeing Duration");

//     // Save the form
//     cy.get('button[data-label="Save"] span').eq(0).click({ force: true });

//     // Optional: You could verify form is saved with a success message/assertion
//     // cy.contains("Saved").should("be.visible");

//     // Optional: Print errors if any
//     // cy.printErrors();
//   });
// });


   describe("Test-02 Login and Buyer wise color size Test with Create =>", () => {
  it("Test-02 Login and Buyer wise color Test with create", () => {

    cy.login();
    cy.wait(2000);

    cy.get("input#navbar-search").type("Buyer Wise Color");
    cy.get('li[aria-selected="true"]').first().click();
    cy.get('button[data-label="Add Buyer Wise Color"]').click();

    // Select buyer name
    cy.get('input[data-fieldname="customer"]').click();
    cy.get('div[role="option"]').contains("JACK & JONES").click();

    // Select color field
    cy.get('input[data-fieldname="color"]').click();
    cy.get('div[role="option"]').contains(" Create a new Color").click();

    // Generate random green color name
    const greenColors = [
      "Emerald", "Olive", "Mint", "Moss", "Jade", "Sage", "Lime", "Seafoam",
      "Pine", "Fern", "Basil", "Celadon", "Chartreuse", "Avocado", "Eucalyptus"
    ];
    const randomColor = greenColors[Math.floor(Math.random() * greenColors.length)];
    const uniqueColorName = "color_" + randomColor.toLowerCase() + "_" + Date.now();

    cy.log("🌿 Generated Green Color Name:", uniqueColorName);

    // Fill in the color name
    cy.get('input[data-doctype="Color"]').eq(0).click().type(uniqueColorName);

    // Generate random hex color
    function generateRandomColor() {
      return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    }
    const randomHexColor = generateRandomColor();
    cy.log("🎨 Generated Random Hex Color:", randomHexColor);

    // Fill in the hex color
    cy.get('input[data-fieldtype="Color"]').click().type(randomHexColor);

    // Duration inputs
    cy.get('input[data-fieldtype="Duration"]').click("right");
    cy.get('input[data-duration="days"]').clear().type(2).wait(1000);
    cy.get('input[data-fieldtype="Duration"]').click("right");
    cy.get('input[data-duration="hours"]').click().clear().type(5);
    cy.get('input[data-fieldtype="Duration"]').click("right");
    cy.get('input[data-duration="minutes"]').click().clear().type(30);
    cy.get('input[data-fieldtype="Duration"]').click("right");
    cy.get('input[data-duration="seconds"]').click().clear().type(1);
    cy.get('input[data-fieldtype="Duration"]').click("right");
    cy.get('div[data-fieldname="column_break_brmlw"]').click();
    cy.wait(1000);

    // // Optional second duration input block (if needed)
    // cy.get('input[data-duration="days"]').clear().type(2).wait(1000);
    // cy.get('input[data-duration="hours"]').click().type(2).wait(1000);
    // cy.get('input[data-duration="minutes"]').click().clear().type(2).wait(1000);
    // cy.get('input[data-duration="seconds"]').click().clear().type(2).wait(1000);
    // cy.get('input[data-fieldtype="Duration"]').click("right");

    // Save the form  
    cy.get('button.btn-primary[data-label="Save"]').eq(1).click({ force: true });

    // Optionally add error print or confirmation check here
    // cy.printErrors()
  });
});
