let splitWords = "plasticCupHandle";

// ใช้ replace เพื่อเพิ่มช่องว่างระหว่างคำที่เป็น Camel Case
const result = splitWords.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();

// แสดงผลลัพธ์ที่คาดว่าจะเป็น "plastic cup handle"
console.log(result);