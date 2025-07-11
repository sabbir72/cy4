// ===================================================

describe('Cut_plan Test', () => {
  it('Handles Cut_Plan', () => {
    cy.login()
     cy.get("input#navbar-search").type("Cut Plan");
     cy.get('li[aria-selected="true"]').first().click();
    cy.get('button[data-label="Add Cut Plan"]').click();
    cy.get('input[data-fieldname="customer"]').click()
    cy.get('div[role="option"]').contains("JACK & JONES").click();

    cy.get('input[data-fieldname="style_no"]').click().type("Cut_Test_Style_SPO")
    cy.get('div[role="option"]').contains('Cut_Test_Style_SPO').click();
    cy.wait(1000)
    cy.get('input[data-fieldtype="Table MultiSelect"]').click({force: true}).wait(1000)
    cy.get('input[data-fieldtype="Table MultiSelect"]').type("JACK & JONES-00865").wait(1000)
    cy.get('div[role="option"]').contains('JACK & JONES-00865').click({ force: true }).wait(1000);
   
   


    //  cy.wait(2000)
    // marker list add button
    cy.contains('button', 'Add Row').eq(0).click()


    // edit icon 
    cy.get('div[data-original-title="Edit"]').click();

    // list of fabric
        cy.get('input[aria-expanded="true"]').click().type('100% BCI Cotton S/J').wait(1000);

    cy.contains('div[role="option"]', "100% BCI Cotton S/J")
      .scrollIntoView()
      .click();


    // // gsm

    cy.get('input[data-fieldname="gsm"]').click().type('GSM-130-0539')
    cy.get('div[role="option"]').contains('GSM-130-0539').click();


    // Step 1: Click on GMT Color input field
    cy.get('input[data-fieldname="color"]').eq(0).click();

// ================================================================
const colorName = "Black";               // Value  manually set for testing

cy.log("🎯 Target Color:", colorName);

// Step 1: Click the GMT color field to open dropdown
cy.get('input[data-fieldname="color"]').eq(0).click().wait(500);

// Step 2: Check if the color exists in the dropdown
cy.get('div[role="option"]').then($options => {
  const found = [...$options].some(option => option.innerText.includes(colorName));

  if (found) {
    cy.log("✅ Found:", colorName);
    cy.contains('div[role="option"]', colorName).click();
  } else {
    cy.log("❌ Not found. Creating a new color...");

    // Step 3: Click "Create a new Color"
    cy.contains('div[role="option"]', "Create a new Color").click();

    // Step 4: Generate unique color name
    const greenColors = [
      "Emerald", "Olive", "Mint", "Moss", "Jade", "Sage", "Lime", "Seafoam",
      "Pine", "Fern", "Basil", "Celadon", "Chartreuse", "Avocado", "Eucalyptus"
    ];
    const randomColor = greenColors[Math.floor(Math.random() * greenColors.length)];
    const uniqueColorName = `color_${randomColor.toLowerCase()}_${Date.now()}`;
    cy.log("🆕 Generated Name:", uniqueColorName);

    // Step 5: Fill color name
    cy.get('input[data-doctype="Color"]').first().click().type(uniqueColorName);

    // Step 6: Generate proper hex code
    const hexColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    cy.log("🎨 Generated Hex:", hexColor);
    cy.get('input[data-fieldtype="Color"]').clear().type(hexColor);

    // Step 7: Set optional duration (can skip if not used)
    cy.get('input[data-duration="days"]').clear().type("2");
    cy.get('input[data-duration="hours"]').clear().type("5");
    cy.get('input[data-duration="minutes"]').clear().type("30");
    cy.get('input[data-duration="seconds"]').clear().type("1");

    // Step 8: Optional field focus to ensure stability
    cy.get('div[data-fieldname="column_break_brmlw"]').click();

    // Step 9: Save the new Color
    cy.get('button.btn-primary[data-label="Save"]').eq(1).click({ force: true });
  }
});

// =================================================================

    // // Fabric color 
    cy.get('input[data-fieldname="fabric_color"]').click().type('White')
    cy.get('div[role="option"]').contains('White').click()
    


    // // market 
    cy.get('input[data-fieldname="marker"]').click();
    cy.get('div[role="option"]').contains('M1').click();

//    

cy.get('div[data-fieldname="marker_section_section"] div').eq(0).scrollIntoView()
      cy.get('input[data-fieldname="marker_length"]').type('400').click()
      cy.get('input[data-fieldname="marker_width"]').type('200').click()
      cy.get('input[data-fieldname="marker_efficiency"]').type('85%').click()

    //   // cut details
      cy.get('div.collapsed').eq(0).click() // Expand Marker Details section
      cy.get('input[data-fieldname="start_date"]').click()
      cy.get('span.datepicker--button[data-action="today"]').eq(1).click()
      cy.get('input[data-fieldname="end_date"]').click()
      cy.get('span.datepicker--button[data-action="today"]').eq(2).click()

      cy.get('input[data-fieldname="cutting_man"]').click().type('2')
      cy.get('input[data-fieldname="cutting_assist"]').click().type('2')  
      cy.get('input[data-fieldname="workstation"]').click()
      cy.contains('div[role="option"]', "Cutting Floor 3").click()
      cy.get('input[data-fieldname="line"]').click().type('01')
      // cy.get('input[data-fieldname="line"]').click()
      // cy.get('div[role="option"]').contains('01').click({force:true
      cy.contains('div[role="option"]', "01").click({force:true})



      cy.get('div[data-fieldname="ply_wise_cut"] button').click() // Add row Ply Wise Cut button
      cy.get('div[data-fieldname="no_of_ply"] input').eq(0).click().type(51).scrollIntoView().wait(1000)

    //   // next row
      cy.get('div[data-fieldname="ply_wise_cut"] button').eq(1).click({force:true}) .wait(1000) // Add row Ply Wise Cut button
      cy.get('div[data-fieldname="no_of_ply"] input').eq(1).click().clear().type(50).scrollIntoView()


      // set cut qty
      cy.get('button[data-fieldname="set_cut_qty"]').click()
      
      // size wise cut
      cy.get('div[data-fieldname="ratio"] input').click().type(1).scrollIntoView()
      

    // // select body parts
    // cy.get('input[data-target="Body Parts Mapping Details"]').click();
    // cy.get('input[data-target="Body Parts Mapping Details"]').type('Back');
    // cy.wait(2000);
    // cy.contains('div[role="option"]', 'Back')
    //   .should('be.visible')
    //   .click({ force: true });  
    //   // =======
    // cy.get('input[data-target="Body Parts Mapping Details"]').click();
    // cy.get('input[data-target="Body Parts Mapping Details"]').type('Front');
    // cy.wait(2000);
    // cy.contains('div[role="option"]', 'Front')
    //   .should('be.visible')
    //   .click({ force: true });
  
    // // =======
    // cy.get('input[data-target="Body Parts Mapping Details"]').click();
    // cy.get('input[data-target="Body Parts Mapping Details"]').type('Sleeve');
    // cy.wait(2000);
    // cy.contains('div[role="option"]', 'Sleeve')
    //   .should('be.visible')
    //   .click({ force: true });

    //   // save button
    //   cy.contains('kbd', 'ESC').click()
    //   cy.get('button[data-label="Save"]').click() 
    
//       cy.get('input[data-fieldname="marker_width"]').type('200')
//       cy.get('input[data-fieldname="marker_efficiency"]').type('85%')
//       cy.get('input[data-fieldname="gsm"]').click().type('180')
//       cy.get('input[data-fieldname="finish_dia_width"]').click().type('350')
//       cy.get('input[data-fieldname="no_of_ply"]').click().type('100').scrollIntoView()
//       cy.get('input[data-fieldtype="Int"]').click().type('50')

      
//       cy.get('input[data-fieldname="start_date"]').click()
//       cy.get('span.datepicker--button[data-action="today"]').eq(1).click()


//       cy.get('input[data-fieldname="end_date"]').click()
//       cy.get('span.datepicker--button[data-action="today"]').eq(2).click()

//       cy.get('input[data-fieldname="cutting_man"]').click().type('2')
//       cy.get('input[data-fieldname="cutting_assist"]').click().type('2')


//       cy.get('input[data-fieldname="workstation"]').click()
//       cy.contains('div[role="option"]', "Cutting Floor 3").click()


//       cy.get('input[data-fieldname="line"]').click()
//       cy.contains('div[role="option"]', "01").click({force:true})


    

//     cy.get('div[data-fieldname="ratio"] input').click().type('2').scrollIntoView()
//     cy.get("div:nth-child(3)>div:nth-child(1)>input:nth-child(2)").click()
//     cy.get("div:nth-child(3)>div:nth-child(1)>input:nth-child(2)").type("200").scrollIntoView()

//    cy.wait(2000)


// function selectBodyPart(name) {
//   cy.get('input[data-target="Body Parts Mapping Details"]').click();
//   cy.get('input[data-target="Body Parts Mapping Details"]').type(name);
//   cy.wait(200);
//   cy.contains('div[role="option"]', name)
//     .should('be.visible')
//     .click({ force: true });
// }
// selectBodyPart('Back');
// selectBodyPart('Front');
// selectBodyPart('Sleeve');

// cy.contains('kbd', 'ESC').click()

// cy.get('button[data-label="Save"]').click()

    cy.printErrors()
  })
})

