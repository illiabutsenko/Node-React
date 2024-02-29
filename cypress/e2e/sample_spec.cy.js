// describe("My first test", () => {
// it("Visits sample website", () => {
// cy.visit("https://example.cypress.io");
// cy.contains("type").click();

// cy.url().should("include", "/commands/actions");

// cy.get(".action-email")
//   .type("hello@cypress.io")
//   .should("have.value", "hello@cypress.io");
// });
// });

describe("Donate test", () => {
  it("Redirect to https://wikipedia.org checking", () => {
    cy.visit("https://wikipedia.org");
    cy.contains("donation").invoke("removeAttr", "target").click();

    cy.origin("donate.wikimedia.org", () => {
      cy.url().should("include", "donate.wikimedia.org");
    });
  });
});
