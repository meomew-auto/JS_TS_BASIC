// // ===============================================================================================
// // # BÀI 1: BIẾN 
// // ===============================================================================================

// /*
//     ## Biến là cái gì?
//     ## Biến và Bộ nhớ máy tính (RAM)
//     1.  Khai báo (Declaration)
//     2.  Gán giá trị (Assignment)
//     3.  Truy xuất (Retrieval)
// */
// // let teacherName
// // teacherName = 'Hoang'


// // console.log(teacherName)
// // console.log('dong thu 2')



// /*
//     ## Cách khai báo biến: `let` vs `const`
//     - `let`: Dùng cho biến có thể thay đổi giá trị.
//     - `const`: Dùng cho hằng số, giá trị không thể thay đổi sau lần gán đầu tiên.
// */

// // let diemSo;
// // diemSo = 8
// // console.log(diemSo)

// // diemSo = 102222
// // console.log(diemSo)


// // const soPi = 3.14

// // console.log(soPi)
// // soPi = 3.15
// // console.log(soPi)

// /*
//     ## NGHỆ THUẬT "IN" BIẾN RA MÀN HÌNH
//     1.  Nối chuỗi (+)
//     2.  Dùng dấu phẩy (,):
//     3.  Template Literals (dấu backtick ` `)
// */

// const tenTestCase = 'TC01 - Login'

// const trangThai = 'Passed'

// const thoiGianChay = 3500

// console.log('Test case: ' + tenTestCase + '-Status ' + trangThai + '-Duration '+ thoiGianChay)

// const tenTestCase2 = 'TC02 - LogOut'

// const trangThai2 = 'Failed'
// console.log('Test case:', tenTestCase2, "- Status:", trangThai2*2)

// const tenTestCase3 = 'TC03 - Registration'
// const thoiGianChay3 = 3500
// console.log(`Test case: ${tenTestCase3} - Duration: ${thoiGianChay3 * 2}`)



// // di sieu thi mua 2 cai ao, moi cai gia 25000VND. Thue VAT la 10% -> hoi tong so tien phai tra
// //Yc/ in ra man hinh so tien phai tra


// const giaMotAo = 25000

// let soLuongAo = 2

// let tongTienHang = giaMotAo * soLuongAo

// const thueVAT = 0.1

// let tongThanhToan = tongTienHang + (tongTienHang * thueVAT)

// console.log('Tong so tien phai tra ', tongThanhToan, 'VND')

// // let diemSoMoi = 10;




// // let sum = 2
// // let price = 25000
// // let vat = 0.1
// // let totalPrice = sum*price
// // let finalPrice = totalPrice+totalPrice*vat
// // console.log(`So tien phai tra la: ${finalPrice}`)



// /*
//     ## Quy tắc đặt tên biến
//     - Chỉ chứa: chữ cái (a-z, A-Z), chữ số (0-9), dấu gạch dưới (_), ký hiệu đô la ($).
//     - KHÔNG được bắt đầu bằng số.
//     - Chuẩn mực là `camelCase`
//     - Không được dùng "Từ khóa" của JavaScript (let, const, if, for...).
//     - Tên biến có phân biệt chữ HOA - chữ thường.
//     - Quan trọng nhất: Đặt tên phải có Ý NGHĨA!
// */

// // let tenKhachHang 
// // let ten_khach_hang 

// // let if = 1

// // let ten = 'Hoang'
// // let TEN = 'Hoang1'
// // let Ten = 'Hoang2'

// // console.log(ten, TEN, Ten)


// // let x = 10

// // let y = 'Hoang'

// // let z = x * 2

// // let soLuong = 10
// // let tenNguoiDung = 'Hoang'
// // let diemThuong = soLuong * 2



// let ten$ = 'An'
// console.log(ten$)




// // --- Cách viết gọn hơn ---
// // Vừa khai báo, vừa gán giá trị




















