import {elements} from '../fixtures/elements' 

const fs = require('fs');
const path = require('path');

describe('Pull Requests Test', () => {
  it('should retrieve pull requests and save them in CSV format', () => {
    // Visit the pull requests page
    cy.visit(elements.pullsURL);

    // Use Cypress to get the pull request elements
    cy.get(elements.issueRowSelector).then((pullRequests) => {
      const csvRows = [];
      csvRows.push([elements.pullRequestHeaderTxt, elements.creationDateHeaderTxt, elements.authorHeaderTxt]); // Header row

      pullRequests.each((index, element) => {
        const title = Cypress.$(element).find(elements.issueTitleSelector).text().trim();
        const date = Cypress.$(element).find(elements.issueTimeSelector).attr('datetime');
        const author = Cypress.$(element).find(elements.issueAuthorSelector).text().trim();

        csvRows.push([title, date, author]);
      });

      // Join the CSV rows into a single string
      const csvString = csvRows.map(row => row.join(',')).join('\n');

      // Define the file path
      const filePath = path.join(__dirname, '..', 'downloads', elements.csvFilename);

      // Write the CSV string to a file
      cy.writeFile(filePath, csvString, { encoding: 'utf8' });

      // Log the success message
      cy.log(`CSV file created at: ${filePath}`);
    });
  });
});
