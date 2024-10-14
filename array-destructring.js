const numbers = [12, 43, 65, 12];
const [a, b] = numbers;
// console.log(a , b );

const box = (num1, num2) => {
    const res = [num1, num2];
    return res;
};

const [x, y] = box(90, 30); // this type we will use for array destructuring array

// console.log(x , y);

// object destructuring in JavaScript

const students = {
    name : 'MM M3',
    age : 22,
    isLike : ['BTS' , 'Meat' , 'Pudding']
}

const [B , T , S] = students.isLike
// console.log(B,T,S);

// 
const person = {
    name: "John",
    age: 30,
    profession: "Web Developer",
    hobbies: ["coding", "reading", "traveling"],
    isEmployed: true,
};

const {name , age , isEmployed} = person
// console.log(name , age , isEmployed);