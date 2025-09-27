const globalConfig = {
    thoiDiem: "giờ cao điểm", // 'bình thường', 'ban đêm'
    coSuKienDacBiet: true,
    mucDoCanhBaoThoiTiet: "bình thường" // 'xấu', 'nguy hiểm'
};

// --- Mảng các tuyến đường chính cho sự kiện ---
const tuyenDuongChinh = ["GL01", "GL03"];

// --- Array of Objects: Dữ liệu thời gian thực từ các giao lộ ---
const duLieuGiaoThong = [
    { id: "GL01", luongXe: "cao", coNguoiDiBoCho: true, coXeCuuThuong: false, camBienPhu: { ghiChu: "Cảm biến A cần hiệu chỉnh." } },
    { id: "GL02", luongXe: "trung bình", coNguoiDiBoCho: false, coXeCuuThuong: true, camBienPhu: {} },
    { id: "GL03", luongXe: "thấp", coNguoiDiBoCho: true, coXeCuuThuong: false, camBienPhu: {} },
    { id: "GL04", luongXe: "cao", coNguoiDiBoCho: false, coXeCuuThuong: false, camBienPhu: { ghiChu: "Hoạt động ổn định." } }
];

// =================== BỘ NÃO TRUNG TÂM BẮT ĐẦU XỬ LÝ ===================
console.log(`Bắt đầu xử lý giao thông cho khung giờ: ${globalConfig.thoiDiem.toUpperCase()}`);

// BƯỚC 1 & 2: Áp dụng logic cho từng giao lộ bằng .map()
const lenhDieuKhien = duLieuGiaoThong.map(giaoLo => {
    // a. Xác định thời gian đèn cơ bản
    let thoiGianDenCoBan;
    if (globalConfig.thoiDiem === 'giờ cao điểm') {
        thoiGianDenCoBan = 30;
    } else if (globalConfig.thoiDiem === 'ban đêm') {
        thoiGianDenCoBan = 90;
    } else {
        thoiGianDenCoBan = 60;
    }

    // b. Tính điểm ưu tiên
    let diemUuTien = 0;
    if (giaoLo.coXeCuuThuong) diemUuTien += 50;
    if (giaoLo.luongXe === 'cao' && globalConfig.thoiDiem === 'giờ cao điểm') diemUuTien += 20;
    if (giaoLo.coNguoiDiBoCho) diemUuTien += 10;
    if (globalConfig.coSuKienDacBiet && tuyenDuongChinh.includes(giaoLo.id)) diemUuTien += 15;

    // c. Đưa ra hành động cuối cùng
    let hanhDong = "";
    if (giaoLo.coXeCuuThuong) {
        hanhDong = "ƯU TIÊN TUYỆT ĐỐI: MỞ LÀN KHẨN CẤP";
    } else {
        if (diemUuTien > 30) {
            hanhDong = "Tăng thời lượng đèn xanh";
        } else {
            hanhDong = "Vận hành theo chu kỳ cơ bản";
        }
    }
    
    if (globalConfig.mucDoCanhBaoThoiTiet === 'nguy hiểm') {
        hanhDong += " & CẢNH BÁO TRƠN TRƯỢT";
    }

    // d. Lấy thông tin bảo trì (dùng fallback ||)
    const ghiChuBaoTri = giaoLo.camBienPhu.ghiChu || "Không có";

    // Trả về object lệnh hoàn chỉnh
    return {
        giaoLoId: giaoLo.id,
        hanhDong,
        diemUuTien,
        thoiGianDenCoBan,
        ghiChuBaoTri
    };
});

console.log("\n--- TOÀN BỘ LỆNH ĐIỀU KHIỂN ĐÃ TẠO ---");
console.log(lenhDieuKhien);

// BƯỚC 3: LỌC RA DANH SÁCH "NÓNG"
const danhSachNong = lenhDieuKhien.filter(lenh => lenh.diemUuTien > 0 || lenh.hanhDong.includes("ƯU TIÊN"));

console.log("\n--- DANH SÁCH CÁC GIAO LỘ CẦN CHÚ Ý ĐẶC BIỆT ---");
console.log(danhSachNong);


