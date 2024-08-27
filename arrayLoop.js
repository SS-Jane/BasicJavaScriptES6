//Loop array
//for loop, ForEach, For of

const data = [10,20,30,40,50];
//for loop,
// for (let i = 0; i < data.length; i++) {
//     if (data[i] >= 30) break;
//     console.log(`Data ${i} is ${data[i]}`)
// }


// ForEach don't have Break and Continuous
// let sum = 0;
// data.forEach(e => {
//     sum += e;
//     console.log(`Data in array is ${e}`);
//     console.log(`Sum of Data in array is ${sum}`);
// });

// For of

for (const e of data ) {
    if (e >= 30 ) break
    console.log(`Data in array is = ${e}`);
    
}