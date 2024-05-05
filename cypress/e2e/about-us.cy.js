import Navigate from '../pageObjects/navigate';

describe('About Us Page Tests', () => {
    beforeEach(() => {
        Navigate.goToAboutUsPage();;
    });

    it('Should confirm the About Us page loads', () => {
        cy.contains('ParaSoft Demo Website').should('be.visible');    

    });

    it('Should confirm the paragraph is visible', () => {
        cy.contains("ParaBank is a demo site used for demonstration of Parasoft software solutions.").should('be.visible');

    });
    
  });
  