// ======================dublicate =============================

// describe('Login and cut plan Test with dublicate', () => {
//   it('Handles login to cut plan', () => {
  
//      cy.login()
//      cy.wait(2000)
//       cy.get("input#navbar-search").type("Cut Plan");
//      cy.get('li[aria-selected="true"]').first().click();
      
//    cy.get('input[data-fieldname="name"]').clear().type('Cutplan-26-06-0834');

//      cy.wait(1000)
//      cy.get('a[data-name="Cutplan-26-06-0834"]').click()
//      cy.wait(1000)
//      cy.get('button[aria-label="Menu"]').eq(2).click()
//      cy.get('span[data-label="Duplicate"] span').eq(1).click()

//     cy.printErrors()
//   })

// })

// // ====================Cencel-Amended - again submit===============

// // describe('Login and cut plan  with Cencel-Amended - again submit', () => {
// //   it('Handles login failure softly and proceeds', () => {
  
// //     cy.login()
// //     cy.wait(2000)
// //     cy.get("input#navbar-search").type("Cut Plan");
// //     cy.get('li[aria-selected="true"]').first().click();
// //     cy.get('input[data-fieldname="name"]').clear().type('Cutplan-26-06-0834');

// //      cy.wait(1000)
// //      cy.get('a[data-name="Cutplan-26-06-0834"]').click()
// //      cy.wait(1000)
// //      cy.get('button[aria-label="Menu"]').eq(2).click()
// //      cy.get('span[data-label="Duplicate"] span').eq(1).click()

// //     cy.printErrors()
// //   })

// // })