import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

import HomePage from "../pageObjects/HomePage";
import LoginPage from "../pageObjects/LoginPage";
import MakeAppointmentsPage from "../pageObjects/MakeAppointmentsPage";

const homePage = new HomePage();
const loginPage = new LoginPage();
const makeAppointmentsPage = new MakeAppointmentsPage();

beforeEach(function () {
  // resolve promise beacuse we are accessing data inside example jsonfile
  cy.fixture("example").then(function (data) {
    this.data = data;
  });
});

Given("user is on Landing Page", function () {
  cy.visit(Cypress.env("url")) + "/";
  homePage.clickOnMakeAppointmentButton().click();
  loginPage.verifyloginText().should("have.text", "Login");
});

When("user enters valid username and valid password", function () {
  cy.login(this.data.username, this.data.password);
});

Then("user is logged into the Application", function () {
  makeAppointmentsPage
    .verifyUserLandedOnMakeAppointmentsPage()
    .should("have.text", "Make Appointment");
});
