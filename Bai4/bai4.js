// alert("bai 4")

//cau truc vong lap while
//bao gom 3 phan diem xuat phat, dieu kien, gia tri cap nhat


// let bien dieu kien

// while(dieu kien){

//     khoi lenh thu thi

//     //gia tri cap nhat de lam thay doiu bien dieu kien
// }

// let giaGame = 1000000
// let soTienTietKiem = 0
// let soTuan = 0

// while(soTienTietKiem < giaGame){
//     console.log(`Tuan ${soTuan + 1}. Dang co ${soTienTietKiem}`);
//     soTienTietKiem += 150000 // soTienTietKiem = soTienTietKiem + 15000
//     soTuan++
//     console.log('Bo vao tiet kiem 150k');
        
// }

// console.log(`Sau ${soTuan} thi da tiet kiem duoc ${soTienTietKiem} va du de mua game`);

// let giaGame = 1000000
// let soTienTietKiem = 0

// while(soTienTietKiem < giaGame){
//     console.log('tiet kiem tien');


    
// }

//cau truc vong lap for

// for (1. diem xuat phat; 2.Dieu kien dung; 3. buoc tiep theo){

    // khoi lenh thu the
// }

// for (let i = 0; i < 5; i++){
//     console.log(`dang thuc hien vong lap thu ${i}`);
    
// }


// for (let i = 0; i <=5; i++){
//     if(i === 3){
//         console.log('bo qua so 3');
//         continue
//     }

//     console.log(`So hien tai la ${i}` );

// }

// for (let i = 0; i <=5; i++){
//     if(i === 3){
//         console.log('bo qua so 3');
//         break
//     }

//     console.log(`So hien tai la ${i}` );

// }

//ung dung vong lap fore

//index se dem tu 0 -> 
                    // 0.   /1        2
// const products = ['apple', 'orange', 'grape']
// // console.log(`so phan tu ${products.length}`);
// // console.log(`phan tu dau tien la ${products[0]}`)
// // console.log(`phan tu dau tien la ${products[1]}`)
// // console.log(`phan tu dau tien la ${products[2]}`)
// for (let i = 0; i < products.length; i ++){
//     if (products[i] === 'orange'){
//         console.log(`da tim thay qua cam`);
//         break
    
//     }
//     console.log(`Dang thuc hien vong lap voi qua: ${products[i]}`);
    
// }

// const browser = ['chrome', 'firefox', 'edge'] 

// const erroLog = []
//index tu 0
// muon lay phan tu torng mang -> mang[index]

// console.log(browser[3]);


//phuong thuc ve mang 
// them phan tu vao mang -> dung push them vao cuoi mang 

// const testCases = ['login', 'logout']
// testCases.push('add to cart')
// console.log(`mang bay gio se la ${testCases} va length cua mang la ${testCases.length}`);

//xoa phan tu o mang

// const tasks = ['Task A', 'Task B', 'Task C']

// const newTasks = tasks.pop()

// console.log(`mang moi la ${tasks}`);
// console.log(`gia tri da xoa la ${newTasks}`);

//for ...of

const possibleBanners = ['#promo-popup', '.cookie-banner', '[data-ad="true"']

// possibleBanners.forEach(function(item, index){
//     console.log(`phan tu o chi so ${index} la ${item}`)
// })

// possibleBanners.forEach((item, index, arr)=>{
//     console.log(`Banner should be ${item} - ${index} - ${arr}`);
    
// })
// console.log(possibleBanners.indexOf(possibleBanners[0])
// );




// const visibleBanner = '.cookie-banner'

// //cu phap for (const item of array)

// for (const selector of possibleBanners ){
//     console.log(`dang kiem tra selector: ${selector}`);
//     if (selector === visibleBanner){
//         console.log('da tim thay banner');
//         break
//     }
 
    
// }

// map filter cung cap ca index, mang, gia tri item
//map. filter. => 
    //forEach ko dung break co ho tro index

// Kịch bản: Phân tích Log Server
// Mục tiêu: Bạn có một mảng các chuỗi log từ server. Bạn cần tìm dòng log đầu tiên ghi nhận một lượt đăng nhập thất bại (status=FAIL) của dịch vụ xác thực người dùng (service=USER_AUTH).

// Quy trình xử lý:

// Tìm dòng log phù hợp đầu tiên.

// Từ dòng log đó, dùng các kỹ thuật xử lý chuỗi để trích xuất ra mã người dùng (uid) và mã lỗi (err_code).

// Ngay sau khi trích xuất thành công, dừng lại và không xử lý các dòng log còn lại.
// const logEntries = [
//   't=1m service=PAYMENT status=OK uid=101',
//   't=2m service=USER_AUTH status=FAIL uid=205 err_code=401', 
//   't=3m service=INVENTORY status=OK uid=302',
//   't=4m service=USER_AUTH status=OK uid=205',
//   't=5m service=USER_AUTH status=FAIL uid=404 err_code=404', 
// ];



// ///
// let failedLoginInfo = null

// for(const log of logEntries){

//   if(log.includes('service=USER_AUTH') && log.includes('status=FAIL')){
//     console.log(`-> Tim thay dong log tiem nang: ${log}`);

//     const parts = log.split(' ')
//     // console.log('sau khi tach chuoi thanh mang',parts);
//     let uid = null
//     let errCode = null
//     for (const part of parts){
//       if(part.startsWith('uid=')){
//         uid = part.replace('uid=','')
//       }
//       if(part.startsWith('err_code=')){
//         errCode = part.slice("err_code=".length)
//       }
//     }

