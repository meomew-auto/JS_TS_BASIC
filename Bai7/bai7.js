//class trong JS
// nguoi khai bao class hay su dung class goi la instance => giong nhu nguoi su dung ban thiet ke
// class TenClass {
//     // 1 class fields ( khai bao thuoc tinh mac dinh) - optional
//     tenThuocTinhMacDinh = 'gia tri'

//     //2 Constructor (ham khoi tao)
//     constructor(thamso1){
//         this.thuocTinh1 = thamso1 
//     }

//     //3 Method (phuong thuc - hanh vi)

//     tenPhuongTHuc(){

//     }





// }

// class Car {
//     //1 class field
//     isEngineOn = false;

//     //2 constructor: nhan cac thong tin rieng cua tung chiec xe
//     //constructor('toyota', 'den'){
//     // car1.brand = 'toyota'
//     // car1.color = 'den' 
// // }
//     constructor(brand, color){
//         //car1.newBrand = 'toyota'
//         this.newBrand = brand
//         this.color = color

//     }

//     //3 phuong thuc
//     startEngine = ()=>{
//         this.isEngineOn = true
//         console.log(`Dong co xe ${this.newBrand} da duoc khoi dong`);

//     }

//     displayInfo = ()=>{
//         console.log(`Day la chiec xe ${this.newBrand} mau ${this.color}`);

//     }

// }


// //su dung
// const car1 = new Car('Toyota', 'Den')
// // console.log(`car1 co thuoc tinh ${car1.isEngineOn}`);
// car1.displayInfo()
//car1.isEngineOn


// class NguoiDung {

//     constructor(email, tenHienThi = 'Khach', vaiTro = 'user'){
//         this.email = email
//         this.tenHienThi = tenHienThi
//         this.vaiTro = vaiTro

//     }

//     gioiThieu(){
//         console.log('This o day la', this)
//         console.log(`Ten ${this.tenHienThi}, Email: ${this.email}, Vaitro:${this.vaiTro}`);

//     }

// }

// const user1 = new NguoiDung('user1@gmail.com')
// user1.gioiThieu()

// const user2 = new NguoiDung('user2@gmail.com', 'User2')
// user2.gioiThieu()

//1. Tinh dong goi
//vien thuoc con nhong. vo thuoc (class), bao boc thanh phan ben trong(private)
//nguyen tac khi code => moi ham nen lam 1 cong viec chinh no
// class BankAccount {
//     #balance = 0;
//     deposit(amount){
//         if(amount > 0){
//             this.#balance += amount
//             console.log(`Nap thanh cong ${amount}`);

//         }

//     }
//     getBalance(){
//         return this.#balance
//     }


// }

// const myAccount = new BankAccount()
// myAccount.deposit(100)

// console.log(myAccount.getBalance());
// console.log(myAccount.#balance);

// //2. Tinh truu tuong
// //dieu khien TV 
// class CoffeeMachine {
//     #cleanmachine(){
//         console.log('Ve sinh may');

//     }

//     makeCoffe(){
//         this.#cleanmachine()
//         console.log('ca phe da san sang!');

//     }

// }

// const machine = new CoffeeMachine()
// machine.makeCoffe()
// //nguoi dung chi can biet goi ham nay

//3. Tinh ke thua
//dung tu khoa extend

// class Animal {
//     constructor(name){
//         this.name = name
//     }
//     eat(){
//         console.log(`${this.name} dang an`);

//     }
// }

// class Dog extends Animal {
//     constructor(name, color){
//         super(name) // goi constructor cua lop cha animal
//         this.color = color
//     }

//     bark(){
//         console.log('Go go');

//     }
//     eat(){
//         console.log('Day la tu class con');

//     }
// }

// const myDog = new Dog('Kitty', 'Vang')
// myDog.eat()

// myDog.bark()

//4 tinh da hinh

// class Shape{

//     draw(){
//         console.log('ve hinh dang chung');

//     }
// }

// class Circle extends Shape {
//     draw(){
//         console.log('ve 1 hinh tron');

//     }
// }


// class Square extends Shape {
//     draw(){
//         console.log(' ve 1 hinh vuong');

//     }
// }

// const shapes = [new Circle(), new Square(), new Shape()

// ]

// shapes.forEach(shape => shape.draw())

// xay dung 1 project automation theo page object
//
//page-objects
// -- BasePage.js =>class cha chua cac hanh dong chung
// -- LoginPage.js =>class cho trang dang nhap
// -- HomePage.js => class cho trang chu
//tests
// login.test.js // kich ban test 
//export => import

//File basePage.js
//playwright => se co 1 gia tri chinh la page (driver o trong selenium,)


//File LoginPage.js


//file login.test.js

//test case 2. -> const loginPage = new LoginPage(page)=> 


runLoginTest()


