const myMoney = 0;
// check falsy value
if(!myMoney){
    console.log('Check falsy value');
}
// check truthy value

const balance = 3000;

if(!!balance){
    console.log('Check truthy value');
}

const money = 199;

let food = money > 100 ? 'You can Breakfast' : 'You can not have breakfast'
console.log(food);

let drinks = (money > 100 && money < 500) ? 'Coke' : 'filter water'
console.log(drinks);

// number to string conversion

const number1 = 50
const numStr = number1 + ''
console.log(numStr);

// string to  number using + sing

const number2 = '23'
const str = +number2
console.log(str);


// ternary operator in shortHand

const isFallLove = true
const showLove = () => console.log('Fall in love with MM Moule');
const destroyLove = () => console.log('Destroy Noman Life');

// isFallLove === true ? showLove() : destroyLove()
// isFallLove ? showLove() : destroyLove()
//use && if the left side is true then right side will be executed
isFallLove && showLove() ;
// use ||
//use || if the left showUser(): void en right side will be executed
isFallLove || destroyLove();
