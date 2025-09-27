export class BasePage {
    // page, '/login'
    constructor(page, url) {
        this.page = page
        this.url = url
    }


    async navigateTo() {
        // this.page.navigateTo()
        this.page.goto(this.url)
        console.log(`ACTION: dang dieu huong toi trang ${this.url}`);

    }
}