//     failedLoginInfo = {uuId: uid, errCode: errCode}
//     console.log('Da tim thay log thich hop');
//     break

//   }

// }
// console.log('Thong itn da tim thay la', JSON.stringify(failedLoginInfo));



//mong muon moi nguoi xy ly bai taon nhu the nao
/// dung phuong phap gi de xy ly







//forEach

//return 
//1 tra ve 1 gia tri 
//ket thuc ham ngay lap tuc

// function tinhTong(a, b){
//   // const result = a + b
//   return (a + b)
// }

// const sum = tinhTong(3,5)
// console.log(sum);

// function checkAccess(age){

//   if(age< 18){
//     console.log('Chua du tuoi moi ban ra ngoai');
//     return 'Moi ban ra ngoai luon'
//   }
//   console.log('Du tuoi vao. moi ban');
  

// }

// // checkAccess(15)
// const message = checkAccess(15)
// console.log(message);

// const tickets = ['Thường', 'Thường', 'VIP', 'Thường', 'VIP']

// // for(const ticket of tickets){
// //   console.log(`Dang kiemn tra ve: ${ticket}`);
  
// //   if(ticket === 'VIP'){
// //     console.log('MOI BAN VAO');
// //     break;
// //   }
// // }

// //forEach ko co break
// // forEach(function(item){
  
// // })
// let foundVip = false;

// tickets.forEach(function(ve){
//   if(foundVip){
//     console.log(`Da tim thay VIP, nhung van liec qua ve: ${ve}`);
//     return
//   }
//   console.log(`Dang kiem tra ve ${ve}`);
//   if(ve === 'VIP'){
//       console.log('=> DA TIM THAY VE VIP MOI VAO');
//       foundVip = true
//   }
  
// })

//mang
//map()


// const doubleNumber = numbers.map(function(number){
//   return number *2
// })
// console.log('Mang ban dau', numbers);
// console.log('Mang sau khi bien doi', doubleNumber);


// const dailySales = [50, 65, 60, 80, 75]

// const saleTrend = dailySales.map(function(currentItem, index, array){
//   if(index === 0){
//     return `Ngay 1: ${currentItem} {Bat dau}`
//   }
//   const previousSale =array[index - 1]
//   const change = currentItem - previousSale

//   return `Ngay ${index + 1}: ${currentItem} Thay doi ${change}`

// })
// console.log(saleTrend)


// const result = saleTrend

// filter
// const numbers = [1,2,3,4,5,6]

// const soChan = numbers.filter(function(item){
//   return item % 2 === 0
// })
// console.log(`Mang ban dau: ${numbers}`);

// console.log(`Mang so chan: ${soChan}`);

// find()
// const numbers = [1,2,3,4,5,6]

// const soLonHon3 = numbers.find(function(item){
//   return item > 3
// })

// console.log('so lon hon 3 la', soLonHon3);

const userArray = ['hoang', 'hoang@gmail.com', 30, 'admin']
//object 
// { key :value}
const userArrayObject = {
  name: 'Hoang',
  email: 'hoang@gmail.com',
  age: 30,
  roleAccess: 'admin'
}

// truy cap thong tin object 
// dung dau cham


// console.log(userArrayObject.roleAccess);
// userArrayObject.address = 'HN'

// console.log(userArrayObject);

// delete userArrayObject.name
// console.log(userArrayObject);


// const testDataMember = {
//   userName: 'An',
//   password: '123',
//   role: 'member'
// }

// const testDataAdmin = {
//   userName: 'An',
//   password: '123',
//   role: 'admin'
// }


// const apiResponse = {
// userId: 123,
// userName: 'testUser',
// email: '123@mgail.com'
// }

// console.log(`Cac key o trong object la: ${Object.keys(apiResponse)}`);
// console.log(`Cac key o trong object la: ${Object.values(apiResponse)}`);

{/* <li> name</li> */}

//tim san pham category = electronics, intstock = true, => tra ra finalPrice: 10%
// <1200

const products = [
  {name: 'Laptop', category: 'Electronics', price: 1200, inStock: true},
  {name: 'Keyboard', category: 'Electronics', price: 25, inStock: true},
  {name: 'Mouse', category: 'Electronics', price: 105, inStock: false},

]

// console.log(typeof(products[0].inStock));
//false la falsy => return luon false => true truthy => 

  // ||

const result = '' || 'Default';
console.log(result);
  


//co 2 buoc . buoc 1 => lap phan tu -> tao den phan tu dau tien {name: 'Laptop', category: 'Electronics', price: 1200, inStock: true} => ok tra ra 
// =>[{name: 'Laptop', category: 'Electronics', price: 1200, inStock: true}]

//ophan tu 2 -> return product.category === 'Electronics' && product.inStock => {name: 'T-Shirt', category: 'Cotton', price: 25, inStock: true},
// =>[{name: 'Laptop', category: 'Electronics', price: 1200, inStock: true},   {name: 'T-Shirt', category: 'Cotton', price: 25, inStock: true},]
// const sanPhamCanTim = products.filter(function(product){
//   return product.category === 'Electronics1' && product.inStock === true
// })
// console.log(sanPhamCanTim);


// .map(function(product){
//   return {
//     name: product.name,
//     finalPrice: product.price * 0.9
//   }
// }).find(function(product){
//   return product.finalPrice < 1200
// })

// console.log(sanPhamCanTim);



