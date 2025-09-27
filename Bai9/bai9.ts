// let diemHientai: string = '10'

// let bonus: number = 50

// //cong chuoi voi so => string


// let totalScore: number = Number(diemHientai) + bonus

// console.log(totalScore)

// //global (cap cao nhat o trong thu muc npm )

// //sudo npm install -g ts-node (access ) =>

// /// mk 

//syntax
// ten_bien : kieu_du_lieu = gia_tri

/// kieu du lieu nguyen thuy 
//string
let customerName: string = 'Nguyen Van A'
//number
let orderId: number = 101
//boolean
let isPaid: boolean = false

// // isPaid = 0
// //any 
// let userName: any = 'Nguyen Van teo'


// //1 dong code nao do trong logic lam thay doi
// userName = 123

// console.log(userName.toUpperCase())

//void
// function printReceipt(orderId: number ): void{
//     console.log(`In hoa don ${orderId}`)
// }

// printReceipt(1)

// function tinhTong(a:number, b:number): number{
//     return a + b
// }

// const result = tinhTong(3, 5)
// console.log(result)

//array
// kieu_du_lieu[]

// let menu: string[] = ['3', 'cappuchino']

//object
//dang cho object
// let coffeOrder : {
//     orderId: number;
//     customerName: string;
//     isPaid: boolean;
//     itemCount: number
// }

// coffeOrder = {
//     orderId: 101,
//     customerName: 'anh An',
//     isPaid: true,
//     itemCount: 2
// }




// console.log('coffeORder', coffeOrder);

// let specialOrder: {
//     orderId: number;
//     items: string[];
//     specialInstruction?: string
// }

// specialOrder = {
//     orderId: 10,
//     items: ['espresso'],
//     specialInstruction: 'ok'
// }

// const customerOrder: {
//     orderId: number;
//     status: string
// } = {
//     orderId: 123,
//     status: 'success',
// }


const storeMenu: {
    readonly id: number;
    name: string;
    price: number
}[] = [
        { id: 1, name: 'Ca phe den', price: 25000 },
        { id: 2, name: 'Latte', price: 45000 },
        { id: 3, name: 'Banh gato', price: 3000 }

    ]

const customerOrder: {
    orderId: number;
    customerName: string;
    items: { name: string, price: number }[];
    status: string;
    note?: string
} = {
    orderId: 20250927,
    customerName: 'Teo',
    items: [],
    status: 'Pending',
    note: 'It da, nhieu ca phe'
}
//items: { name: string, price: number }[];

//thang typescript la ducking type..... 

function calculateOrderTotal(order: { items: { price: number }[] }): number {
    let total = 0
    for (const item of order.items) {
        total += item.price
    }
    return total;
}

function processPayment(totalAmount: number, method: string, amountGiven: number): string {

    if (method === 'card') {
        return `Thanh toan thanh cong ${totalAmount} bang the`
    } else if (method === 'cash') {
        const change = amountGiven - totalAmount
        if (change < 0) {
            return `Khach dua thieu ${Math.abs(change)}`
        }
        return `Thanh toan thanh cong. voi so tien ${change} `

    }
    return 'Phuong thuc thanh toan khong hop le'


}

customerOrder.items.push({name: storeMenu[1]!.name, price: storeMenu[1]!.price}
    
)


customerOrder.items.push({name: storeMenu[2]!.name, price: storeMenu[2]!.price})

const totalAmount = calculateOrderTotal(customerOrder)

console.log(totalAmount);

const paymentResult = processPayment(totalAmount, 'card', 0)
console.log(paymentResult);

