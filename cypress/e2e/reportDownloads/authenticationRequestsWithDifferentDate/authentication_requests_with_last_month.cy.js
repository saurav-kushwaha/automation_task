import LoginPage from "../../../pageObject/login.js";
import QuickReport from "../../../pageObject/quick_report.js";
const quickReport = new QuickReport();
const loginPage = new LoginPage()

describe('Portal Downloads : quick reports  ', () => {
    before( () =>{ 
        cy.fixture('loginPage.json').then((userdata)=>{
            cy.visit(Cypress.env('url'))
            loginPage.getEmailInputField(userdata.adminEmail);
            loginPage.getPasswordInputField(userdata.adminPassword);
            loginPage.getsubmitBtn();
            loginPage.getTextVerifyLogin();
        })
    })

    it('should show confirmation message of quick report  after clicking on download for button of Authentication Requests with last month',()=>{
        cy.wait(5000)
        quickReport.getClickOnDownloadCenter();
        quickReport.getClickOnQuickReport();
        quickReport.verifyTitleText().eq(6).should("contain.text", "Authentication Requests")
        quickReport.getClickOnDatePicker().eq(2).click();
        quickReport.getClickOnLastMonth();
        quickReport.getClickOnDownloadForBtn().eq(2).click();
        quickReport.verifySuccessMessage();
        
    })
})