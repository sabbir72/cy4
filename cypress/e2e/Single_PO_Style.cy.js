// describe('Single product style create Test', () => {
//   it('Visits login page and Style page', () => {
//     // cy.visit("https://stagev15.inctl.net/");

//     // cy.get("input#login_email").type("Administrator");

//     // cy.get("input#login_password").type("admin");

//     // cy.contains("button", "Login").click();
//     cy.login()
//     cy.wait(1000);

//     cy.get("input#navbar-search").type("Style");

//     cy.wait(1000);

//     cy.get('li[aria-selected="true"]').first().click();

//     cy.get('button[data-label="Add Style"]').click();

//     cy.get('select[data-fieldname="type"]').select("Single Product");

//     //    uniq name make
//     const uniqueName ="style_" + Math.random().toString(10).substring(2, 4) + "_" + Date.now();
//     cy.log('Generated Name:', uniqueName)
//     cy.get('input[data-fieldname="style_name"]').type(uniqueName);
//     cy.wait(1000);
//     cy.get('input[data-fieldname="style_no"]').type(uniqueName);

//     cy.get('input[data-fieldname="item_type"]').click().type("Jacket");

//     cy.get('input[data-fieldname="customer"]').click().type("JACK & JONES");

//     cy.get('input[data-fieldname="item_department"]').click().type("Men's Wear");

//     cy.wait(1000);
    
//     // without items submit try
//     cy.get('button[data-label="Save"] span').eq(0).click()
//     cy.get('div.msgprint').should('be.visible').and('contain.text', 'Please fill Add atleast one item in the Style Item Table.');
//     cy.wait(1000)
//     cy.get('button[data-dismiss="modal"]').click({force:true});



//     cy.then(()=>{
//       const styleItems=cy.softCheck('button.grid-add-row',"Success Check" )

//       if (styleItems){
//         //  1st items
        
//     cy.get("button.grid-add-row").eq(0).click();
//     cy.get("div:nth-child(1)>form:nth-child(1)>div:nth-child(1)>div:nth-child(1)>div:nth-child(2)>div:nth-child(1)>div:nth-child(1)>div:nth-child(1)>input:nth-child(1)").click().type('0082')
//     cy.get('p[title="Eid-Shirt-25"]').click()
//     cy.get("div:nth-child(1)>form:nth-child(1)>div:nth-child(1)>div:nth-child(1)>div:nth-child(2)>div:nth-child(1)>div:nth-child(1)>div:nth-child(1)>input:nth-child(1)").invoke('attr','value',"RMG-0082")


//     // color select
//     cy.get('input[data-fieldname="colors_html_fields"]').click();
//     cy.get('div[role="option"]').contains("Black").click();
//     cy.get('div[role="option"]').contains("Red").click();

//     // size select
//     cy.get('input[data-fieldname="sizes_html_fields"]').click()
//     cy.get('div[role="option"]').contains("12").click();
//     cy.get('div[role="option"]').contains("10").click();
//     cy.wait(1000)
//    cy.contains('button', 'Insert Below').click({force:true})
//   //  cy.wait(3000)
    

//     // 2nd item
     
//     // cy.get("button.grid-add-row").eq(0).click();
//     cy.get('input[aria-expanded="true"]').click().type('0075')
  
//    cy.get('p[title="SHIRT-809672"]').click()
//     cy.get("div:nth-child(1)>form:nth-child(1)>div:nth-child(1)>div:nth-child(1)>div:nth-child(2)>div:nth-child(1)>div:nth-child(1)>div:nth-child(1)>input:nth-child(1)").invoke('attr','value',"RMG-0075")


//     // color select
  
//     cy.get('input[data-target="Style Colors"]').eq(1).click().type("Blue")
  


//     // size select
//     cy.get('input[data-fieldname="sizes_html_fields"]').eq(1).click()
//     cy.get('div[role="option"]').contains("10").click();
//     cy.wait(1000)

//     cy.get("div:nth-child(5)>div:nth-child(1)>div:nth-child(2)>div:nth-child(1)>div:nth-child(2)>div:nth-child(2)>div:nth-child(1)").click({force:true})
     
//     cy.get('button[data-label="Save"] span').eq(0).click()
//      cy.wait(1000)
//    cy.get('button[data-original-title="Print"]').scrollIntoView().click()
   
//       }
//     })

//     cy.printErrors()

//   })
// })



// ======================dublicate =============================

describe('Login and Style Test with dublicate', () => {
  it('Handles login failure softly and proceeds', () => {
  
     cy.login()
     cy.wait(2000)
     cy.get("input#navbar-search").type("Style");
     cy.get('li[aria-selected="true"]').first().click();
      
   cy.get('input[data-fieldname="name"]').clear().type('style_72_1750823588600-1');

     cy.wait(1000)
     cy.get('a[data-name="style_72_1750823588600-1"]').click()
     cy.wait(1000)
     cy.get('button[aria-label="Menu"]').eq(2).click()
     cy.get('span[data-label="Duplicate"] span').eq(1).click()

    cy.printErrors()
  })

})


describe('Login and Style Test with Cencel-Amended - again submit', () => {
  it('Handles login failure softly and proceeds', () => {
  
     cy.login()
     cy.wait(2000)
     cy.get("input#navbar-search").type("Style");
     cy.get('li[aria-selected="true"]').first().click();
      
   cy.get('input[data-fieldname="name"]').clear().type('style_72_1750823588600-1');

     cy.wait(1000)
     cy.get('a[data-name="style_72_1750823588600-1"]').click()
     cy.wait(1000)
     cy.get('button[aria-label="Menu"]').eq(2).click()
     cy.get('span[data-label="Duplicate"] span').eq(1).click()

    cy.printErrors()
  })

})