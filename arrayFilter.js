//array filter

const data = [10,20,30,40,50,60,70]

const result = data.filter( e => {
    return e>20
})
console.log(result);

//use case
const employee = [
    {name:'Jane',salary:'20000',department:'Font-end'},
    {name:'Kam',salary:'18000',department:'Nurs'},
    {name:'Gib',salary:'23000',department:'Engineer'},
    {name:'Nan',salary:'15000',department:'Nurs'},
    {name:'Nun',salary:'25000',department:'Engineer'},
    {name:'SuperJane',salary:'20000000000',department:'CEO'}
]

const result2 = employee.filter(e=>e.salary>20000).filter(e=>e.department==='CEO')

console.log(result2);


