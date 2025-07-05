// ===================================================

describe("Login and Buying Agent Soft Error Notes", () => {
  it("Login and Buying Agent Soft Error Notes", () => {
    // const uniqueName =
    //   "style_" + Math.random().toString(36).substring(2, 4) + "_" + Date.now();
    // cy.log("🔧 Generated Unique Name:", uniqueName);

    cy.login();
    cy.wait(2000);

    cy.get("input#navbar-search").type("Buying Agent");
    cy.get('li[aria-selected="true"]').first().click();
    cy.get('button[data-label="Add Buying Agent"]').click();

    // agent name   
const nameList = ["Tanvir", "Sabbir", "Rafi", "Nadia", "Sumaiya", "Hasan", "Rumana", "Nashit", "Tania"];
const randomName = nameList[Math.floor(Math.random() * nameList.length)];
const randomCode_0 = Date.now().toString().slice(-4);
const uniqueAgentName = `Agent-${randomName}-${randomCode_0}`;

cy.get('input[data-fieldname="partner_name"]').click().type(uniqueAgentName);

// patner code

cy.get('input[data-fieldname="partner_type"]').eq(1).click();
cy.get('div[role="option"]').contains("Agent").click();

// territory
cy.get('input[data-fieldname="territory"]').eq(1).click();
cy.get('div[role="option"]').contains("All Territories").click();


// agent type
cy.get('select[data-fieldname="agent_type"]').select('Foreign');


// commition rate
cy.get('input[data-fieldname="commission_rate"]').type("25000");

// country

cy.get('input[data-fieldname="country"]').clear().click();
cy.get('div[role="option"]').contains("Canada").click();  


// address& contact
cy.contains('button', 'Add Row').eq(0).click();

        cy.get('div[data-fieldname="first_name"]').eq(1).click().type("Sinwar");
        cy.get('input[placeholder="Email Address"]').click().type("Hamas@gmail.com");
        cy.get('input[placeholder="Mobile No"]').click().type("1234567890");
        cy.get('input[placeholder="Is Primary Contact"]').click();
        cy.get('input[placeholder="Address"]').click().type("Gaza Strip, palestine");
        cy.get('input[placeholder="Is Primary Address"]').click();
  
// sales patner target
cy.get("div:nth-child(2)>div:nth-child(1)>form:nth-child(1)>div:nth-child(1)>div:nth-child(2)>div:nth-child(6)>div:nth-child(1)>div:nth-child(1)>button:nth-child(3)").click()
cy.get('div[data-fieldname="item_group"]').eq(1).click({force: true});
cy.get('div[role="option"]').contains("All Item Groups").click(); 
cy.get('input[data-fieldname="fiscal_year"]').click();
cy.get('div[role="option"]').contains("2024-2025").click();
cy.get('input[data-fieldname="target_qty"]').click().type("1000");
cy.get('input[data-fieldname="target_amount"]').click().type("1000000");


// reference code
const userName = "code";
const randomCode01 = Math.floor(10 + Math.random() * 900);
const referralCode = `R-${userName}-${randomCode01}`;
cy.get('input[data-fieldname="referral_code"]').clear().type(referralCode);


    cy.printErrors();
  });
});