// Viết một chương trình nhận vào globalConfig và duLieuGiaoThong, sau đó trả về một mảng lenhDieuKhien mới. Chương trình sẽ xử lý từng giao lộ trong mảng duLieuGiaoThong theo quy trình sau:
// Bước 1: Phân tích và Quyết định cho từng Giao lộ (Sử dụng .map())
// Với mỗi object giaoLo, bạn cần tạo ra một object lenh tương ứng, chứa các quyết định được suy ra từ logic phức tạp dưới đây.
// Bước 2: Logic xử lý bên trong .map() cho mỗi giao lộ
// a. Xác định thời gian đèn xanh cơ bản:
// Dựa vào globalConfig.thoiDiem, dùng if/else để đặt thoiGianDenCoBan:
// 'giờ cao điểm': 30 giây
// 'ban đêm': 90 giây
// 'bình thường': 60 giây
// b. Tính điểm ưu tiên (Priority Score):
// Khởi tạo diemUuTien = 0.
// Cộng điểm dựa trên các điều kiện sau:
// +50 điểm nếu giaoLo.coXeCuuThuong là true.
// +20 điểm nếu giaoLo.luongXe là 'cao' VÀ đang trong globalConfig.thoiDiem là 'giờ cao điểm'.
// +10 điểm nếu giaoLo.coNguoiDiBoCho là true.
// +15 điểm nếu globalConfig.coSuKienDacBiet là true VÀ id của giao lộ nằm trong mảng tuyenDuongChinh.
// c. Đưa ra hành động cuối cùng:
// Sử dụng if/else với các điều kiện logic phức tạp để xác định chuỗi hanhDong:
// ƯU TIÊN CAO NHẤT: Nếu giaoLo.coXeCuuThuong là true, hanhDong phải là "ƯU TIÊN TUYỆT ĐỐI: MỞ LÀN KHẨN CẤP". Các kiểm tra khác không cần xét.
// Nếu không có xe cứu thương:
// Nếu diemUuTien tính được ở trên lớn hơn 30, hanhDong là "Tăng thời lượng đèn xanh".
// Nếu không, hanhDong mặc định là "Vận hành theo chu kỳ cơ bản".
// Kiểm tra thời tiết (điều kiện độc lập): Nếu globalConfig.mucDoCanhBaoThoiTiet là 'nguy hiểm', nối thêm chuỗi " & CẢNH BÁO TRƠN TRƯỢT" vào hanhDong đã có.
// d. Lấy thông tin bảo trì (Sử dụng fallback với ||):
// Tạo một thuộc tính ghiChuBaoTri. Giá trị của nó được lấy từ giaoLo.camBienPhu.ghiChu.
// Nếu giaoLo.camBienPhu.ghiChu không tồn tại (undefined), fallback về giá trị mặc định là 'Không có'.
// Bước 3: Lọc danh sách cần chú ý đặc biệt (Sử dụng .filter())
// Sau khi đã có mảng lenhDieuKhien hoàn chỉnh, tạo một mảng mới tên là danhSachNong chỉ chứa các lệnh điều khiển của những giao lộ có xe cứu thương HOẶC có điểm ưu tiên lớn hơn 0.

// // Dữ liệu đầu vào
// // --- Object cấu hình toàn cục ---
// const globalConfig = {
//     thoiDiem: "giờ cao điểm", // 'bình thường', 'ban đêm'
//     coSuKienDacBiet: true,
//     mucDoCanhBaoThoiTiet: "bình thường" // 'xấu', 'nguy hiểm'
// };

// // --- Mảng các tuyến đường chính cho sự kiện ---
// const tuyenDuongChinh = ["GL01", "GL03"];

// // --- Array of Objects: Dữ liệu thời gian thực từ các giao lộ ---
// const duLieuGiaoThong = [
//     { id: "GL01", luongXe: "cao", coNguoiDiBoCho: true, coXeCuuThuong: false, camBienPhu: { ghiChu: "Cảm biến A cần hiệu chỉnh." } },
//     { id: "GL02", luongXe: "trung bình", coNguoiDiBoCho: false, coXeCuuThuong: true, camBienPhu: {} },
//     { id: "GL03", luongXe: "thấp", coNguoiDiBoCho: true, coXeCuuThuong: false, camBienPhu: {} },
//     { id: "GL04", luongXe: "cao", coNguoiDiBoCho: false, coXeCuuThuong: false, camBienPhu: { ghiChu: "Hoạt động ổn định." } }
// ];



// // =================== TESTCASES ===================
// function tinhLenh(globalCfg, tuyenChinh, duLieu) {
//     const lenh = duLieu.map(giaoLo => {
//         let thoiGianDenCoBan;
//         if (globalCfg.thoiDiem === 'giờ cao điểm') {
//             thoiGianDenCoBan = 30;
//         } else if (globalCfg.thoiDiem === 'ban đêm') {
//             thoiGianDenCoBan = 90;
//         } else {
//             thoiGianDenCoBan = 60;
//         }

//         let diemUuTien = 0;
//         if (giaoLo.coXeCuuThuong) diemUuTien += 50;
//         if (giaoLo.luongXe === 'cao' && globalCfg.thoiDiem === 'giờ cao điểm') diemUuTien += 20;
//         if (giaoLo.coNguoiDiBoCho) diemUuTien += 10;
//         if (globalCfg.coSuKienDacBiet && tuyenChinh.includes(giaoLo.id)) diemUuTien += 15;

//         let hanhDong = "";
//         if (giaoLo.coXeCuuThuong) {
//             hanhDong = "ƯU TIÊN TUYỆT ĐỐI: MỞ LÀN KHẨN CẤP";
//         } else {
//             if (diemUuTien > 30) {
//                 hanhDong = "Tăng thời lượng đèn xanh";
//             } else {
//                 hanhDong = "Vận hành theo chu kỳ cơ bản";
//             }
//         }

//         if (globalCfg.mucDoCanhBaoThoiTiet === 'nguy hiểm') {
//             hanhDong += " & CẢNH BÁO TRƠN TRƯỢT";
//         }

//         const ghiChuBaoTri = (giaoLo.camBienPhu && giaoLo.camBienPhu.ghiChu) || "Không có";

//         return {
//             giaoLoId: giaoLo.id,
//             hanhDong,
//             diemUuTien,
//             thoiGianDenCoBan,
//             ghiChuBaoTri
//         };
//     });

//     const nong = lenh.filter(l => l.diemUuTien > 0 || l.hanhDong.includes("ƯU TIÊN"));
//     return { lenh, danhSachNong: nong };
// }

