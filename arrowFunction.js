//old
function FullName(fname,lname) {
    return fname+lname   
}

let x = FullName('SuperJane','Sangprasit')

console.log(x);

//new
fullName=(fname, lname) => {
    return fname+' '+lname
}

let y = fullName('Kam', 'xxx')
console.log(y);

setAge=(age) => 'Age = '+age

let a = setAge(30)
console.log(a);

