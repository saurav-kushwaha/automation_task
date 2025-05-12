import LoginPage from "../pageObject/login.js";
const loginPage = new LoginPage();
describe('Login functionality', () => {


    // let userdata;
    // before(()=>{
    // cy.fixture('loginPage.json').then((data)=>{
    //     userdata=data;

    // })
    // })
    it('verify  error messsage by entering incorrect email_id and correct password',()=>{
      cy.fixture('loginPage.json').then((userdata)=>{
        cy.visit(Cypress.env('url'))
        loginPage.getEmailInputField(userdata.invalidAdminEmail);
        loginPage.getPasswordInputField(userdata.adminPassword);
        loginPage.getsubmitBtn();
        cy.contains("The username or password is incorrect").should("be.visible");
      })
        
    })
  })