// ทำงานกับ Object
//ตัวแปลเก็บข้อมูล
const username = 'Jane'
const phoneNumber = '0810000000' 
const address = 'Bangkok';
const customer = {
    customerName : username ,
    phoneNumber,
    address,

    showData(){
        console.log('Customer Data :'+ this.customerName,this.phoneNumber,this.address);
        console.log(`Customer Name : ${this.customerName}, Phone : ${this.phoneNumber}, Address : ${this.address}`)
    }
}

customer.showData()