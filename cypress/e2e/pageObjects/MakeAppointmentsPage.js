class MakeAppointmentsPage {
  verifyUserLandedOnMakeAppointmentsPage() {
    return cy.get(".col-sm-12.text-center h2");
  }

  selectFacilityToMakeAppointment() {
    return cy.get("select");
  }

  clickOnHospitalReadmission() {
    return cy.get("#chk_hospotal_readmission");
  }

  selectHealthcareProgram() {
    return cy.get("input[value='Medicaid']");
  }
}

export default MakeAppointmentsPage;
