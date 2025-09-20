

// // ===============================================================================================
// // # BÀI 2: BỘ ĐỒ NGHỀ "SƠ CHẾ" DỮ LIỆU: STRING & NUMBER METHODS
// // ===============================================================================================

// // --- String Methods ---
//length => done
// // .trim() - Cắt bỏ khoảng trắng thừa\ -> done
// // .includes() - Kiểm tra có chứa chuỗi con không => done
// indexOf() - vi trí của kí tự => done

// // .toLowerCase() / .toUpperCase() - Chuyển thành chữ thường/hoa để so sánh => done

// // .replace() / .replaceAll() - Thay thế ký tự <-done



// // .slice() - Cắt lát chuỗi <done

// // .split() - Tách chuỗi thành danh sách (mảng) <done


// // --- Number ---

// // .toFixed() - Làm tròn số thập phân (trả về string)

// // Math.random() - Tạo số ngẫu nhiên
// Math.floor() 
// Math.ceil()
//math.round()


// mat khau ko duoc < 8 va khong duoc lon hon 16 kt
// const matKhauKhongHopLe = ' 12345 '

// const viPhamDodai = (matKhauKhongHopLe.length < 8 || matKhauKhongHopLe.length > 16)

// if(viPhamDodai){
//     console.log('Loi mat khau khong du dai');
    
// }
// console.log(`Do dai cua mat khau la: ${matKhauKhongHopLe.length}`)


// const tuKhoaTimKiem = 'iphone 17'
// const tieuDeSanPhamUI = 'Apple Iphone 17 Pro Max' 
// // apple iphone 17

// const tuKhoaTimKiemLowerCase = tuKhoaTimKiem.toLowerCase()
// const tieuDeSanPhamUILowerCase = tieuDeSanPhamUI.toLowerCase()
// console.log(`tu khoa tim kiem: ${tuKhoaTimKiemLowerCase}, tieu de: ${tieuDeSanPhamUILowerCase}`);

// const coChuaTuKhoa = tieuDeSanPhamUILowerCase.includes(tuKhoaTimKiemLowerCase)
// console.log(coChuaTuKhoa)

// if(coChuaTuKhoa){
//     console.log('TEST PASS');
    
// }

// const coChuaTuKhoa = tieuDeSanPhamUI.toLowerCase().includes(tuKhoaTimKiem.toLowerCase())
// console.log(tieuDeSanPhamUI.toLowerCase());
// console.log(tieuDeSanPhamUI.toLocaleUpperCase());

// console.log(coChuaTuKhoa);

// trim()

// const tenNguoiDungUI = '       Nguyen Van A '
// const tenNguoiDungMongDoi = 'Nguyen Van A'
// const tenDaTrim = tenNguoiDungUI.trim()
// console.log(`ten da trim: ${tenDaTrim}`);

// console.log(tenNguoiDungMongDoi.toLowerCase().includes(tenDaTrim.toLowerCase()));

// replace() - replaceAll()

// const giaTienThucTeUI = 'Gia niem yet: 1,250.99 USD'

// const chuoiDaLamSachPhanGiaNiemYet = giaTienThucTeUI.replace('Gia niem yet: ', "")
// const chuoiDaLamSachPhanUSD = chuoiDaLamSachPhanGiaNiemYet.replace(' USD',"")
// const chuoiDaLamSachDauPhay = chuoiDaLamSachPhanUSD.replace(',',"")
// console.log(chuoiDaLamSachPhanGiaNiemYet)
// console.log(chuoiDaLamSachPhanUSD)
// console.log(chuoiDaLamSachDauPhay);

// const chuoiDaLamSachBangMotDong = giaTienThucTeUI.replace('Gia niem yet: ', "").replace(' USD',"").replace(',',"")
// console.log(chuoiDaLamSachBangMotDong);

// const giatienthucteUi = 'Gia niem yet: 1250 USD'
// const chuoiDalamsachgiadaniemyet= giatienthucteUi.replace('Gia niem yet: ',"")
// const ChuoidalamsachUSD = chuoiDalamsachgiadaniemyet.replace(' USD',"")
// console.log(chuoiDalamsachgiadaniemyet)
// console.log(ChuoidalamsachUSD);
// chuoiDalamsachgiadaniemyet.length

