//array map

const numbers = [1,2,3,4,5,6,7,8,9,0];

const result = numbers.map(e => e*e )

console.log(result);


const data = ['raining', 'shining','cloudy','sunshine','raining', 'shining','cloudy'];
const weather = data.map( (e,i) => {
    console.log(e);
    console.log(typeof(e));
    
    return `Day ${i+1} , weather is ${e}`
})


console.log(weather);
console.log(typeof(weather));

const data2 = [
    {day:'2024/08/28',weather:'shine',temp:40},
    {day:'2024/08/27',weather:'rain',temp:35},
    {day:'2024/08/26',weather:'shine',temp:37},
    {day:'2024/08/25',weather:'shine',temp:38},
    {day:'2024/08/24',weather:'cloud',temp:35},
    {day:'2024/08/23',weather:'storm',temp:32}
]

const result2 = data2.map(e => e.weather)

console.log(result2);


