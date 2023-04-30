/// <reference types="Cypress"/>

describe("visit webdriver uni site",()=>{
    it("autocomplete",()=>{
        cy.visit("https://automationteststore.com/")

       // cy.visit("http://www.webdriveruniversity.com/")
        //cy.get('#autocomplete-textfield').invoke('removeAttr','target').click({force:true})
        //cy.get('#myInput').type("A")
       // cy.get('#myInputautocomplete-list > *').each(($el,index,$list) =>{
           // const product = $el.text()
          //  const selectedProduct = 'Avacado'

          //  if(product === selectedProduct){
          //      $el.trigger("click")
           //     cy.get('#submit-button').click()
           //     cy.url().should('include', selectedProduct)
          //  }
            
       // })
        






    });
})