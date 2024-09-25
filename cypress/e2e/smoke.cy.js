describe("Smoke tests", () => {
  beforeEach(function () {
    cy.visit("/");
  });

  it("should add a meal", () => {
    cy.getByTestId("meal-cta-button").click();
    cy.getByTestId("meal-input").type("Rice");
    cy.getByTestId("meal-add-button").click();
    cy.getByTestId("meal").contains("Rice").should("be.visible");
  });

  it("should view a recipe", () => {
    cy.getByTestId("recipe-cta-button").click();
    cy.getByTestId("recipe").should("be.visible");
  });

  it("should create a task", () => {
    cy.getByTestId("todo-cta-button").click();
    cy.getByTestId("todo-input").type("Foo");
    cy.getByTestId("todo-low-priority").click();
    cy.getByTestId("todo-create").click();
    cy.getByTestId("todo").contains("Foo").should("be.visible");
  });
});
