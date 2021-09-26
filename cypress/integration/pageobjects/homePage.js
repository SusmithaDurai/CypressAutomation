import BasePage from "./BasePage";

export default class homePage extends BasePage{

    constructor(){
        super();
    }

    searchTextField ="input[name='w']";
    searchIcon=".SearchButton";

    typeSearchtextField(searchtxt){
        cy.get(this.searchTextField).clear().type(this.searchtxt);

    }

    clickSearchIcon(){
        cy.get(this.searchIcon).should('be.visible').click();
    }
}
