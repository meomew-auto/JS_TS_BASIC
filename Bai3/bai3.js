// if else

// if(dieukien){
//     hanh dong A
// }else{
//     hanh dong B
// }

// const tenNguoiDungIsVisible = false

// if(tenNguoiDungIsVisible){
//     console.log('DANG NHAP THANH COng')
// }else{
//     console.log('DANG NHAP THAT BAI');
    
// }

// if(dieu_kien_1){
//     hd A
// }else if(dieu kien 2){
//     hdB
// }else if (dieu kien 3){
//     hdC
// }else{
//     hd mac dinh
// }

// const trangThaiDonHang = 'Dang giao hang1'

// console.log('KIEM TRA TRANG THAI DON HANG ', trangThaiDonHang);

// if (trangThaiDonHang === 'Dang xy ly'){
//     console.log('KIEM TRA NUT HUY DON HANG PHAI DUOC HIEN THI');

    
// }else if(trangThaiDonHang ==='Dang giao hang'){
//     console.log('KIEM TRA NUT THEO DOI DON HANG PHAI DUOC HIEN THI');
    
// }else if(trangThaiDonHang ==='DA GIAO HANG'){
//     console.log('NUT DANH GIA SAN PHAM CAN HIEN THI');
    
// }else{
//     console.log(`TRANG THAI DON HANG LA ${trangThaiDonHang} . ko can kiem tra`);
    
// }


// =================== ROBOT BẮT ĐẦU LÀM VIỆC ===================
// if ()
    // else

// cu phap toan tu 3 ngoi
// dieu_kien ? gia tri neu dung : gia tri neu sai
// const isLoggedIn = false

// let message;
// if(isLoggedIn){
//     message = 'User is currently loggged in'
// }else{
//     message = 'User is logged out'
// }

// console.log(message);

// const message2 = isLoggedIn ? 'User is currently loggged in' : 'User is logged out'
// console.log(message2);


// const orderStatus = 'Pending1'

// let iconColor;

// if (orderStatus === 'Sucess'){
//     iconColor = 'Green'
// }else if(orderStatus =='Pending'){
//     iconColor ='orange'
// }else{
//     iconColor = 'red'
// }

// console.log(`mau icon la: ${iconColor}`);

// const iconColor2 = orderStatus === 'Success' ? 'Green' :  //if
//                     orderStatus === 'Pending'? 'Orange': //else if
//                     'red' //else

// console.log(iconColor2);

// const userRole = 'mode'
// let canDeletePost = userRole === 'admin' ? true : userRole === 'mode' ? true : false
// console.log(userRole);


// const userRole = 'mode'

// let canDeletePost2;
// if(userRole === 'admin' || userRole === 'mode'){
//     canDeletePost2 = true
// }else{
//     canDeletePost2 = false
// }
// console.log(canDeletePost2);

//switch case....
// switch (bien_can_kiem tra){
//     case giaTri1:
//         //code thuc thi
//         break;
//     case gia tri2:
//         //code thuc thi
//        break; 
        
//     default:
//         code thuc thi khi kong co case nao khop   
// }

//thuong se su dung de kiem ra bien duy nhat voi nhieu gia tri kha thi
// 
// const enviroment = 'dev'

// let baseUrl;
// let userName;
// let password;

// switch(enviroment){
//     case 'dev':
//         baseUrl = 'dev.example.com'
//         userName = 'dev-user'
//         password = 'dev-pass'
//     case 'staging':
//         baseUrl = 'stg.example.com'
//         userName = 'stg-user'
//         password = 'stg-pass'
//     default:
//         console.log('Loi moi truong ko tim thay');
        
// }

// console.log(`cau hinh duoc thiet lap voi URL: ${baseUrl}, ${userName}, ${password}`);


// const browser = 'chrome'


// firefox, safari

//truthy va falsy

// toan tu logic co 2 toan tu || &&
// a || b, a && b
// let userName = null;

// const userToDisplay = userName || 'Guest'

// console.log(userToDisplay);

// let userNameInput = ''


// // const useNameInputDisplay = userNameInput || 'Default' 

// if (userNameInput !== '' && userNameInput !== null && userNameInput !==undefined 
//     && userNameInput !== NaN && userNameInput !== 0

// ){
//     console.log('USER ko nhap du gia tri');
    
// }
// if(userNameInput){
//     console.log('USER ko nhap  du gia tri');

// }else{
//     console.log('User da nhap chuoi rong');
    
// }
// console.log(useNameInputDisplay);


//6 gai tri ma javascript coi la falsy => 
// 1. false
// 2. 0
// 3. ''
// 4. null
// 5. undefined
// 6. NaN

// check trong dieu kien if(), || , && la dua tren falsy hoac truthy
// neu la falsy => false
// neu la truthy -> true

// const errorMessage = []; 
// // {}
// // "0" => truthy
// // "false" => truthy
// // []

// const report = errorMessage ? 'Co loi can xem lai' : 'Tat ca deu pass'
// //check do dai cua mang errorMessage (xem co bn phan tu)
// console.log(errorMessage.length);


// const arr = ["",""]


