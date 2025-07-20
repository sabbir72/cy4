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
// ===================================================

// describe("Login and cut plan Test with duplicate", () => {
//   it("Handles login to cut plan", () => {
//     cy.login();
//     cy.wait(2000);

//     cy.get("input#navbar-search").type("Cut Plan");
//     cy.get('li[aria-selected="true"]').first().click();
//     cy.wait(1000);

//     cy.get('button[title="Clear all filters"]').click();

//     // ✅ First row checkbox check
//     cy.get(".list-row-container")
//       .first()
//       .find("input.list-row-checkbox")
//       .check({ force: true });

//     // ✅ Get title and use it inside .then()
//     cy.get('a[data-doctype="Cut Plan"]')
//       .first()
//       .invoke("attr", "title")
//       .then((title) => {
//         cy.log("Title value:", title);

//         // ✅ Use title inside this block
//         cy.get('input[data-fieldname="name"]').clear().type(title);
//         cy.get(`a[data-name="${title}"]`).click();

//         cy.wait(1000);
//         cy.get('button[aria-label="Menu"]').eq(2).click();
//         cy.get('span[data-label="Duplicate"] span').eq(1).click();

//         cy.printErrors();
//       });
//   });
// });
