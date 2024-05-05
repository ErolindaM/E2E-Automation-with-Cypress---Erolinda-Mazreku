class Buttons{
        clickLoginButton(){
            cy.get('input[value="Log In"]').click();
        }

        clickRegisterButton() {
            cy.get('input[value="Register"]').click();
          }
        
        clickLogoutButton(){
            cy.contains('Log Out').click();
        }
    }
    export default new Buttons();