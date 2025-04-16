import LoginPage from "../../pageObject/login.js";
const loginPage = new LoginPage()
describe('Login functionality', () => {

    it('validate error message by entering correct email id and incorrect password consecutive three times then user should be blocked for two minutes',()=>{
      cy.fixture('loginPage.json').then((userdata)=>{
          cy.visit(Cypress.env('url'))
           for(let i=0;i<2;i++){
               loginPage.getEmailInputField(userdata.adminEmail);
               loginPage.getPasswordInputField(userdata.invalidAdminPassword);
               loginPage.getsubmitBtn();
               cy.contains("Invalid credentials.",{ timeout: 70000 }).should("be.visible");
            }
            loginPage.getEmailInputField(userdata.adminEmail);
            loginPage.getPasswordInputField(userdata.invalidAdminPassword);
            loginPage.getsubmitBtn();
            cy.contains("User blocked! try after2minutes",{ timeout: 70000 }).should("be.visible");

      })
                
           
        
    })
})