//block scope (let/con)
const z = 100;
console.log('Call Z : '+z);
//(var)

let x = 15;
let y = 50;

if (x===15) {
    console.log('Declare out of If '+x);
    let y = 500;
    console.log('Declare in of IF '+y);
}

console.log('Call out of IF '+y);