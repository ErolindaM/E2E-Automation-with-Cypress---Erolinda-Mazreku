const { faker } = require('@faker-js/faker');

class RegisterPage {
  
  fillFirstName() {
    const firstName = faker.person.firstName();
    cy.get('input[name="customer.firstName"]').type(firstName);
    return firstName;
  }

  fillLastName() {
    const lastName = faker.person.lastName();
    cy.get('input[name="customer.lastName"]').type(lastName);
    return lastName;
  }
  
    fillAddress() {
      cy.get('input[name="customer.address.street"]').type(faker.location.street());
    }
  
    fillCity() {
      cy.get('input[name="customer.address.city"]').type(faker.location.city());
    }
  
    fillState() {
      cy.get('input[name="customer.address.state"]').type(faker.location.state());
    }
  
    fillZipCode() {
      cy.get('input[name="customer.address.zipCode"]').type(faker.location.zipCode());
    }
  
    fillPhoneNumber() {
      cy.get('input[name="customer.phoneNumber"]').type(faker.phone.number());
    }
  
    fillSSN() {
      cy.get('input[name="customer.ssn"]').type(faker.datatype.number({ min: 100000000, max: 999999999 }).toString());
    }
  
    fillUsername() {
      const username = faker.internet.userName();
      cy.get('input[name="customer.username"]').type(username);
      return username; 
    }

    fillInvalidUsername() {
      const username ="Jacob";
      cy.get('input[name="customer.username"]').type(username);
      return username; 
    }

    fillPassword() {
       const password = faker.internet.password();
       cy.get('input[name="customer.password"]').type(password);
       return password;
      }

    getPasswordFieldValue() {
       return cy.get('input[name="customer.password"]').invoke('val');
    }
    
    fillRepeatedPassword() {
       this.getPasswordFieldValue().then(password => {
       cy.get('input[name="repeatedPassword"]').type(password);
        });
    }
    fillDifferentPassword(){
      const password = faker.internet.password();
       cy.get('input[name="repeatedPassword"]').type(password);
       return password;
    }

    registrationConfirmationMessage() {
      return cy.contains('Your account was created successfully. You are now logged in.');
    }
    welcomeMessage(firstName,lastName){
      cy.contains(`Welcome ${firstName} ${lastName}`)
    }
    registrationUsernameErrorMessage(){
      return cy.contains('This username already exists.');
    }
    requiredFieldsMessage(){
      return cy.contains('is required. ')
    }
    passwordNotMatchingMessage(){
      return cy.contains('Passwords did not match.')
    }
    loginSuccessfulMessage(){
      return cy.contains(' You are now logged in.');
    }
    emptyLoginFieldsMessage(){
      return cy.contains('Please enter a username and password.');
    }
    invalidUsernameAndPassword(){
      return cy.contains('An internal error has occurred and has been logged.');
    }
    fillLoginUsername(username){
      cy.get('input[name="username"]').type(username);
    }
    fillLoginPassword(password){
      cy.get('input[name="password').type(password);
    }

    fillValidLoginUsername(){
      const username ="Joe";
      cy.get('input[name="username"]').type(username);

    }
    fillValidLoginPassword(){
      const password ="1";
      cy.get('input[name="password"]').type(password);
    }
    fillInvalidLoginUsername(){
      const username=faker.internet.userName();
      cy.get('input[name="username"]').type(username);
    }
    fillInvalidLoginPassword(){
      const password=faker.internet.password();
      cy.get('input[name="password"]').type(password);
    }

  }
  
  export default new RegisterPage();