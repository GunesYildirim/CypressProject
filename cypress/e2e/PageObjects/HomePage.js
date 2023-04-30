/// <reference types="Cypress"/>
beforeEach(() => {
    cy.visit("https://automationteststore.com/")
  })
class HomePage{
    
    SelectCategory(categoryName){
    cy.xpath(`//div//section//nav//ul//li//a[contains(text(),'${categoryName}')]`).click();
    }

    SelectSubCategory(categoryName,subCategoryName){
        cy.xpath(`//div//section//nav//ul//li//a[contains(text(),'${categoryName}')]`)
        .trigger('mouseover');
      cy.xpath(`//div//section//nav//ul//li//a[contains(text(),'${subCategoryName}')]`).click({force: true});
    }

    SortBySelection(sortText){
        cy.get('#sort').select(sortText);
    }

    PageSelection(perPage){
        cy.get('#limit').select(perPage);
    }

    GetProductNames(productName) {
        return cy.get("div[class='col-md-3 col-sm-6 col-xs-12']").contains(productName);
      }
    
      AddProductsToCart(productName) {
        cy.contains("div[class='col-md-3 col-sm-6 col-xs-12'] .prdocutname", productName)
      .closest("div[class='col-md-3 col-sm-6 col-xs-12']")
      .find(".productcart", { timeout: 10000 })
      .click();
        
      }

}

export default HomePage;