// 1250.99 <- expected
// const dateString = '2025-12-25'

// //format date la dang 2025/12/25
// console.log(dateString.replaceAll('-','/'))


// const breadCrumbText = 'Trang chu > Dien Thoai > Apple'

// const breadCrumbArray = breadCrumbText.split(' > ')
// console.log('ARRAY BREADCRUMB ', breadCrumbArray);

// console.log(breadCrumbArray.length);


//indexOf()
// torng JS tat ca vi tri se bat dau tu 0 
// const tieuDe = 'Automation Testing that thu vi'

// const viTri = tieuDe.indexOf('Testing')

// console.log(`Tu Testing bat dau o vi tri: ${viTri}`);

// const urlHienTai = 'https://example.com/login?status=success'

// const ketQuaTimKiem = urlHienTai.indexOf('error')


// console.log(`Ket qua cua indexOf ${ketQuaTimKiem}`);

// if (ketQuaTimKiem === -1){
//     console.log('URL KO CHUA THAM SO LOI, DANG NHAP THANH CONG')
// }else{
//     console.log('DANG NHAP THAT BAI');
    
// }

// ?id=ORD-987654-2025& -> ORD-987654-2025
// slice -> nhan 2 doi so (vi tri bat dau, vi tri ket thuc)

// const urlTrangThanhCong = 'https://example.com/order-sucess?id=SPX-987654-2025&status=paid'



// console.log(phanSauDauBang);

// const maDonHang  = phanSauDauBang.split('&')[0]
// console.log(maDonHang);

// Number

//Math.floor 
// console.log(Math.floor(4.99)); //4
// console.log(Math.floor(4.01)); //4


// //Math.ceil

// console.log(Math.ceil(4.99)) //5
// console.log(Math.ceil(4.01)); //5

// // -> neu phan thap phan >= .5  
// //Lam torng theo quy tac thong thuong
// console.log(Math.round(4.7)) // 5
// console.log(Math.round(4.49)); //4



// random trong JS tra ve so thap phan ngau nhien 0 <= so ngau nhien < 1
// console.log(Math.random());

// CT1 tao so nguyen 0 > max
// Math.floor(Math.random() * (max + 1))

// tao ra so ngau nhien tu 0 > 100

// const soNgauNhien = Math.floor(Math.random() * 101)

// console.log(`so ngau nhien ${soNgauNhien}`);


// Math.random() => tra ve 0 <= so ngau nhien < 1

// gia tri nho nhat : 0 * 101  = 0
// gia tri lon nhat 0.99999 * 100 = 99,99999
// Math.floor()
// console.log(Math.ceil(Math.random()*100))





// CT 2 tao so nguyen tu min -> max
//tao so nguyen gioi han tu 50 > 100
// Math.floor(Math.random() * (max - min + 1 ) + min)

// const min = 50
// const max  = 100
// const soNgauNhien = Math.floor(Math.random() * (max - min + 1)) + min
// console.log(soNgauNhien);

//muon tim random trong 1 khoang tu 50 > 55: ket qua co the bao gom 50, 51, 52, 53, 54, 55
// -> tim do rong => 55 - 50 = 5 + 1 = 6 => do rong =6 

// Math.random(). do rong => 0 -> 5.99999
//Math.floor -> 0, 1 , 2, 3, 4, 5

// 0 + 50 = 50
// 1 + 50 = 51 


// const tamTinhTextUI = 'Tam tinh : 1,250,500.75 VND';
// const tongCongTextUI = 'Tong cong (da giam): 1,125,450.75 VND';

// let tamTinh = tamTinhTextUI.replaceAll(',', '').replace(' VND', '').replace('Tam tinh : ', '')
// let tongCong = tongCongTextUI.replaceAll(',', '').replace(' VND', '').replace('Tong cong (da giam): ', '')

// console.log(tamTinh) 
// console.log(tongCong)


// const randomNumber = ...
// console.log(`tester_${randomNumber}`);


// const randomNumber = Math.floor(Math.random() * 10000);
// const user = `tester_${randomNumber.toString().padStart(4, '0')}`;
// console.log(user);

// const randomNum = Math.floor(Math.random() * 9000) + 1000

