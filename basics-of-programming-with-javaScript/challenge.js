const SPENDING_THRESHOLD = 200, TAX_RATE = 0.08, PHONE_PRICE = 99.99, ACCESSORY_PRICE = 9.99;

var bank_balance = 303.91;
var amount = 0;

function calculateTax(amount) {
    return amount * TAX_RATE;
}

function formatAmount(amount) {
    return "$" + amount.toFixed(2);
}

while( amount < bank_balance ) {
    amount = amount + PHONE_PRICE;
    if( amount < SPENDING_THRESHOLD ) {
        amount = amount + ACCESSORY_PRICE;
    }
}

amount = amount + calculateTax( amount );

console.log(
    "Your purchase: " + formatAmount( amount )
);

if (amount > bank_balance){
    console.log("You can not affor this purchase");
}