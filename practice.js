// 1. let , var , const (when i have to use this )
// 2 . this is condition
const a = 20;
const b = 10
if(a !== b ){
    // console.log(true);
}

// function declaration and arrow function
function add(num1 , num2){
    const result = num1 + num2
    return result;
}

// function with no parameter in js

function bubble(){
    console.log('this is no parameter function');
}

// arrow function without return

const dynamicArrow = ( a) => a*a

const multi = (num1 , num2) => {
    const sum = num1 + num2
    const result = sum /2
    return result;
}

// Basic concept of loop

// for loop
let numbers = [10,30,40,50]
for(let i = 0;i < numbers.length ; i++){
    // console.log(numbers[i]);
}

// start ES6 / Ecma script 

// spread operator [...]

const roll = [12,3,5,6]
const newRoll = [...roll , 400] // clone previous array
// console.log(newRoll); //  original array
// console.log(roll);


// arrow function 

const submitMath = (a , b) => {
    return a + b;
}

// template string

const x = 'MM M';
const y = 'AA N'

const sentence = `This Girl name is ${x} and The boy name is ${y}`
// console.log(sentence);

// start array method

const total = [10,30,40,50]
const sum = total.map((x) => x+5)
// console.log(sum);

const sumFind = total.find((x) => x < 21)
// console.log(sumFind);

// const eachVale = total.forEach((x) => console.log(x))


// Destructuring 

// array 

const papers = [12,34,54,23,56]
const [m , n] = papers
console.log(m , n);


// object 

const person = {
    name : 'Inayna',
    home : 'Barguna, DKP road',
    isSingle : true,
    hobbies : ['Love song of BTS', 'me', 'others'],
}

const {name , home} = person
console.log(name, home);

// truthy and falsy value