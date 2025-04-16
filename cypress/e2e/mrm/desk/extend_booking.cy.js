import Booking from "../../../pageObject/booking.js";
import LoginPage from "../../../pageObject/login.js";
const loginPage = new LoginPage();
const createBooking = new Booking();


describe("Desks Booking extend  ", () => {
    before(() => {
        cy.fixture("loginPage.json").then((userdata) => {
            cy.visit(Cypress.env("url"));
            loginPage.getEmailInputField(userdata.adminEmail);
            loginPage.getPasswordInputField(userdata.adminPassword);
            loginPage.getsubmitBtn();
            loginPage.getTextVerifyLogin();
        });
    });
    it("should show confirmation message after extend booking", () => {
        cy.contains("More Apps").trigger("mouseover")
        createBooking.getClickOnBookingOptionOfMoreApps()
        cy.get('body').click()
       // cy.url().should('eq','https://ndl.veris.in/meeting-room/find-resource');
        cy.wait(14000)
        createBooking.getRecurringAutomationTower();
        //createBooking.clickOnDefaultStarIcon();
        createBooking.getClickOnStatusDropDown()
        createBooking.selectStatus();
        createBooking.getClickOnResorceDropDown();
        createBooking.getClickOnResourceOptionDesks();
        cy.get('body').click();
        createBooking.getClickOnBookNowBtn();
        createBooking.getClickOnConfirmBookingBtn();
        cy.contains('Booking created successfully',{timeout: 5000}).should('be.visible')
        createBooking.getClickOnCheckInBtn();
        cy.contains('Desk Check in done successfully',{timeout: 5000}).should('be.visible')
        createBooking.getClickOnExtendBtn();
        createBooking.getClickOnMinuteOptions();
        cy.contains('Booking extended succesfully', {timeout: 5000}).should('be.visible');
        cy.contains('In Use, Booking Extended').should('be.visible')
    })
})