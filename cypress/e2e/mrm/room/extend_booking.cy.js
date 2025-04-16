import Booking from "../../../pageObject/booking.js";
import LoginPage from "../../../pageObject/login.js";
const loginPage = new LoginPage();
const createBooking = new Booking();


describe("Room Booking extend  ", () => {
    before(() => {
        cy.fixture("loginPage.json").then((userdata) => {
            cy.visit(Cypress.env("url"));
            loginPage.getEmailInputField(userdata.adminEmail);
            loginPage.getPasswordInputField(userdata.adminPassword);
            loginPage.getsubmitBtn();
            loginPage.getTextVerifyLogin();
        });
    });
    it("should show confirmation message after extending booking", () => {
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
        createBooking.getClickOnResourceOptionRooms();
        cy.get('body').click();
        createBooking.getClickOnBookNowBtnForRooms();
        createBooking.getClickOnConfirmBookingBtnOfRooms();
        cy.contains('Booking created successfully',{timeout: 10000}).should('be.visible')
        createBooking.getClickOnCheckInBtn();
        cy.contains('Room Check in done successfully',{timeout:7000}).should('be.visible')
        createBooking.getClickOnExtendBtn();
        createBooking.getClickOnMinuteOptions();
        cy.contains('Booking extended succesfully',{timeout:7000}).should('be.visible');
        cy.contains('In Use, Booking Extended').should('be.visible')
    })
})