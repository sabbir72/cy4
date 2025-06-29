// ===================================================

describe('Cut_plan Test', () => {
  it('Handles Cut_Plan', () => {
    cy.login()
     cy.get("input#navbar-search").type("Cut Plan");
     cy.get('li[aria-selected="true"]').first().click();
    cy.get('button[data-label="Add Cut Plan"]').click();
    cy.get('input[data-fieldname="customer"]').click()
    cy.get('div[role="option"]').contains("Pinaki Group").click();

    cy.get('input[data-fieldname="style_no"]').click().type("eid-01-2025")
    cy.get('div[role="option"]').contains('eid-01-2025').click();
    cy.wait(1000)
    cy.get('input[data-fieldtype="Table MultiSelect"]').click().type("Pinaki Group-00746");
    cy.get('p[title*="Pinaki Group-"]').click()
     cy.wait(1000);
     cy.get('div[data-fieldname="section_break_bruw"]').click()
    // cy.get('input[data-fieldtype="Table MultiSelect"]').type('Pinaki Group-00746').click()


     cy.wait(2000)
    // marker list add button
    cy.contains('button', 'Add Row').eq(0).click()


    // edit icon 
    cy.get('div[data-original-title="Edit"]').click();

    // list of fabric
    cy.contains('div[role="option"]', "100% BCI Cotton S/J").click()

    // gsm

    cy.get('input[data-fieldname="gsm"]').click().type('GSM-130-0539') 
    // Fabric color 
    cy.get('input[data-fieldname="fabric_color"]').click().type('White')
    cy.get('div[role="option"]').contains('White').click()
    // GMT color
    cy.get('input[data-fieldname="color"]').click()
    cy.get('div[data-fieldname="color"] p').eq(0).click()


    // market 
    cy.get('input[data-fieldname="marker"]').click();
    cy.get('div[role="option"]').contains('M1').click();

//    

//       cy.contains('div.section-head', 'Marker Details').scrollIntoView()

     

      cy.get('input[data-fieldname="marker_length"]').type('400').click()
      cy.get('input[data-fieldname="marker_width"]').type('200').click()
      cy.get('input[data-fieldname="marker_efficiency"]').type('85%').click()

      // cut details
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
      cy.get('div[data-fieldname="no_of_ply"] input').eq(0).click().type('100').scrollIntoView()

      // next row
      cy.get('div[data-fieldname="ply_wise_cut"] button').eq(1).click({force:true}) // Add row Ply Wise Cut button
      cy.get('div[data-fieldname="no_of_ply"] input').eq(1).click().type('50').scrollIntoView()


      // set cut qty
      cy.get('button[data-fieldname="set_cut_qty"]').click()
      
      // size wise cut
      cy.get('div[data-fieldname="ratio"] input').click().type('2').scrollIntoView()
      

    // select body parts
    cy.get('input[data-target="Body Parts Mapping Details"]').click();
    cy.get('input[data-target="Body Parts Mapping Details"]').type('Back');
    cy.wait(2000);
    cy.contains('div[role="option"]', 'Back')
      .should('be.visible')
      .click({ force: true });  
      // =======
    cy.get('input[data-target="Body Parts Mapping Details"]').click();
    cy.get('input[data-target="Body Parts Mapping Details"]').type('Front');
    cy.wait(2000);
    cy.contains('div[role="option"]', 'Front')
      .should('be.visible')
      .click({ force: true });
  
    // =======
    cy.get('input[data-target="Body Parts Mapping Details"]').click();
    cy.get('input[data-target="Body Parts Mapping Details"]').type('Sleeve');
    cy.wait(2000);
    cy.contains('div[role="option"]', 'Sleeve')
      .should('be.visible')
      .click({ force: true });
    
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

// ====================Cencel-Amended - again submit===============

// describe('Login and cut plan  with Cencel-Amended - again submit', () => {
//   it('Handles login failure softly and proceeds', () => {
  
//     cy.login()
//     cy.wait(2000)
//     cy.get("input#navbar-search").type("Cut Plan");
//     cy.get('li[aria-selected="true"]').first().click();
//     cy.get('input[data-fieldname="name"]').clear().type('Cutplan-26-06-0834');

//      cy.wait(1000)
//      cy.get('a[data-name="Cutplan-26-06-0834"]').click()
//      cy.wait(1000)
//      cy.get('button[aria-label="Menu"]').eq(2).click()
//      cy.get('span[data-label="Duplicate"] span').eq(1).click()

//     cy.printErrors()
//   })

// })