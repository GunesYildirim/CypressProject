/// <reference types="Cypress"/>

class LoginPage {

    Register(firstname, lastname, email, address, city, country, region, zipcode, loginname, password,
        passwordconfirm) {
        cy.visit("https://automationteststore.com/index.php?rt=account/create");
        cy.get('#AccountFrm_firstname').type(firstname);
        cy.get('#AccountFrm_lastname').type(lastname);
        cy.get('#AccountFrm_email').type(email);
        cy.get('#AccountFrm_address_1').type(address);
        cy.get('#AccountFrm_city').type(city);
        cy.get('#AccountFrm_country_id').select(country);
        cy.get('#AccountFrm_zone_id').select(region);
        cy.get('#AccountFrm_postcode').type(zipcode);
        cy.get('#AccountFrm_loginname').type(loginname);
        cy.get('#AccountFrm_password').type(password);
        cy.get('#AccountFrm_confirm').type(passwordconfirm);
        cy.get('#AccountFrm_agree').check();
        cy.get('button[title="Continue"]').click();
    }

    SuccessfulLogin(loginname,password){
        cy.visit("https://automationteststore.com/index.php?rt=account/login")
        cy.get('#loginFrm_loginname').type(loginname);
        cy.get('#loginFrm_password').type(password);
        cy.get('button[title="Login"]').click();
    }

    UnsuccessfulLogin(loginname,password){
        cy.visit("https://automationteststore.com/index.php?rt=account/login")
        cy.get('#loginFrm_loginname').type(loginname);
        cy.get('#loginFrm_password').type(password);
        cy.get('button[title="Login"]').click();
        return cy.get('.alert.alert-error:not(.close)');
    }

    ForgotPassword(loginname,email){
        cy.visit("https://automationteststore.com/index.php?rt=account/login")
        cy.contains('a', 'Forgot your password?').click();
        cy.get('#forgottenFrm_loginname').type(loginname);
        cy.get('#forgottenFrm_email').type(email);
        cy.get('button[title="Continue"]').click();
        return cy.get('.alert-success');
    }

}

export default LoginPage;