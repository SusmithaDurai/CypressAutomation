import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import loginPage from '../pageobjects/loginPage';
import BasePage from "../pageobjects/BasePage";

const basePage=new BasePage();
const loginP=new loginPage();


Given('I navigate to the login page',()=>{
    
   // basePage.navigate('https://www.google.com/');
    basePage.navigate('');
   
   
})

When('I click MyAccountLink',()=>{
    loginP.clickMyAccountLink();
})

And('user name is {string}',(email)=>{
    
    loginP.typeEmailTxt(email);
    
})

And('password is {string}',(password)=>{
    loginP.typePasswordTxt(password);
})
And('click Signin',()=>{
  loginP.clickSignIn();
})

Then('user should login successfull',()=>{
    
    
})