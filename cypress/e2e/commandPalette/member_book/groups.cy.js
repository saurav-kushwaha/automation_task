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

  it('should redirect to Groups  page',()=>{
       
      commandPalette.getCommandPalette().click()
      commandPalette.getMemberBooksOptions().each(($e1, index, $list) => {        
          if($e1.text()==="Groups")
          {
             cy.wrap($e1).click();
          }
       })
       cy.url().should('eq','https://ndl.veris.in/member-book/groups')
    })  
})