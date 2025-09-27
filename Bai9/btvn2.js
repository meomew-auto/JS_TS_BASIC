// Bối cảnh thực tiễn:
// Bạn tiếp tục làm việc cho công ty thương mại điện tử. Lần này, bạn được giao nhiệm vụ xây dựng chức năng cốt lõi của hệ thống thanh toán: tính toán tổng số tiền cuối cùng cho một giỏ hàng. Việc tính toán này phức tạp vì công ty có nhiều chương trình khuyến mãi chồng chéo, áp dụng cho từng sản phẩm và cả cho khách hàng thân thiết.
// Yêu cầu:
// Viết một hàm tên là tinhTienThanhToan() nhận vào 2 tham số:
// 1.	gioHang (kiểu Mảng): Một mảng chứa các đối tượng (object), mỗi đối tượng đại diện cho một sản phẩm trong giỏ hàng.
// 2.	khachHang (kiểu Đối tượng): Một đối tượng chứa thông tin của khách hàng, quan trọng nhất là loại thành viên.
// Hàm này phải trả về (return) một đối tượng chứa thông tin chi tiết về hóa đơn, bao gồm: tongTienGoc (tổng tiền trước giảm giá), tongGiamGia, và soTienPhaiTra (số tiền cuối cùng).
// ________________________________________
// Cấu trúc dữ liệu:
// Đối tượng Sản phẩm trong mảng gioHang sẽ có dạng:
// JavaScript
// {
//   id: 'SP001',
//   ten: 'Laptop ABC',
//   danhMuc: 'Dien Tu',
//   gia: 25000000,
//   soLuong: 1
// }
// Đối tượng khachHang sẽ có dạng:
// JavaScript
// {
//   ten: 'Nguyen Van A',
//   loaiThanhVien: 'Vang' // Có 3 loại: 'Vang', 'Bac', 'Dong'
// }
// ________________________________________


// Các quy tắc tính toán & khuyến mãi:
// 1.	Tính tổng tiền gốc: Đầu tiên, cần tính tổng tiền của tất cả sản phẩm trước khi áp dụng bất kỳ khuyến mãi nào (gia * soLuong).
// 2.	Khuyến mãi theo Danh mục:
// o	Giảm giá 10% cho tất cả các sản phẩm thuộc danh mục "Dien Tu".
// o	Giảm giá 15% cho tất cả các sản phẩm thuộc danh mục "Thoi Trang".
// 3.	Khuyến mãi đặc biệt cho Sản phẩm:
// o	Với sản phẩm có id là "SP003", nếu khách hàng mua từ 3 sản phẩm trở lên, họ sẽ được miễn phí 1 sản phẩm (tương đương với việc chỉ tính tiền cho soLuong - 1 sản phẩm).
// 4.	Giảm giá cuối cùng cho Thành viên thân thiết:
// o	Sau khi đã áp dụng tất cả các khuyến mãi trên, tổng số tiền sẽ được giảm thêm một lần nữa dựa trên hạng thành viên của khách hàng:
// 	Thành viên "Vang": Giảm thêm 10%.
// 	Thành viên "Bac": Giảm thêm 5%.
// 	Thành viên "Dong": Không được giảm thêm.
// ________________________________________
// Gợi ý và Hướng dẫn 
// •	Chia để trị: Đừng cố gắng viết tất cả logic trong một hàm duy nhất. Hãy tạo các hàm phụ (helper functions) cho từng nhiệm vụ, ví dụ:
// o	tinhTongTienGoc(gioHang)
// o	tinhGiamGiaSanPham(sanPham)
// o	tinhGiamGiaThanhVien(soTien, loaiThanhVien)
// •	Dùng vòng lặp: Sử dụng vòng lặp for...of hoặc map/reduce để duyệt qua mảng gioHang.
// •	Tích lũy giá trị: Khởi tạo các biến như tongTienGoc, tongGiamGia bên ngoài vòng lặp và cộng dồn giá trị vào chúng trong mỗi vòng lặp.
// ________________________________________
// Dữ liệu mẫu để kiểm tra:
// Hãy dùng dữ liệu sau để chạy thử hàm của bạn:
// JavaScript
// const gioHangMau = [
//   { id: 'SP001', ten: 'Laptop Gaming XYZ', danhMuc: 'Dien Tu', gia: 30000000, soLuong: 1 },
//   { id: 'SP002', ten: 'Ao Thun Polo', danhMuc: 'Thoi Trang', gia: 500000, soLuong: 2 },
//   { id: 'SP003', ten: 'Chuot khong day', danhMuc: 'Phu Kien', gia: 300000, soLuong: 4 }, // Mua 4, đủ điều kiện KM
//   { id: 'SP004', ten: 'Tai nghe Bluetooth', danhMuc: 'Dien Tu', gia: 1500000, soLuong: 1 }
// ];

