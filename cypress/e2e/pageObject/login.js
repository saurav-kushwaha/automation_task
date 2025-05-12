class LoginPage{
 
  txtEmailId='input[type="text"]';
  txtPassword='input[id="Password"]';
  txtSubmitBtn='button[type="submit"]';
  txtVerifyLogin='.vms-v4  > .ant-space > .ant-space-item > .sc-iqyJx';
  
  getEmailInputField(userEmail)
  {
    return cy.get(this.txtEmailId).clear().type(userEmail,{ log: false })
  }

  getPasswordInputField(userPassword)
  {
    return cy.get(this.txtPassword).clear().type(userPassword,{ log: false })
  }
 
  getsubmitBtn()
  {
    return cy.get(this.txtSubmitBtn).click()

  }
  
 getTextVerifyLogin(){
  return cy.contains("Visitors",{ timeout: 50000 })
  .should('be.visible')
  
 }
}
export default LoginPage;