//generic o trong TS

//
// function traVeSo(arg: number): number{
//     return arg;
// }

// function traVeChuoi(arg: string): string{
//     return arg
// }

// function traVeGiaTriBatKy(arg: any): any{
//     return arg;
// }

// let output = traVeGiaTriBatKy('xin chao')
// output.toFixed(output)

//Generic Type: => 1 chai nuoc rong
// ko quy dinh chua nc gi. 
// Trong type script cai chai nhu vay dc ki boi dau ngoac nhon <T> -> Promise<string>   (U, V)

// function traVeGiaTriDynamic<T>(arg: T): T{
//     return arg;
// }

// //do chai nc khoang // string vao chai


// let outputString = traVeGiaTriDynamic<string>('Chao moi nguoi')
// console.log( outputString.toLocaleUpperCase());

// // do nc cam vao chai (number)

// let outputNumber = traVeGiaTriDynamic<number>(100)
// console.log(outputNumber.toFixed(2));


//T -> placeholder - 
//syntax 
// //trong function
// function tenHam<T,U...>(thamso1: T, thamso2: U,....): Kieu tra ve{
//     than ham
// }

// function taoCapGiaTri<T, U>(key: T, value: U): {key: T, value: U}{
//     return {key: key, value: value }
// }

// let vd1 = taoCapGiaTri<string, number>('Tuoi', 18)
// console.log(vd1.key.toLocaleUpperCase());

//doi voi interface

// interface Teninterface<T>{
//     propertyname: T
// }

// type TenType<T> = {
//     propertyname: T
// }

//placeholder
// interface Result<TData>{
//     isSuccess: boolean;
//     error?:string
//     data: TData
// }

// // interface IUserResult{
// //     isSuccess: boolean;
// //     error?:string
// //     data: string
// // }

// // interface IProductResult{
// //     isSuccess: boolean;
// //     error?:string
// //     data: {id: number, name: string}
// // }


// let userResult: Result<string> = {isSuccess: true, data: 'Lay du lieu thanh cong'}

// let productResult: Result<{id: number, name: string}> = {
//     isSuccess: false,
//     data: {id: 1, name:'laptop'}

// }

//generic trong class
// 
// class TenLop<T>{
//     constructor(value: T)
//     method(value: T):T
// }

// class DataStorage<T>{
//     private data: T

//     constructor(initialData: T){
//         this.data  = initialData
//     }

//     getData(): T{
//         return this.data
//     }

// }

// const stringStorage = new DataStorage<string>('Hello generics')

// console.log(stringStorage.getData().toLocaleUpperCase());

//=> cach doc file json, xlsx (phai qua thu vien thu3).
//data driven....
//parse Record<
// category: 'lich su'
// >
// json chinh la object o trong typescript. => Data. 
// stream(). chunk() -> doc file day theo tung doan  hoac theo cach 
//  {
// promotion: { 
//     promotionA: [
//         {   //
//             // thong tin khac
//             // {{dataA}}
//         }
//     ]
//     promotionB:[
//         {

//         }
//     ]
// }

// {
//   "username": "{{username}}",
//   "password": "{{password}}"
// }


//template => promotionA gan lai dataA


// test case dang nhap su dung data test dau vao tu file JSON, xlsx, => check voi cac truong hop user khac nhau