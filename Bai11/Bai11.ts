//class o trong typescript

// class Animal {
//     readonly name: string

//     color: string

//     private age: number

//     constructor(name: string, age:number, color: string){
//         this.age = age
//         this.color =color
//         this.name = name
//     }
//     printName(){
//         return this.name
//     }

// }

// const dog = new Animal('Buddy', 10, 'red')
// dog.color = 'yellow'

// console.log(dog.color);


// //protected

// class GameCharacter{
//     protected health: number

//     constructor(heath: number){
//         this.health = heath
//     }

//     protected takeDamage(amount:number):void{
//         this.health -= amount
//         console.log(`Bi mat ${amount} damage, con lai ${this.health} `);
        
//     }

// }

// class Warrior extends GameCharacter {

//     attack(target: GameCharacter): void{
//         console.log('Warrior attack!');
//         // target.takeDamage(10)
//     }

//     defendAndAttack(): void{
//         console.log(' warrior attacks with a special move');
//         this.takeDamage(5)
        
//     }

    
// }

// const warrior = new Warrior(100)

// warrior.defendAndAttack()

// interface IOrder {

//     id:number;
//     total: number
// }

// interface IUSerWithOrders {
//     name: string
//     orders?: IOrder[]
// }

// const userWithData : IUSerWithOrders = {
//     name: 'Binh',
//     orders: [ {id: 101, total: 100}]
// }

// const userWithoutData: IUSerWithOrders = {
//     name: 'An'
// }
// // type UserReturn = number | undefined

// //c1 
// function getFirstOrderId (user: IUSerWithOrders): number | undefined {
//     if(user.orders && user.orders.length > 0){
//         const firstOrder = user.orders[0]
//         if (firstOrder){
//             return firstOrder.id
//         }
//     }
//     return undefined

// }
// const idBinh = getFirstOrderId(userWithData)
// console.log(idBinh);

// const idAn  = getFirstOrderId(userWithoutData)
// console.log(idAn);

//c2 // optinal chaining..... 
// const idBinh2 = userWithData.orders?.[0]?.id
// console.log(idBinh2);


// const idAn2 = userWithoutData.orders?.[0]?.id
// console.log(idAn2);




//vi du minh viet 1 cai class khoi tao viec ket noi db
// app nho ket noi db
//async await => tra ra promise => va se dung await de hung cai promise
//generic <T> 
// interface IInitializeable{
//     isReady: boolean
//     setUp(): Promise<void>
// }

// interface ILoggable {
//     log(message: string): void
// }

// interface IDataAccess {
//     connect(): void
//     query(sql: string):void
// }

// class BaseService implements IInitializeable, ILoggable{
//     isReady: boolean = false

//     protected serviceName:string

//     constructor(name: string){
//         this.serviceName = name;
//     }

//     async setUp(): Promise<void> {
//         console.log(`[${this.serviceName} Dang khoi tao dich vu...]`);
//         await new Promise(resolve => setTimeout(resolve, 500))
//         this.isReady = true
//         this.log('Khoi tao hoan tat')
//     }

//     log(message:string):void {
//         console.log(`[LOG-${this.serviceName}]: ${message}`);
        
//     }

// }

// class DatabaseService extends BaseService implements IDataAccess{
//     private connectString: string

//     constructor(dbName: string, connect:string){
//         super(dbName)
//         this.connectString = connect
//     }

//     connect(): void {
//         if(!this.isReady){
//             this.log('Chua san sang, vui long chay setUp truoc')
//             return
//         }
//         this.log(`Da ket noi DB qua:${this.connectString} `)
//     }

//     query(sql:string):void{
//         if(!this.isReady){
//             this.log('Dich vu chua khoi dong')
//             return
//         }

//         this.log(`thuc thi SQL: ${sql}`)
//     }
//     //override lai phuong thuc cua thang cha
//     log(message: string): void{
//         console.log(`[DB-${this.serviceName}] :${message}`)
//     }

// }

// async function runService() {
//         const dbService = new DatabaseService('UserDb', 'mongoDb://localhost:27017')

//         await dbService.setUp() 

//         dbService.connect()
        
//         dbService.query('Select * FROM USER')

// }
// runService()


//fetch
//javascript ko co khuon mau cua 1 obejct. nen no ko biet object minfh dang goi la cai nao
//schema
// {
//   "message": "Success",
//   "response": [
//     {
//       "id": 371,
//       "name": "Test3107",
//       "category_id": 122,
//       "price": 1200,
//       "release_date": "2025/07/30",
//       "status": 1,
//       "image": []
//     },
//     {
//       "id": 372,
//       "name": "Testing API V7906",
//       "category_id": 139,
//       "price": 110,
//       "release_date": "2025/02/28",
//       "status": 1,
//       "image": [
//         {
//           "id": 61,
//           "path": "public/images/0rS5miO4nPAv9unVQ0XomaUjJENCt6E1R1eN0aRq.png"
//         }
//       ]
//     },

interface ApiImage {
    id: number
    path: string
}

interface IBook{
    id: number;
    name: string;
    category_id: number;
    price: number;
    release_date: string;
    status:number
    image: ApiImage[]
}

interface IApiResponse {
    message: string
    response: IBook[]
}

async function fetchBooks(): Promise<IApiResponse>{

    const apiUrl = 'https://api.anhtester.com/api/books'

    try{
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
            'token': 'application/json'
        }
      })  
      if(!response.ok){
        throw new Error(`Loi API: ${response.status} ${response.statusText}`)
      }
      const data: IApiResponse = await response.json()
      return data

    }catch(error){
        console.error('Khong the lay du lieu sach', error);
        throw error
    }


}


//bai toan minh muon lay image.path. => gan vao bien imageUrl,  neu ko co thi tra ra "Khong co Anh"
async function displayBooks(){

    try{

        console.log('Dang tai danh danhs sach....');
        
        const apiData = await fetchBooks()

        apiData.response.forEach(book =>{
            const imageUrl = book.image.length > 0 ? book.image[0]?.path : 'Khong co Anh'
            console.log(`- ID: ${book.id}, Ten ${book.name}, Gia ${book.price}`);
            console.log(`HInh anh ${imageUrl}`);
            
            

        })

    }catch(error){
            console.log('Da xay ra loi');
            
    }

}


displayBooks()