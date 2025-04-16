import LoginPage from "../../../pageObject/login.js";
import CommandPalette from "../../../pageObject/commandPalette.js";
const loginPage = new LoginPage();
const commandPalette = new CommandPalette();

describe(' CommandPalette Functionality',()=>{
    before( () =>{ 
        cy.fixture('loginPage.json').then((userdata)=>{
            cy.visit(Cypress.env('url'))
            loginPage.getEmailInputField(userdata.adminEmail);
            loginPage.getPasswordInputField(userdata.adminPassword);
            loginPage.getsubmitBtn();
            loginPage.getTextVerifyLogin();
        })
    })

   it('Verify  after clicking on refresh page should page get refreshed',()=>{
        commandPalette.getCommandPalette().click()
        cy.url().then((urlBefore) => {
            cy.contains('Refresh Page').scrollIntoView().should('be.visible').click()
            cy.wait(8000)
            cy.url().should('eq', urlBefore);
       
        })
    })  
})
