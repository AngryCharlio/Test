import {elements} from '../fixtures/elements' 

describe('Status Code Check', () => {
    it('should return a status code of 200 or 30x and not 40x', () => {
      cy.request(elements.baseURL)
        .then((response) => {
          // Assert that the status code is 200 or within the 30x range
          expect(response.status).to.satisfy((status) => {
            return status === 200 || (status >= 300 && status < 400);
          });
  
          // Assert that the status code is not in the 40x range
          expect(response.status).to.satisfy((status) => {
            return status < 400;
          });
        });
    });
  });
  