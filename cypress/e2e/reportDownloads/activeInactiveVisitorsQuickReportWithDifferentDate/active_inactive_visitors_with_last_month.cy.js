import LoginPage from "../../pageObject/login.js";
import QuickReport from "../../pageObject/quick_report.js";
const quickReport = new QuickReport();
const loginPage = new LoginPage();

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

    it('should show confirmation message of quick report  after clicking on download for button of Active/Inactive Visitors with last month',()=>{
       
        quickReport.getClickOnDownloadCenter();
        quickReport.getClickOnQuickReport();
        quickReport.verifyTitleText().eq(5).should("contain.text", "Active/Inactive Visitors")
        quickReport.getClickOnDatePicker().eq(1).click();
        quickReport.getClickOnLastMonth();
        quickReport.getClickOnDownloadForBtn().eq(1).click();
        quickReport.verifySuccessMessage();
        
    })
})