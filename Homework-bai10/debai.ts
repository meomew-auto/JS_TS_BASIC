// Đề bài: Lọc phiếu mượn sách (bản siêu đơn giản)
// Xây dựng chương trình quản lý phiếu mượn với yêu cầu:
// Khai báo:
// type BorrowStatus = 'requested' | 'approved'
// interface BookItem { title: string; quantity: number }
// interface IBorrowRecord { recordId: string; borrowerName: string; items: BookItem[]; status: BorrowStatus; isValid(): boolean }
// Tạo lớp BorrowRecord implements IBorrowRecord:
// isValid() trả về true nếu: có ít nhất 1 sách AND mọi quantity >= 1.
// Tạo 3 bản ghi viết tay (không random, không thư viện):
// 1 phiếu approved hợp lệ (>=1 sách, quantity hợp lệ).
// 1 phiếu approved nhưng không hợp lệ (0 sách).
// 1 phiếu requested hợp lệ.
// Viết hàm getApprovedValid(records):
// Trả về danh sách phiếu approved và isValid() === true.
// Dùng vòng lặp thường (for/of)
// main():
// In danh sách “BEFORE”: id, status, số sách.
// Gọi getApprovedValid, in “AFTER”: các phiếu đạt yêu cầu (id, borrower đã trim(), số sách).
// Nếu không có phiếu nào đạt, in: “Không có phiếu mượn nào đạt điều kiện.”