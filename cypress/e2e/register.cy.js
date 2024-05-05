import registerPage from '../pageObjects/register';
import Navigate from '../pageObjects/navigate';
import Buttons from '../pageObjects/buttons';


describe('Login and Registration Test', () => {
  beforeEach(() => {
    Navigate.goToRegistrationPage();
  });

  it('should register successfully', () => {
    const firstName=registerPage.fillFirstName();
    const lastName=registerPage.fillLastName();
    registerPage.fillAddress();
    registerPage.fillCity();
    registerPage.fillState();
    registerPage.fillZipCode();
    registerPage.fillPhoneNumber();
    registerPage.fillSSN();
    const username =  registerPage.fillUsername();
    const password = registerPage.fillPassword();
    registerPage.fillRepeatedPassword();

    Buttons.clickRegisterButton();
   
    registerPage.registrationConfirmationMessage().should('be.visible');

    Buttons.clickLogoutButton();

    
    registerPage.fillLoginUsername(username);
    registerPage.fillLoginPassword(password);
    Buttons.clickLoginButton();
   
    registerPage.welcomeMessage(firstName , lastName);
  });

  it('should show error message for invalid username', () => {

    const username = faker.internet.userName();

    registerPage.fillFirstName();
    registerPage.fillLastName();
    registerPage.fillAddress();
    registerPage.fillCity();
    registerPage.fillState();
    registerPage.fillZipCode();
    registerPage.fillPhoneNumber();
    registerPage.fillSSN();
    registerPage.fillUsername(username);
    registerPage.fillPassword();
    registerPage.fillRepeatedPassword();

    Buttons.clickRegisterButton();

    registerPage.registrationUsernameErrorMessage().should('be.visible')
  });

  it('should show error message for missing fields', () =>{
    registerPage.fillFirstName();
    registerPage.fillLastName();
    Buttons.clickRegisterButton();

    registerPage.requiredFieldsMessage().should('be.visible')
  });

  it('should register successfully when non-required fields are not filled',()=>{
    registerPage.fillFirstName();
    registerPage.fillLastName();
    registerPage.fillAddress();
    registerPage.fillCity();
    registerPage.fillState();
    registerPage.fillZipCode();
    registerPage.fillSSN();
    registerPage.fillUsername();
    registerPage.fillPassword(); 
    registerPage.fillRepeatedPassword();

    Buttons.clickRegisterButton();
   
    registerPage.registrationConfirmationMessage().should('be.visible');
  });

  it('should display error message when password is not confirmed twice',()=>{
    registerPage.fillFirstName();
    registerPage.fillLastName();
    registerPage.fillAddress();
    registerPage.fillCity();
    registerPage.fillState();
    registerPage.fillZipCode();
    registerPage.fillSSN();
    registerPage.fillUsername();
    registerPage.fillPassword();
    registerPage.fillDifferentPassword(); 

    Buttons.clickRegisterButton();
   
    registerPage.passwordNotMatchingMessage().should('be.visible');
  });

  it('should login with valid credentials',() => {
    registerPage.fillValidLoginUsername();
    registerPage.fillValidLoginPassword();

    Buttons.clickLoginButton();
    const firstName="test";
    const lastName="test";
    registerPage.welcomeMessage(firstName,lastName);
    });

  it('should display error message for empty username and password',()=>{
   
    Buttons.clickLoginButton();
    registerPage.emptyLoginFieldsMessage().should('be.visible');
  });

  it('should show error message for invalid username and password',()=>{
    registerPage.fillInvalidLoginUsername();
    registerPage.fillInvalidLoginPassword();

    Buttons.clickLoginButton();
  })
});