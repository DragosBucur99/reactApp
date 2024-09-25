Cypress.Commands.add("getByTestId", (selector, ...args) => {
  return cy.get(`[data-cy=${selector}]`, ...args);
});
