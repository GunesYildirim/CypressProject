/// <reference types="Cypress"/>
import LoginPage from '../PageObjects/LoginPage';
import HomePage from '../PageObjects/HomePage';
import ShoppingCartPage from '../PageObjects/ShoppingCartPage';
import CheckoutPage from '../PageObjects/CheckoutPage';
describe("Testing the Automation Test Store Website", () => {
    const loginPage = new LoginPage();
    const homePage = new HomePage();
    const shoppingCartPage = new ShoppingCartPage();
    const checkoutPage = new CheckoutPage();

    it.skip("Login and Register", () => {
        loginPage.Register('melisa', 'melisa', 'melisa@gmail.com', '123.street 123', 'Ankara', 'Turkey',
            'Ankara', '56780', 'melisaa', 'melisa1234', 'melisa1234')

        loginPage.SuccessfulLogin('melisaa', 'melisa1234')

        loginPage.UnsuccessfulLogin('wronguser', 'wrongpassword').then(($errorMessage) => {
            const actualErrorMessage = $errorMessage.text().replace(/�/g, '')
                .replace(/[^\x20-\x7E]/g, '');
            const expectedErrorMessage = 'Error: Incorrect login or password provided.';
            expect(actualErrorMessage).to.eq(expectedErrorMessage);
        });

        loginPage.ForgotPassword('melisaa', 'melisa@gmail.com').then(($successMessage) => {
            const actualSuccessMessage = $successMessage
                .text()
                .replace(/�/g, '')
                .replace(/[^\x20-\x7E]/g, ''); // This line removes non-printable characters.
            const expectedSuccessMessage = 'Success: Password reset link has been sent to your e-mail address.';
            expect(actualSuccessMessage).to.eq(expectedSuccessMessage);
        });
    });

    it("Select a category and add products",()=>{
        
    homePage.SelectSubCategory('Makeup','Cheeks')
    homePage.SortBySelection('Price Low > High')
    homePage.PageSelection('30')
    homePage.AddProductsToCart('Skinsheen Bronzer Stick')
    })

    it("Check the features of shopping cart",()=>{
    homePage.AddProductsToCart('Skinsheen Bronzer Stick')
    cy.visit("https://automationteststore.com/index.php?rt=checkout/cart")
    shoppingCartPage.ChangeQuantity('3')
    //shoppingCartPage.RemoveProduct('Skinsheen Bronzer Stick')
    shoppingCartPage.CheckoutButton2('Turkey','Ankara', '56780')
    })

    it.only("Go to checkout page and finish the order",()=>{
        homePage.AddProductsToCart('Skinsheen Bronzer Stick')
        //loginPage.SuccessfulLogin('melisaa', 'melisa1234')
        cy.visit("https://automationteststore.com/index.php?rt=checkout/confirm")
        checkoutPage.GuestCheckout('melisa', 'melisa', 'melisa@gmail.com', '123.street 123', 'Ankara', 'Turkey',
        'Ankara', '56780')
        checkoutPage.CheckTotalPrice()
        checkoutPage.ConfirmationMessage()
       
        
        })





})