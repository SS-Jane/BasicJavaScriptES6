//ใช้ในการส่ง parameter เข้าไปใน function 
//โดยไปกำจัดจำนวนโดยใช้เครื่องหมาย ...

summation1 = (x, y) => {
    return x+y
}

summation2 = (x, y, z) => {
    return x+y+z
}

console.log(summation1(50,100));
console.log(summation2(200,100,50));

summation3 = (...numberArr) => {
    let total = 0
    for (let number of numberArr) total+=number
    
    return total
}

console.log(summation3(10,10,10,20,30,522,5,6,20,6,20,5));