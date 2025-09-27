import { Loginpage } from "../page-objects/LoginPage.js";
import { HomePage } from "../page-objects/HomePage.js";


async function runLoginTest() {
    console.log('BAT DAU KICH BAN - DANG NHAP THANH CONG');

    //gia lap doi tuong 'page' 
    const fakePage = {name: 'Fake page'}
    
    const loginPage = new Loginpage(fakePage, '/login')
    const homePage = new HomePage(fakePage)

    //1. Dieu huong toi trang dang nhap
    await loginPage.navigateTo()

    //2 thuc hien hanh dong dang nhap\
    await loginPage.login('Hoang', '1234567')

    //3 chuyen sang trang chu va lay ket qua
    // homePage.navigateTo

    const message = await homePage.getWelcomeMessage()

    if(message.includes('Chao mung ban quay tro lai')){
        console.log('TES PASSSED');
        
    }else{
        console.log('TEST FAILED');
        
    }
}

runLoginTest()
