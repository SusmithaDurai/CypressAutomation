import BasePage from "./BasePage"

export default class loginPage extends BasePage{

    constructor(){
        super();
    }
   
    emailTxtField="input[id='EmailOrAccountNumber']";
    passwordTxtField="input[id='Password']";
    signIn="input[id='SignInNow']";
    //myAccountLink=""

    clickMyAccountLink(){
        cy.get('.QuickLinks').find('a');
    }


    typeEmailTxt(email){
        cy.get(this.emailTxtField).clear().type(email);
    }

   typePasswordTxt(password){
       cy.get(this.passwordTxtField).clear().type(password);
   }

   

    clickSignIn(){
        cy.get(signIn).click();
    }

   

    
}