// const khachHangVang = {
//   ten: 'Nguyen Thi B',
//   loaiThanhVien: 'Vang'
// };
// ________________________________________

/**
 * Tính toán tổng giảm giá cho một sản phẩm duy nhất dựa trên các quy tắc.
 * @param {object} sanPham - Đối tượng sản phẩm.
 * @returns {number} - Số tiền được giảm giá cho sản phẩm này.
 */
function tinhGiamGiaChoMotSanPham(sanPham) {
  let giamGia = 0;
  const tongTienSanPham = sanPham.gia * sanPham.soLuong;

  // Quy tắc 1: Khuyến mãi đặc biệt (mua 3 tặng 1)
  if (sanPham.id === 'SP003' && sanPham.soLuong >= 3) {
    giamGia += sanPham.gia; // Giảm giá đúng bằng giá 1 sản phẩm
  }

  // Quy tắc 2: Khuyến mãi theo danh mục
  switch (sanPham.danhMuc) {
    case 'Dien Tu':
      giamGia += tongTienSanPham * 0.10; // Giảm 10%
      break;
    case 'Thoi Trang':
      giamGia += tongTienSanPham * 0.15; // Giảm 15%
      break;
  }

  return giamGia;
}

// --- HÀM CHÍNH ---

/**
 * Tính toán chi tiết hóa đơn cho giỏ hàng của một khách hàng.
 * @param {Array<object>} gioHang - Mảng các sản phẩm trong giỏ.
 * @param {object} khachHang - Đối tượng khách hàng.
 * @returns {object} - Hóa đơn chi tiết.
 */
function tinhTienThanhToan(gioHang, khachHang) {
  let tongTienGoc = 0;
  let tongGiamGiaSanPham = 0;

  // Bước 1 & 2: Duyệt qua giỏ hàng để tính tổng tiền gốc và tổng giảm giá sản phẩm
  for (const sanPham of gioHang) {
    tongTienGoc += sanPham.gia * sanPham.soLuong;
    tongGiamGiaSanPham += tinhGiamGiaChoMotSanPham(sanPham);
  }

  // Bước 3: Tính số tiền sau khi đã áp dụng giảm giá sản phẩm
  const soTienSauGiamGiaSP = tongTienGoc - tongGiamGiaSanPham;

  // Bước 4: Tính giảm giá cuối cùng cho thành viên
  let giamGiaThanhVien = 0;
  switch (khachHang.loaiThanhVien) {
    case 'Vang':
      giamGiaThanhVien = soTienSauGiamGiaSP * 0.10; // Giảm 10%
      break;
    case 'Bac':
      giamGiaThanhVien = soTienSauGiamGiaSP * 0.05; // Giảm 5%
      break;
    // Mặc định 'Dong' không giảm
  }

  // Bước 5: Tính toán các con số cuối cùng
  const tongGiamGia = tongGiamGiaSanPham + giamGiaThanhVien;
  const soTienPhaiTra = tongTienGoc - tongGiamGia;

  // Bước 6: Trả về kết quả dưới dạng một đối tượng
  return {
    tongTienGoc: tongTienGoc,
    tongGiamGia: tongGiamGia,
    soTienPhaiTra: soTienPhaiTra,
    chiTietGiamGia: {
      giamGiaSanPham: tongGiamGiaSanPham,
      giamGiaThanhVien: giamGiaThanhVien
    }
  };
}

// --- SỬ DỤNG HÀM VỚI DỮ LIỆU MẪU ---

const gioHangMau = [
  { id: 'SP001', ten: 'Laptop Gaming XYZ', danhMuc: 'Dien Tu', gia: 30000000, soLuong: 1 },
  { id: 'SP002', ten: 'Ao Thun Polo', danhMuc: 'Thoi Trang', gia: 500000, soLuong: 2 },
  { id: 'SP003', ten: 'Chuot khong day', danhMuc: 'Phu Kien', gia: 300000, soLuong: 4 },
  { id: 'SP004', ten: 'Tai nghe Bluetooth', danhMuc: 'Dien Tu', gia: 1500000, soLuong: 1 }
];

const khachHangVang = {
  ten: 'Nguyen Thi B',
  loaiThanhVien: 'Vang'
};

const hoaDon = tinhTienThanhToan(gioHangMau, khachHangVang);

