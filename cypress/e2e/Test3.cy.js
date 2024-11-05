import {elements} from '../fixtures/elements' 

describe('Login Test', () => {
    it('should log in with valid credentials', () => {
      // Visit the login page
      cy.visit(elements.loginURL);
  
      // Enter the username and password
      cy.get(elements.userNameSelector).type(elements.userNameTxt);
      cy.get(elements.passwordSelector).type(elements.passwordText);
  
      // Click the login button
      cy.get(elements.loginSubmitButton).click();
  
      // Verify successful login
      // Replace this with the actual verification based on the app's behavior
      cy.url().should('include', elements.accountURL); // Update to the expected URL after login
      cy.contains(elements.welcomeMessageTxt); // Update to the expected welcome message
    });
  });