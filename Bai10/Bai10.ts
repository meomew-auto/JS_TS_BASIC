import {faker} from '@faker-js/faker'


// const newCustom = {
//     name: `${faker.person.fullName()}`,
//     email: `${faker.internet.email()}`
// }

// console.log(newCustom);
// interface giong nhu 1 hop dong boa hiem => dam bao thang su dung phai tuan theo
type UserRole = 'Admin' | 'Member' | 'Guest'

interface IUser {
    id: string;
    name: string;
    email: string;
    role: UserRole
    isActive: boolean,

    getFullName(): string;
    generateMessage(template: string): string

}

interface IMarketingContact {
    fullName: string;
    email: string;
    personalBody:string 
}

class User implements IUser{
    id: string;
    name: string;
    email: string;
    role: UserRole;
    isActive: boolean;
    
    constructor(name:string, email:string, role: UserRole, isActive: boolean){
        this.email = email;
        this.name = name;
        this.id = faker.string.uuid()
        this.role = role,
        this.isActive = isActive
    }

    getFullName(): string{
        return this.name.trim()
    }

    generateMessage(template: string): string{
        const cleanName = this.getFullName()
        return template.replace('{{NAME}}', cleanName)
    }

    
}
//4 nguyen tac OOP => ke thua 
class SubUser extends User{

}


function createRandomUser(): IUser{
    return new User(`   ${faker.person.fullName()}  `, faker.internet.email(), 
    faker.helpers.arrayElement(['Admin', 'Member', 'Guest']), faker.datatype.boolean())
}

function processUserForMarking(users:IUser[]):IMarketingContact[]{

    const emailTemplate = 'Xin chao {{NAME}}, cam on ban la thanh vien tich cuc '

    const marketingList = users.filter(user =>user.role === 'Member' && user.isActive).
    map(user => {

        return {
            fullName: user.getFullName(),
            email: user.email,
            personalBody:user.generateMessage(emailTemplate) 
        }

    })
    return marketingList

}
function main(){
    const rawUsers: IUser[] = Array.from({length: 10}, createRandomUser)


    const cleanMarketlist = processUserForMarking(rawUsers)

    cleanMarketlist.forEach(contact=>{
        console.log(`Da gui toi. ${contact.email} | noi dung ${contact.personalBody} | name ${contact.fullName}`);
        
    })

}

main()














// type Product = {
//     id: string;
//     name: string;
//     price: number;
//     tags?: string[];
//     calculateTax(rate: number): number;
// }

// let product1: Product = {
//     id: 'abc-123',
//     name: 'Laptop',
//     price: 1500,
//     tags: ['electronic'],
//     calculateTax(rate: number) {
//         return this.price * rate
//     }
// }
// const tax = product1.calculateTax(2)
// //type alias

// const product2: Product = {
//     id: 'abc-124',
//     name: 'Mouse',
//     price: 3000,
//     tags: ['electronic'],
//     calculateTax(rate: number) {
//         return this.price * rate
//     }
// }

// console.log(product2.calculateTax(3));

// / type alias no co the ung dung nhu sau:

// union types

// type OrderStatus = 'Pending' | 'Processing' | 'Delivered'
// type TestCaseStatus = 'Passed' | 'Failed'

// let currentStatus: OrderStatus = 'Pending'
// console.log('currentStatus', currentStatus);

// let result: TestCaseStatus = 'Passed'

// //cucumber scenario example //

// // kieu giao & 
// type BasicInfo = {
//     id: number;
//     name: string
// }
// type ContactInfo = {
//     email: string;
//     phone: string
// }


// type Customer = BasicInfo & ContactInfo

// const newCustomer: Customer = {
//     id: 101,
//     name: "an",
//     email: 'an@gmail.com',
//     phone: '123'
// }



// let user1: string = '123';

// //interface
// // i xi nhu type
// interface IVehicle {
//     model: string;
//     year: number;
//     start(): void
// }

// const myCar: IVehicle = {
//     model: 'civic',
//     year: 2022,
//     start: () => console.log('started car')

// }
// myCar.start()

// voi nguoi moi se dunfg chu yeu la interface khi define object va class type
// cac truong hop con lai thi dung type

// ke thua )extends

// type FileType = 'pdf' | 'epub'

// interface IBook {
//     title: string;
//     author: string;
// }


// interface IEbook extends IBook {
//     fileType: FileType
//     fileSize: number

// }

// const myBook: IEbook = {
//     title: 'Chao ngay moi',
//     author: 'Hoang',
//     fileType: 'epub',
//     fileSize: 512
// }


// interface IPrintable{
//     print():void
// }

// interface Istorable{
//     save():string
// }


// interface IPDFDocument extends IPrintable, Istorable, IBook{
//     pageCount: number
// }
// const pdfFile :IPDFDocument = {

// type ThoiDiem = 'giờ cao điểm' | 'ban đêm' | 'bình thường'

// type MucDoCanhBao = 'xấu' | 'bình thường' | 'nguy hiểm'

