import BasePage from "./BasePage";

export default class productListPage extends BasePage{

    constructor(){
        super();
    }

    productTitle=".SearchedFor";

    getProductsTitle(title){
        cy.get(this.productTitle).children().contains(title);
    }

}