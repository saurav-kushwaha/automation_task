import Booking from "../../../pageObject/booking.js";
import LoginPage from "../../../pageObject/login.js";
const loginPage = new LoginPage();
const createBooking = new Booking();


describe("Desks cancel - cancel all weekly booking ", () => {
    before(() => {
        cy.fixture("loginPage.json").then((userdata) => {
            cy.visit(Cypress.env("url"));
            loginPage.getEmailInputField(userdata.adminEmail);
            loginPage.getPasswordInputField(userdata.adminPassword);
            loginPage.getsubmitBtn();
            loginPage.getTextVerifyLogin();
        });
    });
    it("should show confirmation message after cancelling all booking", () => {
        cy.contains("More Apps").trigger("mouseover")
        createBooking.getClickOnBookingOptionOfMoreApps()
        cy.get('body').click()
       // cy.url().should('eq','https://ndl.veris.in/meeting-room/find-resource');
        createBooking.getRecurringAutomationTower();
        createBooking.getClickOnRecurringAutomationFloor();
        //createBooking.clickOnDefaultStarIcon();
        createBooking.getClickOnStatusDropDown()
        createBooking.selectStatus();
        createBooking.getClickOnResorceDropDown();
        createBooking.getClickOnResourceOptionDesks();
        cy.get('body').click();
        createBooking.getClickOnBookNowBtn();
        createBooking.getClickONWeeklyRadioBtn().click()
        createBooking.getClickOnConfirmBookingBtn();
        cy.contains('Booking created successfully').should('be.visible')
        createBooking.getClickOnThreeDotsBtn();
        createBooking.getClickOnDeleteAllBoking();
        cy.contains('All Booking Cancelled succesfully').should('be.visible');
        
    })
})