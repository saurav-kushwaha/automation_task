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
        cy.wait(14000)
        createBooking.getRecurringAutomationTower();
        //createBooking.clickOnDefaultStarIcon();
        createBooking.getClickOnStatusDropDown()
        createBooking.selectStatus();
        createBooking.getClickOnResorceDropDown();
        createBooking.getClickOnResourceOptionDesks();
        cy.get('body').click();
        createBooking.getClickOnBookNowBtn();
        createBooking.getClickONWeeklyRadioBtn().click()
        createBooking.getClickOnConfirmBookingBtn();
        cy.contains('Booking created successfully',{timeout: 10000}).should('be.visible')
        cy.wait(3000)
        createBooking.getClickOnThreeDotsBtn();
        createBooking.getClickOnDeleteAllBoking();
        cy.contains('All Booking Cancelled succesfully').should('be.visible');
        cy.contains('RA Desk 034').should('not.exist');
    })
})