// // ===============================================================================================
// // # BÀI 2 & 3: CÁC LOẠI DỮ LIỆU NGUYÊN THỦY (PRIMITIVE TYPES)
// // ===============================================================================================

// // --- 1. String (Chuỗi) ---
// // Dùng cho văn bản.

// let loiChao = 'Xin chao buoi sang'
// const tenSach = 'Lap Trinh JS'

// console.log(typeof(loiChao))

// const userName = 'autmation@gmail.com'
// let id = 1
// const productSlector = `h2:has-id("${id})`



// // --- 2. Number (Số) ---
// // Dùng cho số nguyên và số thập phân.

// let tuoi = 30
// const PI = 3.14
// console.log(typeof(tuoi))
// console.log(typeof(PI))
// let ketQua = (tuoi - 6) * PI




// // --- 3. Boolean (Luận lý) ---
// // Chỉ có 2 giá trị: `true` hoặc `false`. Dùng để ra quyết định.

// let denDangBat = true
// let datTotNghiep = false

// console.log(typeof(denDangBat))

// let nutThanhToanIsVisible = false

// if (nutThanhToanIsVisible){
//     console.log('TEST PASS')
// }else{
//     console.log('TEST FAIL')
// }


// // --- 4. undefined ---
// // Biến đã được khai báo nhưng chưa được gán giá trị.

// let diaChiNha

// console.log(diaChiNha)



// // --- 5. null ---
// // Biểu thị sự "rỗng" một cách có chủ đích.


// let popupKhuyenMai = null

// console.log(typeof(popupKhuyenMai))


// if(popupKhuyenMai === null){
//     console.log('khong co khuyen mai ');

// }

// let age;

// console.log(age)

// if(age === undefined){
//     console.log(' day dung la gia tri undefined')
// }









// // ===============================================================================================
// // # BÀI TẬP: KIỂU DỮ LIỆU
// // ===============================================================================================

// // --- Bài 1: Tạo hồ sơ cá nhân ---

// // --- Bài 4: Chuẩn bị dữ liệu Test Case ---


// // ===============================================================================================
// // # BÀI 6: TÌM HIỂU SÂU VỀ CÁC LOẠI TOÁN TỬ
// // ===============================================================================================

// // --- Toán tử Gán (+=) và Tăng (++) ---
// // `x += y` tương đương `x = x + y`
// // `x++` tương đương `x = x + 1`

// // --- Toán tử So sánh (===) ---
// /*
//     - `==` (lỏng lẻo): Chỉ so sánh giá trị -> Dễ gây lỗi.
//     - `===` (nghiêm ngặt): So sánh cả giá trị và kiểu dữ liệu -> LUÔN LUÔN DÙNG.
// */

// // --- Toán tử Logic (&&, ||, !) ---
// // `&&` (VÀ): Cả hai phải đúng
// // `||` (HOẶC): Chỉ cần một cái đúng
// // `!` (PHỦ ĐỊNH): Lật ngược giá trị

// // --- Thứ tự ưu tiên và dấu ngoặc () ---
// // Dùng dấu ngoặc `()` để code rõ ràng và chắc chắn đúng logic

// parseInt()

// parseFloat(" 25.29")

// const tongTienText = "Tổng thanh toán: 2,540,000.50 VNĐ";


// // Bước 1: Dọn dẹp chuỗi hoàn toàn.
// const chuoiDaSach = tongTienText
//   .replace("Tổng thanh toán: ", "")
//   .replace(" VNĐ", "")
//   .replaceAll(",", ""); // Quan trọng: loại bỏ dấu phẩy


// console.log(`Chuỗi sau khi làm sạch: "${chuoiDaSach}"`); // "2540000.50"


// // Bước 2: Dùng Number() trên chuỗi đã sạch để có độ tin cậy cao nhất.
// const tongTien = Number(chuoiDaSach);
// console.log(tongTien); // Kết quả: 2540000.5
// console.log(Number.isNaN("hello"));
// Number.isNaNs
// console.log('');

Math.random()