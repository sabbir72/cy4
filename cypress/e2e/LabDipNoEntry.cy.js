// ===================================================

describe('Login and Style Test with Soft Error Notes', () => {
    it('Handles login failure softly and proceeds', () => {
    //   const uniqueName = "style_" + Math.random().toString(36).substring(2, 4) + "_" + Date.now()
    //   cy.log('🔧 Generated Unique Name:', uniqueName)
  
      cy.login()
      cy.wait(2000)
  
      // ✅ search for Lab Dip No Entry
      
          cy.get('input#navbar-search').type("Lab Dip No Entry")
          cy.get('li[aria-selected="true"]').first().click()
          cy.get('button[data-label="Add Lab Dip No Entry"]').click()

        //   fill in the form with random data

        cy.get('input[data-fieldname="customer"]').click()
        cy.get('div[role="option"]').contains("JACK & JONES").click()       

        cy.get('input[data-fieldname="style_no"]').click()
        cy.get('div[role="option"]').contains("Sabbir123").click()                            



   cy.get('input[data-fieldname="color"]').click();
   
    const colorList = ["Red", "color_mint_1752056679305"];
    const randomIndex = Math.floor(Math.random() * colorList.length);
    const colorName = colorList[randomIndex];

cy.log("🎨 Random Color Selected:", colorName);

   cy.get('div[role="option"]').then($options => {
    const found = [...$options].some(option => option.innerText.includes(colorName));
  
  if (found) {
    cy.get('div[role="option"]').contains(colorName).click();
  } else {
    cy.get('div[role="option"]').contains("Create a new Color").click();
    // genarate a random color name
        const greenColors = [
          "Emerald", "Olive", "Mint", "Moss", "Jade", "Sage", "Lime", "Seafoam",
          "Pine", "Fern", "Basil", "Celadon", "Chartreuse", "Avocado", "Eucalyptus"
        ];
        // Select a random color from the list
        const randomColor = greenColors[Math.floor(Math.random() *20)];
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
            return '#' + Math.floor(Math.random() * 100).toString(6).padStart(6, '0');
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
  }
});

        // Lab Dip No genarate random number
        const randomNumber = Math.floor(Math.random() * 1000000);
    
        cy.get('input[data-fieldname="lab_dip_no"]').type(randomNumber);
       
        cy.get('input[data-fieldtype="Date"]').click()
        cy.get('.datepicker--buttons .datepicker--button[data-action="today"]').click();
        cy.wait(2000);



        // Save the form  not fixed 
        cy.get('button[data-label="Save"] span').eq(0).click()
       
          
        // cy.get('div.toast-message', { timeout: 10000 }).then(($el) => {
        //   const message = $el.text();
        
        //   if (message.includes("saved") || message.includes("successfully")) {
        //     cy.log("✅ Save Successful");
        //   } else if (message.includes("not available for Style")) {
        //     const expectedMsg = `Color ${colorName} is not available for Style No ${styleNo}`;
        //     expect(message.trim()).to.eq(expectedMsg);
        //     cy.log("❌ Expected Error Message Shown:", message);
        //   } else {
        //     // অন্য কোনো অপ্রত্যাশিত মেসেজ
        //     throw new Error("Unexpected message: " + message);
        //   }
        // });
  
    
      cy.printErrors()
    })
  })
  