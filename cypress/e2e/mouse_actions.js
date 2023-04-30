/// <reference types="Cypress"/>

describe("visit webdriver uni site",()=>{
    
    it("contact us form and browser navigation",()=>{
    
        cy.visit("http://www.webdriveruniversity.com/")
       cy.get('#actions').invoke('removeAttr','target').click({force:true})
        cy.get('#draggable').trigger('mousedown')
        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force:true});
        cy.get('#droppable').should('contain', 'Dropped!');
        //cy.get('#double-click').dblclick();
  


       




    });
})