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
    it('should open send feedBack page',()=>{
       
        commandPalette.getCommandPalette().click()
        cy.contains('Send Feedback').scrollIntoView().should('be.visible').click()
        cy.contains('Report a bug').should('be.visible').and('exist')
        
        
    })
})