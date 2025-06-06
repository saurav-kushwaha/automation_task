
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
    it('should redirect to Quick Reports  page',()=>{
       
       commandPalette.getCommandPalette().click()
       commandPalette.getDownloadsOption().each(($e1, index, $list) => {        
           if($e1.text()==="Quick Reports")
            {
             cy.wrap($e1).click();
            }
        })
        cy.url().should('eq','https://ndl.veris.in/download-center/quick-reports')
   })
   
})