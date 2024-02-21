class LoginPage {
  verifyloginText() {
    return cy.get(".col-sm-12.text-center h2");
  }

  enterUsernameInTxtFld(username) {
    return cy.get("#txt-username");
  }

  enterPasswordInTxtFld(password) {
    return cy.get("#txt-password");
  }

  enterUsernameInTxtFld() {
    return cy.get("#btn-login");
  }
}

export default LoginPage;
