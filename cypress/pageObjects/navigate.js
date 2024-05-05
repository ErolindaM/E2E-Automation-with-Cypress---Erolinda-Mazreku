class Navigate {
    goToHomePage() {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
    }
  
    goToRegistrationPage() {
        cy.visit('https://parabank.parasoft.com/parabank/register.htm');
    }

    goToAboutUsPage(){
        cy.visit('https://parabank.parasoft.com/parabank/about.htm');
    }

    goToAdminPage() {
        cy.visit('https://parabank.parasoft.com/parabank/admin.htm');
    }

    goToServicesPage(){
        cy.visit('https://parabank.parasoft.com/parabank/services.htm');
    }

  }
  
  export default new Navigate();
  