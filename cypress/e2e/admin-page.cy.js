import Navigate from '../pageObjects/navigate';

describe('Admin-Page Test', () => {
    it('should click a button, select a radio button, choose an option from drop down, and submit the form', () => {
      Navigate.goToAdminPage();
  
      cy.get('button[value="INIT"]').should('be.visible').click()
      cy.get('#accessMode4').should('be.visible').check()
      cy.get('#loanProvider').should('be.visible').select('local') 
      cy.get('#loanProcessor').should('be.visible').select('combined') 

      cy.get('input[value="Submit"]').should('be.visible').click()

      
    })
  })