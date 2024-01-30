describe("Smoke", () => {
  it("should be visible", () => {
    // Start from the index page
    cy.visit("/");
    cy.get("body").should("be.visible");
  });
});
