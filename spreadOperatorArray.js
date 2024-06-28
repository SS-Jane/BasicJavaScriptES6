//ใช้ในการกระจายสมาชิกใน Array ออกมาใช้งานโดยเติม ... หน้าตัวแปล Array

const newArr = [100,200,300]
const data = [10,20,30]
const data1 = [10,20,30,newArr]
const data2 = [10,20,30,...newArr]

data.push(newArr)

console.log(data1);
console.log(data1.length);
console.log('Spread Operator :');
console.log(data2);
console.log(data2.length);
console.log('Push :');
console.log(data);
console.log(data.length);

data.push(...newArr)

console.log('Push and Spread Operator :');
console.log(data);
console.log(data.length);