// type LuongXe = 'cao' | 'trung bình' | 'thấp'

// interface IGlobalConfig {
//     thoiDiem: ThoiDiem;
//     coSuKienDacBiet: boolean;
//     mucDoCanhBaoThoiTiet: MucDoCanhBao
// }
// interface ICamBienPhu {
//     ghiChu?: string
// }

// interface IGiaoLo {
//     id: string;
//     luongXe: LuongXe;
//     coNguoiDiBoCho: boolean;
//     coXeCuuThuong: boolean;
//     camBienPhu: ICamBienPhu;
// }

// interface ILenhDieuKhien {
//     giaoLoId: string;
//     hanhDong: string;
//     diemUuTien: number;
//     thoiGianDenCoBan: number;
//     ghiChuBaoTri: string
// }


// const globalConfig: IGlobalConfig = {
//     thoiDiem: "giờ cao điểm", // 'bình thường', 'ban đêm'
//     coSuKienDacBiet: true,
//     mucDoCanhBaoThoiTiet: "bình thường" // 'xấu', 'nguy hiểm'
// };

// // --- Mảng các tuyến đường chính cho sự kiện ---
// const tuyenDuongChinh: string[] = ["GL01", "GL03"];

// // --- Array of Objects: Dữ liệu thời gian thực từ các giao lộ ---
// const duLieuGiaoThong: IGiaoLo[] = [
//     { id: "GL01", luongXe: "cao", coNguoiDiBoCho: true, coXeCuuThuong: false, camBienPhu: { ghiChu: "Cảm biến A cần hiệu chỉnh." } },
//     { id: "GL02", luongXe: "trung bình", coNguoiDiBoCho: false, coXeCuuThuong: true, camBienPhu: {} },
//     { id: "GL03", luongXe: "thấp", coNguoiDiBoCho: true, coXeCuuThuong: false, camBienPhu: {} },
//     { id: "GL04", luongXe: "cao", coNguoiDiBoCho: false, coXeCuuThuong: false, camBienPhu: { ghiChu: "Hoạt động ổn định." } }
// ];


// const lenhDieuKhien: ILenhDieuKhien[] = duLieuGiaoThong.map((giaoLo: IGiaoLo): ILenhDieuKhien => {
//     let thoiGianDenCoBan;
//     if (globalConfig.thoiDiem === 'giờ cao điểm') {
//         thoiGianDenCoBan = 30;
//     } else if (globalConfig.thoiDiem === 'ban đêm') {
//         thoiGianDenCoBan = 90;
//     } else {
//         thoiGianDenCoBan = 60;
//     }

//     let diemUuTien = 0;
//     if (giaoLo.coXeCuuThuong) diemUuTien += 50;
//     if (giaoLo.luongXe === 'cao' && globalConfig.thoiDiem === 'giờ cao điểm') diemUuTien += 20;
//     if (giaoLo.coNguoiDiBoCho) diemUuTien += 10;
//     if (globalConfig.coSuKienDacBiet && tuyenDuongChinh.includes(giaoLo.id)) diemUuTien += 15;

//     // c. Đưa ra hành động cuối cùng
//     let hanhDong = "";
//     if (giaoLo.coXeCuuThuong) {
//         hanhDong = "ƯU TIÊN TUYỆT ĐỐI: MỞ LÀN KHẨN CẤP";
//     } else {
//         if (diemUuTien > 30) {
//             hanhDong = "Tăng thời lượng đèn xanh";
//         } else {
//             hanhDong = "Vận hành theo chu kỳ cơ bản";
//         }
//     }

//     if (globalConfig.mucDoCanhBaoThoiTiet === 'nguy hiểm') {
//         hanhDong += " & CẢNH BÁO TRƠN TRƯỢT";
//     }
//     //fallback khi su dung voi || va && => dung falsy va truthy 
//     // voi || tim truthy dau tien => giaoLo.camBienPhu.ghiChu = '' hoac undefined => falsy 
//     // neu la truthy -> thi lay luon gia tri dau tien no gap phai
//     // && tim falsy dau tien
//     // let ghiChuBaoTri:string;
//     // if(giaoLo.camBienPhu.ghiChu){
//     //     ghiChuBaoTri = giaoLo.camBienPhu.ghiChu
//     // }else{
//     //     ghiChuBaoTri = "Không có";
//     // }
//     const ghiChuBaoTri = giaoLo.camBienPhu.ghiChu || "Không có"
//     return {
//         giaoLoId: giaoLo.id,
//         hanhDong,
//         diemUuTien,
//         thoiGianDenCoBan,
//         ghiChuBaoTri
//     };
// })

// const ketQua = lenhDieuKhien

// const danhSachNong: ILenhDieuKhien[] = lenhDieuKhien.filter(lenh => lenh.diemUuTien > 0 || lenh.hanhDong.includes("ƯU TIÊN"));

// console.log('Ket qua la', ketQua);

// console.log('Danh sach nong', danhSachNong);



