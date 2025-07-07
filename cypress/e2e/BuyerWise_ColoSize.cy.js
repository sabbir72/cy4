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

    // save the form
    cy.get('button[data-label="Save"] span').eq(0).click({ force: true });

    // cy.printErrors()
  });
});


    describe(" Test-02 Login and Buyer wise color size Test with Create=>", () => {
      it("Test-02 Login and Buyer wise color Test with create", () => {
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

        // color page should open
        cy.get('input[data-doctype="Color"]')
          .eq(0)
          .click()
          .type("bottle_green");
        cy.get('input[data-fieldtype="Color"]').click().type("#093626"); // Example hex code
        cy.get('input[data-fieldtype="Duration"]').click("right"); // Example duration

        // Set the duration values
        cy.get('input[data-duration="days"]').clear().type(2).wait(1000); // Example duration in days
         // Example duration in days
        cy.get('input[data-duration="hours"]').click().type(2).wait(1000); // Example duration in days
        cy.get('input[data-duration="minutes"]').click().clear().type(2).wait(1000);
        cy.get('input[data-duration="seconds"]').click().clear().type(2).wait(1000); // Example duration in hours
        cy.get('input[data-fieldtype="Duration"]').click("right");


        
        // save the form
        cy.get('button[data-label="Save"] span').eq(0).click({ force: true });

        // cy.printErrors()
      });
    });
  

    