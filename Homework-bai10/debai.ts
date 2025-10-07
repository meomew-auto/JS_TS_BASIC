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


type BorrowStatus = 'requested' | 'approved'
interface BookItem { title: string; quantity: number }
interface IBorrowRecord { recordId: string; borrowerName: string; items: BookItem[]; status: BorrowStatus; isValid(): boolean }


class BorrowRecord implements IBorrowRecord{
    recordId: string;
    borrowerName: string;
    items: BookItem[];
    status: BorrowStatus;

    constructor(recordId: string, borrowerName: string, items: BookItem[], status: BorrowStatus){
        this.recordId = recordId
        this.borrowerName = borrowerName
        this.items = items
        this.status = status
    }

    isValid(): boolean {
        if(this.items.length === 0 )return false
        if(this.items.find(item=>item.quantity< 1)) return false
        return true
    }

}
const r1 = new BorrowRecord('REC-001', '  Nguyen Van A  ', [{title: 'Clean code', quantity: 1 }], 'approved')
const r2 = new BorrowRecord('REC-001', '  Nguyen Van A  ', [], 'approved')
const r3 = new BorrowRecord('REC-001', '  Nguyen Van A  ', [{title: 'Clean code', quantity: 2 }], 'requested')


function getApprovedValid(records: IBorrowRecord[]): IBorrowRecord[]{
    const result: IBorrowRecord[] = []

    for (const r of records){
        if(r.status === 'approved' && r.isValid()){
            result.push(r)
        }
    }
    return result
}
function main(){
    const all = [r1, r2, r3]

    for (const r of all){
        console.log(`ID=${r.recordId}, Status = ${r.status}, Items: ${r.items.length}`);
    }

    const ok = getApprovedValid(all)

    console.log('\n After (approved  + hople)');
    for (const r of ok){
        console.log(`ID=${r.recordId}, Borrower= ${r.borrowerName.trim()}, Status = ${r.status}, Items: ${r.items.length}`);
        
    }

    if(ok.length === 0){
        console.log(`Khong co phieu muon nao dat dieu kien`);
        
    }
}

main()