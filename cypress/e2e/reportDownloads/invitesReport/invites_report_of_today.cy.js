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

    it('should show confirmation message of quick report  after clicking on download for button of Invites Report with today',()=>{
        cy.wait(5000)
        quickReport.getClickOnDownloadCenter();
        quickReport.getClickOnQuickReport();
        quickReport.verifyTitleText().eq(15).should("contain.text", "Invites Report")
        quickReport.getClickOnDatePicker().eq(11).click();
        quickReport.getClickOnToday();
        cy.wait(3000)
        quickReport.getClickOnToday();
        quickReport.getClickOnDownloadForBtn().eq(11).click();
        quickReport.verifySuccessMessage();
        
    })
})