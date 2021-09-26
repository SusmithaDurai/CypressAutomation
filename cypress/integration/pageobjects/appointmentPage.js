import BasePage from "./BasePage";

export default class appointmentPage extends BasePage{
    constructor(){
        super();
    }



    selectFacility(value){
        cy.get('select').select(value);
    }

    checkHealthProgram(value){
        cy.get("input[id='radio_program_medicaid']").check(value);
    }

    selectDate(date){
        cy.get("input[id='txt_visit_date']").clear().type(date);
        
    }
    addComment(comment){
        cy.get("#txt_comment").click({force:true});
        cy.get("#txt_comment").clear().type(comment);
        
    }

    clickBookAppointment(){
        cy.get('#btn-book-appointment').click();
    }

    verifyPageTitle(){
       // cy.get('.container').children('h2').contains('Make Appointment');
    }
}