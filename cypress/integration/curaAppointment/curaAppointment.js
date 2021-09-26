import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import curaHomePage from "../pageobjects/curaHomePage";
import curaLoginPage from "../pageobjects/curaLoginPage";
import BasePage from "../pageobjects/BasePage";
import appointmentPage from "../pageobjects/appointmentPage";

const basePage=new BasePage();
const curahomePage=new curaHomePage();
const curaloginPage=new curaLoginPage();
const apptPage=new appointmentPage();

Given('I should be in main page.',()=>{
    basePage.navigate('');
})

When('I click Make Appointment button.',()=>{
    curahomePage.appointmentBtnClick();
})

And('I enter username {string}',(username)=>{
    curaloginPage.typeUsernameField(username);
})

And('I enter password {string}',(password)=>{
    curaloginPage.typePasswordField(password);
})

And('I click login button.',()=>{
    curaloginPage.clickSignInBtn();
})

And('I select Facility as {string}',(facility)=>{
    apptPage.selectFacility(facility);
})

And('I select Healthcare Program as {string}',(healthCareProgram)=>{
    apptPage.checkHealthProgram(healthCareProgram);
})

And('I select Visit Date as {string}',(date)=>{
    apptPage.selectDate(date);
})

And('I add Comment as {string}',(comment)=>{
    apptPage.addComment(comment);
})

And('I click Book Appointment.',()=>{
    apptPage.clickBookAppointment();
})

Then('I should see title {string}.',(title)=>{
    apptPage.verifyPageTitle();
})

Then('I should redirect to login page.',()=>{
    curaloginPage.verfiyUsernameDisplayed();
})

Then('I should see {string} in title.',(title)=>{
   // curaloginPage.verfiyUsernameDisplayed();
})