// console.log(`tester_` + randomNum)

// const min = 1000
// const max = 9999
// const randomNumber2 = Math.floor(Math.random() * (max - min +1 )) + min

// const randomUser2 = `tester_${randomNumber2}`
// console.log(randomUser2);




// const tamTinhTextUI = 'Tam tinh: 1,250,500.75 VND'
// const tongCongTextUI = 'Tong cong (da giam): 1,125,450.75 VND'

//YC: so che 2 chuoi tren thanh 1250500.75 va 112545075

// dung Math.random de tao user ngau nhien dang tester_ + 4 chu so ngau nhien (vi du tester_8212)
// console.log(`tester_{}`);




// const viTriBatDau = urlTrangThanhCong.indexOf('id=') + 3
// // const viTriBatDau = urlTrangThanhCong.indexOf('ORD')

// const viTriKetThuc = urlTrangThanhCong.indexOf('&')

// const maDonHang = urlTrangThanhCong.slice(viTriBatDau, viTriKetThuc)

// console.log(`Ma don hang nhan duoc la ${maDonHang}`);






// // ===============================================================================================
// // # BÀI 2: CÁC PHÉP TOÁN SỐ HỌC VÀ ÉP KIỂU
// // ===============================================================================================

// // --- Các phép toán cơ bản ---
// // +, -, *, /, % (chia lấy dư)
// A/B testing
// moi nguoi co 1 ID khac nhau
//  => userID chan thi la se vao giao dien B => userID le thi vao giao dien A

// const userIdChan = 84322
// const userIdLe = 84321

// const soDu = userIdChan % 2

// if(soDu === 0){
//     console.log('GIAO DIEN B');
    
// }else{
//     console.log('GIAO DIEN A');
    
// }




// console.log(``);
// const str1 = 'Xin '
// const str2 = 'Chao '

// const greeting = str1.concat(str2)
// console.log(greeting);


// const soLuongKeo = 5
// const soLuongBanh = 5
// console.log(`Tong so: ${soLuongBanh + soLuongKeo}, type of: ${typeof(soLuongBanh + soLuongKeo)}`);

// const donGiaText = 25000 
// const phiShip = "10000"

// console.log(`Tong tien ${donGiaText + phiShip}, type of: ${typeof(donGiaText+ phiShip)}`);

// const donGiaText = "25000VND" 
// const phiShip = "10"

// console.log(`Tong tien ${donGiaText * phiShip}, type of: ${typeof(donGiaText * phiShip)}`);

// const chieuRongText = "350px" 
// chieuRongText.replace("px", "")


// // --- Ép kiểu dữ liệu ---
// /*
//     Tại sao cần? Dữ liệu lấy từ web luôn là STRING.
//     - `Number(value)`: Nghiêm ngặt, chuỗi phải sạch.
//     - `parseInt(value)`: Lấy số nguyên từ đầu chuỗi.
//     - `parseFloat(value)`: Lấy số thập phân từ đầu chuỗi.
// */


//parseInt()

// const soLuongText = "15 30san 30 pham"
// console.log(parseInt(soLuongText))

// //parseFloat()

// const giaTienText = '$29.99 USD'
// console.log(Number(giaTienText));

// const giaTien = giaTienText.replace('$', '')
// console.log(parseFloat(giaTien));

// //Number
// const tongTienText = 'Tong thanh toan: 2,540,000.50 VND'

// const chuoiDaLamsach = tongTienText.replace('Tong thanh toan: ', '').replace(' VND', '').replaceAll(',',"")

// console.log(chuoiDaLamsach);
// const chuoiNumber = Number(chuoiDaLamsach)
// console.log(`Ta co chuoi: ${chuoiNumber}, ${typeof(chuoiNumber)} `);

// console.log(`dau cach ${parseInt(" 100 20 pham")}`);


//b1: Lay du lieu tho tu UI (Luon 100% la dang string)
//b2: so che du lieu bang cac phuong thuc chuoi ()
//b3: ep kieu bang cong cu phap thich hop 
//b4: thuc hien tinh toan tu b3
//NAN
//ep kieu that bai => tra ra NAN  
// let ketQua1 = parseInt("hello")
// console.log(ketQua1);
// // thu hien phep toan bat khi thi, vo nghia => NAN
// let ketQua2 = 100 * 'ao'
// console.log(ketQua2);

