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

   it('should redirect ot create activity page',()=>{
       
      commandPalette.getCommandPalette().click()
      commandPalette. getVmsOption().each(($e1, index, $list) => {        
         if($e1.text()==="Activities")
           {
              cy.wrap($e1).click();
            }

       })
        commandPalette.getActivitiesOption().each(($e1, index, $list) => {        
          if($e1.text()==="Create Activity")
            {
              cy.wrap($e1).should('be.visible').click();
            }

        })
        cy.url().should('eq','https://ndl.veris.in/vms-v4/activities?module=create-activity')
   
        
    })
})