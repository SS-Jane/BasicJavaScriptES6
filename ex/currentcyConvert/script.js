const currentcy_one = document.getElementById('currentcy-one');
const currentcy_two = document.getElementById('currentcy-two');

const amount_one = document.getElementById('amount-one');
const amount_two = document.getElementById('amount-two');

const ratesText = document.getElementById('rate');
const swap = document.getElementById('btn');

currentcy_one.addEventListener('change',calculatemoney);
currentcy_two.addEventListener('change',calculatemoney);

amount_one.addEventListener('input',calculatemoney);
amount_two.addEventListener('input',calculatemoney);

function calculatemoney() {
    const one = currentcy_one.value;
    const two = currentcy_two.value;
    let url_api = `https://v6.exchangerate-api.com/v6/30ff9c69fa1ca43ad1ef5187/latest/${one}`;
    
    fetch(url_api).then(res => res.json()).then(data => {
        
        const rates = data.conversion_rates[two];

        ratesText.innerText=`1 ${one} = ${rates} ${two}`
        amount_two.value=(amount_one.value*rates).toFixed(0);
    })
}

swap.addEventListener('click',() => {
    const temp = currentcy_one.value;

    currentcy_one.value = currentcy_two.value;
    currentcy_two.value = temp;

    calculatemoney();
})

calculatemoney();
