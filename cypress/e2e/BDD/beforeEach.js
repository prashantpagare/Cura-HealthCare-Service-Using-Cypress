beforeEach(() => {
  // resolve promise beacuse we are accessing data inside example jsonfile
  cy.fixture("example").then(function (data) {
    this.data = data;
  });
});
