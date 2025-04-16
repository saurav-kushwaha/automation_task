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

    it('should display searched result',()=>{
       
        commandPalette.getCommandPalette().click()
        commandPalette.getSearchInput().should('have.attr','placeholder','What do you need?').and('be.visible').type("Logout")
        commandPalette.getSearchInput().should('have.value','Logout')
       
       
    })
})
