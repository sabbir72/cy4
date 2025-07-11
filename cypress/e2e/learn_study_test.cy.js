// // ===================================================

// describe('Login and Style Test with Soft Error Notes', () => {
//   it('Handles login failure softly and proceeds', () => {
//     const uniqueName = "style_" + Math.random().toString(36).substring(2, 4) + "_" + Date.now()
//     cy.log('🔧 Generated Unique Name:', uniqueName)

//     cy.login()

//     cy.wait(2000)

//     // ✅ Check login success
//     cy.then(() => {
//       const loginOk = cy.softCheck('input#navbar-search', "Login Success Check")

//       if (loginOk) {
//         cy.get('input#navbar-search').type("Style")
//         cy.get('li[aria-selected="true"]').first().click()

//       }
//     })

//     cy.printErrors()
//   })
// })


let cutPlanName = "";

describe("Cut Plan Read & Save Test", () => {
  it("Reads text from cut plan and saves it", () => {
    cy.login();

    cy.get("input#navbar-search").type("Cut Plan");
    cy.get('li[aria-selected="true"]').first().click();

    cy.get("li.disabled a")
      .invoke("text")
      .then((text) => {
        cutPlanName = text.trim();
        cy.log("Captured:", cutPlanName);
      });

    cy.get('button[data-label="Save"]').click();
    cy.printErrors();
  });
});

describe("Login and cut plan Test with duplicate", () => {
  it("Handles login to cut plan", () => {
    cy.login();

    cy.get("input#navbar-search").type("Cut Plan");
    cy.get('li[aria-selected="true"]').first().click();

    cy.get('input[data-fieldname="name"]').clear().type(cutPlanName); // Use the captured name

    cy.get(`a[data-name="${cutPlanName}"]`).click();

    cy.get('button[aria-label="Menu"]').eq(2).click();
    cy.get('span[data-label="Duplicate"] span').eq(1).click();

    cy.printErrors();
  });
});
