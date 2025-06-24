describe('Single product style create Test', () => {
  it('Visits login page and Style page', () => {
    // cy.visit("https://stagev15.inctl.net/");

    // cy.get("input#login_email").type("Administrator");

    // cy.get("input#login_password").type("admin");

    // cy.contains("button", "Login").click();
    cy.login()
    cy.wait(1000);

    cy.get("input#navbar-search").type("Style");

    cy.wait(1000);

    cy.get('li[aria-selected="true"]').first().click();

    cy.get('button[data-label="Add Style"]').click();

    cy.get('select[data-fieldname="type"]').select("Single Product");

    //    uniq name make
    const uniqueName ="style_" + Math.random().toString(10).substring(2, 4) + "_" + Date.now();
    cy.log('Generated Name:', uniqueName)
    cy.get('input[data-fieldname="style_name"]').type(uniqueName);
    cy.wait(1000);
    cy.get('input[data-fieldname="style_no"]').type(uniqueName);

    cy.get('input[data-fieldname="item_type"]').click().type("Jacket");

    cy.get('input[data-fieldname="customer"]').click().type("JACK & JONES");

    cy.get('input[data-fieldname="item_department"]').click().type("Men's Wear");

    cy.wait(1000);

    cy.then(()=>{
      const styleItems=cy.softCheck('button.grid-add-row',"Success Check" )

      if (styleItems){
        //  1st items
        
    cy.get("button.grid-add-row").eq(0).click();
    cy.get("div:nth-child(1)>form:nth-child(1)>div:nth-child(1)>div:nth-child(1)>div:nth-child(2)>div:nth-child(1)>div:nth-child(1)>div:nth-child(1)>input:nth-child(1)").click().type('0082')
    cy.get('p[title="Eid-Shirt-25"]').click()
    cy.get("div:nth-child(1)>form:nth-child(1)>div:nth-child(1)>div:nth-child(1)>div:nth-child(2)>div:nth-child(1)>div:nth-child(1)>div:nth-child(1)>input:nth-child(1)").invoke('attr','value',"RMG-0082")


    // color select
    cy.get('input[data-fieldname="colors_html_fields"]').click();
    cy.get('div[role="option"]').contains("Black").click();
    cy.get('div[role="option"]').contains("Red").click();

    // size select
    cy.get('input[data-fieldname="sizes_html_fields"]').click()
    cy.get('div[role="option"]').contains("12").click();
    cy.get('div[role="option"]').contains("10").click();
    cy.wait(1000)
   cy.contains('button', 'Insert Below').click({force:true})
  //  cy.wait(3000)
    

    // 2nd item
     
    // cy.get("button.grid-add-row").eq(0).click();
    cy.get('input[aria-expanded="true"]').click().type('0075')
  //  cy.get('input[data-fieldname="item_code"]').click().type('0075')
   cy.get('p[title="SHIRT-809672"]').click()
    cy.get("div:nth-child(1)>form:nth-child(1)>div:nth-child(1)>div:nth-child(1)>div:nth-child(2)>div:nth-child(1)>div:nth-child(1)>div:nth-child(1)>input:nth-child(1)").invoke('attr','value',"RMG-0075")


    // color select
    cy.get('input[data-fieldname="colors_html_fields"]').click();
    cy.get('div[role="option"]').contains("Blue").click();
    cy.get('div[role="option"]').contains("Red").click();

    // size select
    cy.get('input[data-fieldname="sizes_html_fields"]').click()
    cy.get('div[role="option"]').contains("10").click();
    cy.get('div[role="option"]').contains("M").click();
    cy.wait(1000)
    cy.get('button.grid-collapse-row').click()



    // cy.contains('button', 'Insert Below').click()


    // // 2nd Item
    // cy.get('input[aria-expanded="true"]').type('0091')
    // cy.contains('strong', 'Sandstorm Cargo Pant').first().click();

    // cy.get('input[data-fieldtype="Float"]').eq(1).click().type("1");

    // cy.get('input[data-fieldname="item_type"]').eq(2).type("Basic Pant");

    // cy.get('input[data-fieldname="item_department"]').eq(2).type("Men's Wear");

    // cy.get("div:nth-child(2)>div:nth-child(2)>div:nth-child(1)>div:nth-child(1)>span:nth-child(2)>button:nth-child(1)").click()
    // cy.contains('button', 'Save').click();
      }
    })

    cy.printErrors()

  })
})



