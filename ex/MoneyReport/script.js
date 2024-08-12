const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');


let transactions=[];

function init() {
    list.innerHTML = '';
    transactions.forEach(addDataToList);
    calculateMoney();
}

function addDataToList(transactions) {
    const symbol = transactions.amount < 0 ? '-' : '+';
    const status =transactions.amount < 0 ? 'minus' : 'plus';
    const item = document.createElement('li');

    result = formatNumber(Math.abs(transactions.amount));
    // เพิ่ม Class ตามตัวแป Status
    item.classList.add(status); 
    item.innerHTML=`${transactions.text}<span>${symbol}${result}</span><button class="delete-btn" onclick='removeData(${transactions.id})'>x</button>`;
    list.appendChild(item);
}

function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function autoID() {
    return Math.floor(Math.random()*1000000)
}

function calculateMoney() {
    const amounts = transactions.map(transactions=>transactions.amount);
    // ยอดตงเหลือ
    const totals = amounts.reduce((result,item)=>(result+=item),0).toFixed(2);
    // รายรับ
    const income = amounts.filter(item=>item>0).reduce((result,item)=>(result+=item),0).toFixed(2);
    // รายจ่าย
    const expense = Math.abs(amounts.filter(item=>item<0).reduce((result,item)=>(result+=item),0).toFixed(2));
    
    // display to wed
    balance.innerText = `฿`+formatNumber(totals);
    money_plus.innerText = `฿`+formatNumber(income);
    money_minus.innerText = `฿`+formatNumber(expense);

}

function removeData(id) {
    transactions = transactions.filter(transactions=>transactions.id !== id)
    init();
    console.log('Delete....',id);
}

function addTransaction(e) {
    // no reload wed page
    e.preventDefault();
    if (text.value.trim() === '' || amount.value.trim() === '') {
        alert('Please Enter Transaction');
    } else {
        const data = {
            id : autoID(),
            text : text.value,
            amount : +amount.value
        }
        transactions.push(data);
        addDataToList(data);
        calculateMoney();
        text.value = '';
        amount.value = '';
        console.log('Send data...Complete');
    }
}


form.addEventListener('submit',addTransaction);
init();
