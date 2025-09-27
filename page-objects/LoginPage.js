import { BasePage } from "./BasePage.js"
export class Loginpage extends BasePage {

    //locator( vi tri cac element o tren UI) ->class field 
    userNameInput = '#username'
    passwordInput = '#password'
    loginButton = '#login-button'

    constructor(page) {
        super(page, '/login')
    }

    async enterUsername(username) {
        console.log(`ACTION: Nhap username ${username} vao o ${this.userNameInput}`);

    }

    async enterPassword(password) {
        console.log(`ACTION: Nhap username ${password} vao o ${this.passwordInput}`);

    }

    async clickLoginButton() {
        console.log(`ACTION: Click vao nut ${this.loginButton}`);

    }
    async login(username, password){
        console.log(`WORKFLOW - THU HIEN DANG NHAP VOI USER ${username}`);
        await this.enterUsername(username)
        await this.enterPassword(password)
        await this.clickLoginButton()
        
    }
}
