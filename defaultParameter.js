//default parameter

getDataCustomer=(customerName, customerAddress = 'Bangkok') => {
   
    // if (!customerAddress) {
    //     customerAddress = 'Bangkok'
    // }

    const address = 
    `Customer Name : ${customerName}
    Adress : ${customerAddress}`
    return address
}


console.log(getDataCustomer("Jane", "Nahongprathom"));
console.log(getDataCustomer('Kam', '101'));
console.log(getDataCustomer('Jane'));