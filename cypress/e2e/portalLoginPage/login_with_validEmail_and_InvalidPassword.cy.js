import LoginPage from "../../pageObject/login.js";
const loginPage = new LoginPage()
describe('Login functionality', () => {

  it('verify  error messsage by entering correct email_id and incorrect password',()=>{
          cy.fixture('loginPage.json').then((userdata)=>{
            cy.visit(Cypress.env('url'))
            loginPage.getEmailInputField(userdata.adminEmail);
            loginPage.getPasswordInputField(userdata.invalidAdminPassword);
            loginPage.getsubmitBtn();
            cy.contains("Invalid credentials.").should("be.visible");
          })
        
  })
   
})