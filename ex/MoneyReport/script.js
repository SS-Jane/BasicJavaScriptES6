const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

const dataTransaction = [
    {id:1,text:'snake',amount:-50},
    {id:2,text:'rent',amount:-3000},
    {id:3,text:'dividend',amount:+2000000},
    {id:4,text:'credit',amount:-20000}
]

const transaction=dataTransaction;

function init() {
    transaction.forEach(addDataToList);
}

function addDataToList(transaction) {
    const symbol = transaction.amount < 0 ? '-' : '+';
    const item = document.createElement('li');
    item.innerHTML = 'Car maintenance <span>฿-400</span <button class="delete-btn">x</button>';
    console.log(item);
    
}

init();
