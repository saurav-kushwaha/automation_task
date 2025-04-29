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

    it('should show confirmation message of quick report  after clicking on download for button of DR Visitor Report (Genpact Internal Visitor, External Visitor, Vendor) with this week',()=>{
        cy.wait(5000)
        quickReport.getClickOnDownloadCenter();
        quickReport.getClickOnQuickReport();
        quickReport.verifyTitleText().eq(10).should("contain.text", "DR Visitor Report (Genpact Internal Visitor, External Visitor, Vendor)")
        quickReport.getClickOnDatePicker().eq(6).click();
        quickReport.getClickOnThisWeek();
        quickReport.getClickOnDownloadForBtn().eq(6).click();
        quickReport.verifySuccessMessage();
        
    })
})