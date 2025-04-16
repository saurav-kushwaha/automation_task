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

   it('Verify  after clicking on Plan ahead—book your space should redirect to book space page',()=>{
        commandPalette.getCommandPalette().click()
        commandPalette.getSuggestionOption().each(($e1, index, $list) => {
            if($e1.text()==="Plan ahead—book your space.")
            {
            cy.wrap($e1).click();
            }
        })
        cy.url().should('eq','https://ndl.veris.in/meeting-room/find-resource')
       
    })  
})
