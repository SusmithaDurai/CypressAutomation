import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import BasePage from "../pageobjects/BasePage";
import HomePage from '../pageobjects/homePage';
import productListPage from "../pageobjects/productsListPage";

const basePage=new BasePage();
const homePage=new HomePage();
const productList=new productListPage();

Given('I navigate to home page.',()=>{
   basePage.navigate('');
    //basePage.navigate('https://katalon-demo-cura.herokuapp.com/');
})

When('I enter product name {string} in Search text Field.',(searchTxt)=>{
    homePage.typeSearchtextField(searchTxt);
})

And('I click Search Icon',()=>{
    homePage.clickSearchIcon();
})

Then('user should be able to see {string} in title.',(searchTitle)=>{
    productList.getProductsTitle(searchTitle);
})

And('user should see all relevant products listed.',()=>{

})