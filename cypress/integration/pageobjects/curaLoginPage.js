
export default class curaLoginPage {

    constructor(){
        //super();
    }

    loginTxtField="input[id='txt-username']";
    loginPasswordField="input[id='txt-password']";
    signInbtn="button[id='btn-login']";

    usernameLabel="label[for='txt-username']";


    typeUsernameField(username){
        cy.get(this.loginTxtField).clear().type(username);

    }

    typePasswordField(password){
        cy.get(this.loginPasswordField).clear().type(password);
    }

    clickSignInBtn(){
        cy.get(this.signInbtn).click();
    }

    verfiyUsernameDisplayed(){
        cy.get(this.usernameLabel).contains('Username');
    }

}