// Number.isNaN()=> tra ve true neu param truyen vao la NAN
// let ketQuaTinhToan = parseInt("abc")
// console.log(Number.isNaN(ketQuaTinhToan));
// console.log(Number.isNaN('hello'));


// const tonKhoText1 = 'Ton kho: 25'
// const tonKhoText2 = 'Ton kho: het hang'

// function kiemTraVaHanhDong(inputText){
//     console.log(`Dang xy ly chuoi ${inputText}`);
    
//     //b2,b3: so che va ep kieu
//     const chuoiSo = inputText.replace('Ton kho: ','')
//     const soLuong = parseInt(chuoiSo) 

//     //b4
//     if(Number.isNaN(soLuong)){
//         console.log('San pham het hang, bo qua hanh dong them vao gio');
        
//     }else{
//         console.log(`so luong hang con la ${soLuong}`);
//         if( soLuong > 0){
//            console.log('Thuc hien hanh dong them vao giio hang');
                
//         }
//     }


// }
// console.log('Kich ban1: con hang');
// kiemTraVaHanhDong(tonKhoText1)

// console.log('Kich ban2: het hang');
// kiemTraVaHanhDong(tonKhoText2)







// // --- Kiểm tra NaN ---
// // Dùng Number.isNaN() để kiểm tra an toàn

// Toán tử Gán (Assignment Operators)
// 	x = 10	x = 10
// +=	x += 5	x = x + 5
// -=	x -= 5	x = x - 5
// *=	x *= 2	x = x * 2

// let soTestCaseFail = 0
// //lan dau test 1 login that bai
// soTestCaseFail *= 2 
// // soTestCaseFail = soTestCaseFail + 1
// console.log(soTestCaseFail);



// Toán tử Tăng/Giảm (Increment/Decrement Operators)
//++x và x++

// hau to: x++ -> tra ve gia tri cu, roi moi tang
//lam 2 viec: viec dau tien: lay gia tri hien tai cua bien va tra ve gia tri do de su dung
// trong bieu thuc
// b2 => tnag gia x

// to ve xem phim y = x++
// let thuTuVeXemPhim = 10

// let veHienTai = thuTuVeXemPhim++

// console.log(`ve hien tai bay gio dang la so: ${veHienTai}`);
// console.log(`thu tu bay gio la: ${thuTuVeXemPhim}`);


//tien to: ++x => lam 2 buoc .b1 -> tang gia bien x len 1 ngay lap tuc, => tra ve gia tri do su dung trong bieu thuc



// let thuTuVeXemPhim = 10

// let veHienTai = ++thuTuVeXemPhim

// console.log(`ve hien tai bay gio dang la so: ${veHienTai}`);
// console.log(`thu tu bay gio la: ${thuTuVeXemPhim}`);
// console.log(`tong so ve da phat hanh ${thuTuVeXemPhim}`);


// let soLanClick = 0

// console.log('Da click lan dau tien');

// soLanClick++  
// ++soLanClick

// console.log(`Tong so lan da click ${soLanClick}`);

// let attemts = 0
// const MAX_ATTEMPTS = 3;
// function perfromClickWithRetry(){
//     attemts++
//     console.log(`Bat dau thu hien click, lan thu: ${attemts}`);

//     const isSuccess = false;

//     if(!isSuccess){
//         if(attemts >= MAX_ATTEMPTS){
//             console.error(`Da thu ${attemts} va van that bau. Dung lai`)
//         }else{
//             console.log(`-> click that bai, so lan da thu ${attemts}`);
            
//         }     
//     }

    
// }

// perfromClickWithRetry()

// perfromClickWithRetry()

// perfromClickWithRetry()

// perfromClickWithRetry()





// Toán tử So sánh (Comparison Operators) - Trái tim của Automation
// >, <, >=, <=        Lớn hơn, nhỏ hơn, lớn hơn hoặc bằng, nhỏ hơn hoặc bằng
// ==, !=  Bằng, không bằng (Lỏng lẻo)

// ===, !== Bằng, không bằng (Nghiêm ngặt)

