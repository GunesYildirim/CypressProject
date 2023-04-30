/// <reference types="Cypress"/>

class CheckoutPage {
    CheckTotalPrice() {
        let priceElements = cy.get('td.checkout_heading');
        let tax = 2.0;
        let totalPriceAdd = 0 + tax;
        priceElements.each(($el) => {
            let priceText = $el.text().trim().replace(/[^0-9\.]/g, "");
            let price = parseFloat(priceText);
            totalPriceAdd += price;
        });
        let totalPriceExpected = totalPriceAdd.toFixed(2);
        cy.get('span.bold.totalamout').then(($el) => {
            let totalpriceText = $el.text().trim().replace(/[^0-9\.]/g, "");
            let totalprice = parseFloat(totalpriceText);
            let totalPriceActual = totalprice.toFixed(2);
            expect(totalPriceAdd).to.equal(totalprice);
            cy.log("Total price is as expected");
        });
    }

    EditCart() {
        cy.get('button[class="pull-right mr10 btn btn-default btn-xs"]').click();
      }
      
      ConfirmationMessage() {
        cy.get('button[class="btn btn-orange pull-right lock-on-click"]').click();
        cy.get('span.maintext').then(($el) => {
          let confirmationMessageText = $el.text().trim();
          expect(confirmationMessageText).to.exist;
          cy.log(confirmationMessageText);
        });
      }

      GuestCheckout(firstname, lastname, email, adress, city, country, region, zipcode) {
        cy.get('#accountFrm_accountguest').click();
        cy.get('button[title="Continue"]').click();
        cy.get('#guestFrm_firstname').type(firstname);
        cy.get('#guestFrm_lastname').type(lastname);
        cy.get('#guestFrm_email').type(email);
        cy.get('#guestFrm_address_1').type(adress);
        cy.get('#guestFrm_city').type(city);
        cy.get('#guestFrm_country_id').select(country);
        cy.get('#guestFrm_zone_id').select(region);
        cy.get('#guestFrm_postcode').type(zipcode);
        cy.get('button[title="Continue"]').click();
        
      }
}
export default CheckoutPage;