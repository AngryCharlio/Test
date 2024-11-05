import {elements} from '../fixtures/elements' 

describe('No Console Errors Test', () => {
  it('should not have console errors when visiting the page', () => {
    cy.visit(elements.baseURL, {
      onBeforeLoad (win) {
        // Stub the console.error method to track any errors
        cy.stub(win.console, 'error').as('consoleError');
      }
    });

    // Check that no console errors were logged
    cy.get('@consoleError').should('have.callCount', 0);
  });
});