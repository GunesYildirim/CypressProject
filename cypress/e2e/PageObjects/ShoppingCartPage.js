/// <reference types="Cypress"/>
before(() => {
    cy.visit("https://automationteststore.com/index.php?rt=checkout/cart")
  })
class ShoppingCartPage{
    ChangeQuantity(quantityNumber) {
        cy.get('#cart_quantity50').clear().type(quantityNumber);
        cy.get('#cart_update').click();
        cy.xpath("//td[@class='align_right'][1]")
          .invoke('text')
          .then((unitPrice) => {
            cy.xpath("//td[@class='align_right'][2]")
              .invoke('text')
              .then((total) => {
                unitPrice = unitPrice.replaceAll("$", "");
                total = total.replaceAll("$", "");
                  let unitPriceint = parseFloat(unitPrice);
                  let quantityNumberint = parseFloat(quantityNumber);
                  let totalCalculatedint = unitPriceint * quantityNumberint;
                  let totalCalculated = totalCalculatedint.toFixed(2);
                  expect(parseFloat(total)).to.equal(parseFloat(totalCalculated));
                  cy.log("Total Price is correct");
              });
          });
      }

      RemoveProduct(productName) {
        cy.xpath("//td[@class='align_left']//a[contains(text(),'" + productName + "')]")
          .invoke('text')
          .then((productInCart) => {
            if (productName.toLowerCase() === productInCart.toLowerCase()) {
              cy.get('a[class="btn btn-sm btn-default"]').click();
            }
          });
      }

      CheckoutButton1() {
        cy.get('#cart_checkout1').click();
      }

      CheckoutButton2(country, state, zipcode) {
        cy.get('#estimate_country').select(country);
        cy.get('#estimate_country_zones').select(state);
        cy.get('#estimate_postcode').type(zipcode);
        cy.get('button[class="btn btn-default"]').click();
        cy.get('#cart_checkout2').click();
      }
}
export default ShoppingCartPage;