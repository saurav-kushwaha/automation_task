import Booking from "../../../pageObject/booking.js";
import LoginPage from "../../../pageObject/login.js";
const loginPage = new LoginPage();
const createBooking = new Booking();


describe("Room checkIn", () => {
    before(() => {
        cy.fixture("loginPage.json").then((userdata) => {
            cy.visit(Cypress.env("url"));
            loginPage.getEmailInputField(userdata.adminEmail);
            loginPage.getPasswordInputField(userdata.adminPassword);
            loginPage.getsubmitBtn();
            loginPage.getTextVerifyLogin();
        });
    });
    it("should show confirmation message after check-In booking", () => {
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
        createBooking.getClickOnResourceOptionRooms();
        cy.get('body').click();
        createBooking.getClickOnBookNowBtnForRooms();
        createBooking.getClickOnConfirmBookingBtnOfRooms();
        cy.contains('Booking created successfully').should('be.visible')
        createBooking.getClickOnCheckInBtn();
        cy.contains('Room Check in done successfully').should('be.visible')
        cy.contains('In Use').should('be.visible');
        cy.contains("RA Room 018").should("exist")
    })
})