export default class BasePage{
    baseUrl=Cypress.env('baseUrl');

    navigate(path){

       //this.baseUrl="https://www.next.co.uk/";
       this.baseUrl="https://katalon-demo-cura.herokuapp.com/";
      //cy.visit('https://katalon-demo-cura.herokuapp.com/');
       cy.visit(this.baseUrl);
       
    }



}