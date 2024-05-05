import Navigate from '../pageObjects/navigate';

describe('Table Row Count Test', () => {
    it('Logs the number of table rows and checks if count is 43', () => {
        Navigate.goToServicesPage();

        // Count the number of table rows
        cy.get('table tbody tr').its('length').should('eq', 43).then((rowCount) => {
            cy.log(`The page has ${rowCount} rows`);
        });
    });
});
