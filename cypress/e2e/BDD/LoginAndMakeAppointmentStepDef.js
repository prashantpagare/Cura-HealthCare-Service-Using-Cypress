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

Given("user is logged into Application", function () {
  cy.visit(Cypress.env("url")) + "/";
  homePage.clickOnMakeAppointmentButton().click();
  loginPage.verifyloginText().should("have.text", "Login");
  cy.login(this.data.username, this.data.password);
});

When("user select Facility from dropdown", function () {
  makeAppointmentsPage
    .selectFacilityToMakeAppointment()
    .select("Seoul CURA Healthcare Center")
    .should("have.value", "Seoul CURA Healthcare Center");
});

When("user select hospital readmission checkbox", function () {
  makeAppointmentsPage
    .clickOnHospitalReadmission()
    .check()
    .should("be.checked");
});

When("user select Healthcare Program from radiobutton", function () {
  makeAppointmentsPage.selectHealthcareProgram().check().should("be.checked");
});

When("user select visit Date", function () {
  makeAppointmentsPage.selectHealthcareProgram().check().should("be.checked");
});

When("user add a comment", function () {
  makeAppointmentsPage.selectHealthcareProgram().check().should("be.checked");
});

When("user clicks on booked an appointment", function () {
  makeAppointmentsPage.selectHealthcareProgram().check().should("be.checked");
});

When("The system successfully books the appointment.", function () {
  makeAppointmentsPage.selectHealthcareProgram().check().should("be.checked");
});