// console.log(`So sanh ${3> 4}`);


// == ===
// const giaTriTuUI = '10'
// const giaTriTuDb = '10'
// const soSanhGiaTriLongLeo = giaTriTuUI != giaTriTuDb
// console.log(soSanhGiaTriLongLeo);

// const soSanhGiaTriStrict = giaTriTuUI !== giaTriTuDb
// console.log(soSanhGiaTriStrict);

// const responseAPI = {
//     product: "Laptop",
//     quantity: false //Loi, Dang le phai = 0
// }
// const soLuongMongDoi = 0;
// if(responseAPI.quantity === soLuongMongDoi){
//     console.log(`PASSEDDDD`);
    
// }else{
//     console.log(`FAILEDDDD`);
    
// }

// const giaTriInput = ''

// const giaTriMongMuon = 0
// if(giaTriInput === giaTriMongMuon){
//     console.log('PASSED');
    
// }



//so sanh == => convert fasle => 0, va '' => 0




// Toán tử Logic (Logical Operators) - Kết hợp các điều kiện

//  && (AND - Và)
// || (OR - Hoặc)
// ! (NOT - Phủ định)
// Thứ tự ưu tiên của các toán tử trong JavaScript


// const nutDangNhapIsVisible = true
// const nutDangNhapIsEnabled = true

// const coTheClickDangNhap = nutDangNhapIsEnabled && nutDangNhapIsVisible

// if(coTheClickDangNhap){
//     console.log('PASS DIEU KIEN');
    
// }else{
//     console.log('FAIL DIEU KIEN ');
    
// }

// const thongBaoThucTeUI = 'Cam on ban da mua hang1'

// const laThongHopLe = (thongBaoThucTeUI === 'Cam on ban da mua hang') || (thongBaoThucTeUI ==='Dat hang thanh cong')

// if(laThongHopLe){

//     console.log('TEST PASED');
    
// }else{

//     console.log('TEST FAIL');
    
// }

// ! 
// let spinnerIsVisile = false
// //thang spinner = true -> co nghia la no visible la bien mat o tren web
// // thang spinner = fase => co nghia la no dang o tren web 
// //cac action tiep theo de chac chan hoac cap nhat lai bien spinnerIsVisile

// if(!spinnerIsVisile){
//     console.log('SPINNER DA BIEN MAT. CO THE THUC HIEN BUOC TIEP THEO');
//     ///page.fill('')
// }else{
//     console.log('Van CON SPINNER');
    
// }



// ### ## Bảng thứ tự ưu tiên các toán tử

// | Mức ưu tiên | Loại toán tử | Toán tử |
// | :--- | :--- | :--- |
// | **Cao nhất** (1) | Dấu ngoặc (Grouping) | `( ... )` |
// | 2 | Truy cập thuộc tính, Lời gọi hàm | `.` , `()` , `[]` |
// | 3 | Phủ định, Tăng/Giảm (Unary) | `!`, `++`, `--`, `typeof` |
// | 4 | Nhân / Chia / Chia lấy dư | `*`, `/`, `%` |
// | 5 | Cộng / Trừ | `+`, `-` |
// | 6 | So sánh quan hệ | `>`, `<`, `>=`, `<=` |
// | 7 | So sánh bằng (Nghiêm ngặt) | `===`, `!==` |
// | 8 | Logic AND | `&&` |
// | 9 | Logic OR | `||` |
// | 10 | Toán tử ba ngôi (Conditional) | `? :` |
// | **Thấp nhất** (11) | Gán (Assignment) | `=`, `+=`, `-=` |


const tongTienDonHang = 60000
const laThanhVienVip = true
const coMaGiamGiaDacBiet = false


// let duocGiamGia = laThanhVienVip && tongTienDonHang > 50000 || coMaGiamGiaDacBiet


// // b1. phep so sanh quan he
// //tong don hang > 50000 -> 60000 > 50000 -> true
// //b2
// //laThanhVienVip && true  => true 
// console.log('CO DUOC GIAM GIA HAY KHONG', duocGiamGia);

// let duocGiamGia = (laThanhVienVip && tongTienDonHang > 50000) || coMaGiamGiaDacBiet

// console.log(duocGiamGia);
