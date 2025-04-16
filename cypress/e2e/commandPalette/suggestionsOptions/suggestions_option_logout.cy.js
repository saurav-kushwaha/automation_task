import LoginPage from "../../pageObject/login.js";
import CommandPalette from "../../pageObject/commandPalette.js";
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

   it('Verify  after clicking on logOut should redirect to loginPage',()=>{
        commandPalette.getCommandPalette().click()
        cy.contains('Logout').scrollIntoView().should('be.visible').click()
        cy.wait(7000)
        cy.url().should('eq', 'https://ndl.veris.in/');

    })  
})
