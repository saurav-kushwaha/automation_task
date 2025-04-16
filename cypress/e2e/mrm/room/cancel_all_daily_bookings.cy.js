import Booking from "../../../pageObject/booking.js";
import LoginPage from "../../../pageObject/login.js";
const loginPage = new LoginPage();
const createBooking = new Booking();


describe("Room cancel -cancel all daily bookings  ", () => {
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
        createBooking.getClickOnResourceOptionRooms();
        cy.get('body').click();
        createBooking.getClickOnBookNowBtnForRooms();
        createBooking.getRepeatInputFieldDropDown();
        createBooking.getClickOnRepeatDailyOption();
        createBooking.getClickOnConfirmBookingBtnOfRooms();
        cy.contains('Booking created successfully',{timeout: 10000}).should('be.visible')
        createBooking.getClickOnRoomThreeDot();
        createBooking.getClickOnDeleteAllBoking();
        cy.contains('Booking Cancelled succesfully').should('be.visible')
         
    })
})