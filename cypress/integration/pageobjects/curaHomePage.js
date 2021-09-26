import basePage from '../pageobjects/BasePage';

export default class curaHomePage{

    constructor(){
       
    }

    appointmentBtnClick(){
        cy.get('a[id="btn-make-appointment"]').click();
    }


}