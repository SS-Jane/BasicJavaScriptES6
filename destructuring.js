//การกำหนดค่าที่อยู่ภายใน Array หรือ Object
//ให้กับตัวแปรโดยใช้วิธีการจับคู่ตัวแปรกับค่าใน Array หรือ Object

const color = ['G', 'R', 'Y']

const green = color[0];
const red = color[1];
const yellow = color[2];

// const [green1,red1,yellow1] = color

const [,red1,] = color

// console.log(green);
// console.log(red);
// console.log(yellow);


// console.log(green1);
console.log(red1);
// console.log(yellow1);


const product = {
    productName : 'computer',
    price : 30000,
    stock : 10
}

// const productname = product.productName
// const price = product.price
// const stock = product.price

// const {productName:productname, price:price, stock:stock} = product

const {price, stock} = product

// console.log(productName);
console.log(price);
console.log(stock);