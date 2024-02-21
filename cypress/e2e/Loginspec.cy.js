/// <reference types="Cypress" />

import HomePage from "./pageObjects/HomePage";
import LoginPage from "./pageObjects/LoginPage";
import MakeAppointmentsPage from "./pageObjects/MakeAppointmentsPage";

const homePage = new HomePage();
const loginPage = new LoginPage();
const makeAppointmentsPage = new MakeAppointmentsPage();

describe("Login Test", function () {
  beforeEach(function () {
    // resolve promise beacuse we are accessing data inside example jsonfile
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });

  it("Login with valid credentials", function () {
    cy.visit(Cypress.env("url")) + "/";
    homePage.clickOnMakeAppointmentButton().click();
    loginPage.verifyloginText().should("have.text", "Login");

    // Created custom command
    cy.login(this.data.username, this.data.password);
  });

  it("Login and Make Appointment", function () {
    cy.visit(Cypress.env("url")) + "/";
    homePage.clickOnMakeAppointmentButton().click();
    loginPage.verifyloginText().should("have.text", "Login");

    cy.login(this.data.username, this.data.password);

    makeAppointmentsPage
      .verifyUserLandedOnMakeAppointmentsPage()
      .should("have.text", "Make Appointment");
    makeAppointmentsPage
      .selectFacilityToMakeAppointment()
      .select("Seoul CURA Healthcare Center")
      .should("have.value", "Seoul CURA Healthcare Center");
    // cy.url().should("include", "appointment");
    makeAppointmentsPage
      .clickOnHospitalReadmission()
      .check()
      .should("be.checked"); // Check the checkbox before logout
    makeAppointmentsPage.selectHealthcareProgram().check().should("be.checked");

    // viewPort(dimension x dimension)

    cy.get("#txt_visit_date")
      .click()
      .each(($el, index, $lists) => {
        const day = cy.get(".day").eq(index);
      });

    // if(cy.get("#datepicker-switch")).include("May")
    // cy.get("div[class='datepicker-days'] th[class='next']").click();

    cy.get("#txt_comment").type("Appointment");
    cy.get("#btn-book-appointment").click();
    cy.get(".col-xs-12.text-center h2").should(
      "have.text",
      "Appointment Confirmation"
    );
  });
});
