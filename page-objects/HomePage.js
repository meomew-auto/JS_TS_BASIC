import { BasePage } from "./BasePage.js";
export class HomePage extends BasePage {
    welComemessage = '#welcome-message'

    constructor(page){
        super(page, '/home')
    }

    async getWelcomeMessage(){
        console.log(`ACTION:Lay noi dung tu ${this.welComemessage}`);

        return 'Chao mung ban quay tro lai'
        
    }

}