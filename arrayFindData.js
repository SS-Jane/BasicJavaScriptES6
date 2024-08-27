//find data in array
//indexof(data) => result is Index of data if undefine result = -1
//find (data) => result is data if can not find result is undefine
//findIndex(data) => result is Index of data if undefine result = -1

const color = ['red' ,'green', 'blue', 'yellow', 'pink'];

console.log(color);

let inDex = color.indexOf('pink');
console.log(inDex);
inDex = color.indexOf('pinkk')
console.log(inDex);

let search = color.find(e => e==='pink');
console.log(search);
search = color.find(e => e==='lemon');
console.log(search);

let findInDex = color.findIndex(e => e==='pink');
console.log(findInDex);
findInDex = color.findIndex(e => e==='pinkk');
console.log(findInDex);




