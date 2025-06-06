import Booking from "../../../pageObject/booking.js";
import LoginPage from "../../../pageObject/login.js";
const loginPage = new LoginPage();
const createBooking = new Booking();


describe("Desks ckeckOut ", () => {
    before(() => {
        cy.fixture("loginPage.json").then((userdata) => {
            cy.visit(Cypress.env("url"));
            loginPage.getEmailInputField(userdata.adminEmail);
            loginPage.getPasswordInputField(userdata.adminPassword);
            loginPage.getsubmitBtn();
            loginPage.getTextVerifyLogin();
        });
    });
    it("should show confirmation message after checkOut ", () => {
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
        createBooking.getClickOnConfirmBookingBtn();
        cy.contains('Booking created successfully').should('be.visible')
        createBooking.getClickOnCheckInBtn();
        cy.contains('Desk Check in done successfully').should('be.visible')
        cy.wait(350000)
        createBooking.getClickOnCheckOutBtn();
        cy.contains('Booking ended succesfully').should('be.visible')
    })
})