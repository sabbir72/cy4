describe('Set product style create Test', () => {
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

    cy.get('select[data-fieldname="type"]').select("Set Product");

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

    // without items submit try
    cy.get('button[data-label="Save"] span').eq(0).click()
    cy.get('div.msgprint').should('be.visible').and('contain.text', 'Mandatory fields required in Style');
    cy.wait(1000)
    cy.get('button[data-dismiss="modal"]').click({force:true});


    cy.then(()=>{
      const setItems=cy.softCheck('button.grid-add-row',"Success Check" )

      if (setItems){
        //  set items
    cy.get("button.grid-add-row").eq(1).click();
    cy.get('input[data-fieldname="item_code"]').type("0033");
    cy.get('p[title="Men hoodie jacket"]').first().click();
    cy.get('input[data-fieldtype="Float"]').click().type("1");
    // Type text
    cy.get('input[data-fieldname="item_type"]').eq(1).type("Jacket");
    cy.get('input[data-fieldname="item_department"]').eq(1).click().type("Men's Wear");
    cy.contains('button', 'Insert Below').click()


    // 2nd Item
    cy.get('input[aria-expanded="true"]').type('0091')
    cy.contains('strong', 'Sandstorm Cargo Pant').first().click();

    cy.get('input[data-fieldtype="Float"]').eq(1).click().type("1");

    cy.get('input[data-fieldname="item_type"]').eq(2).type("Basic Pant");

    cy.get('input[data-fieldname="item_department"]').eq(2).type("Men's Wear");

    cy.get("div:nth-child(2)>div:nth-child(2)>div:nth-child(1)>div:nth-child(1)>span:nth-child(2)>button:nth-child(1)").click()
    cy.contains('button', 'Save').click();

   cy.wait(1000)
   cy.get('button[data-original-title="Print"]').scrollIntoView().click()
      }
    })

    cy.printErrors()

  })
})



