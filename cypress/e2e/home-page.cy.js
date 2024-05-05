import Navigate from '../pageObjects/navigate';

describe('Home Page Test', () => {
  //checks if logo and paragraph show
  it('Should test logo, paragraph and menu items visibility',() =>{
       Navigate.goToHomePage();

      cy.get('img.logo').should('be.visible');
      cy.get('p.caption').should('be.visible');
      cy.get('ul.leftmenu li').each(($li) => {
        cy.wrap($li).should('be.visible')
      })
  }); 
});

describe('Button Navigation Test', () => {

     //checks if the navigation is correct
    it('Checks if clicking on a button navigates to the correct page', () => {
       Navigate.goToHomePage();
      
      cy.contains('home').click();
      cy.url().should('include', 'index.htm')

      cy.contains('about').click();
      cy.url().should('include', 'about.htm')

      cy.contains('contact').click();
      cy.url().should('include', 'contact.htm')
    });
});
  
  