describe('First Test',()=>{

    it('should visit the page',()=>{
        cy.visit('https://www.next.co.uk/');
        
        cy.get('ul.PrimaryDesktopNavigation li:nth-of-type(3)')
        .should('be.visible')
        .and('contain','HOME');
    })
})