// ECMAScript 2015 was the second major revision to JavaScript.

// ECMAScript 2015 is also known as ES6 and ECMAScript 6.

// This chapter describes the most important features of ES6.

// function like arrow function ,let,const ,...(Spread oprator) etc are introduction on it

// Three Type Variable Declaration 
let a = 10; 
var b =  11;
const Name= "Bhagirathsinh"; 

console.log(a , b , Name);


//Arrow Functions

const Hello = (name) => {
  return console.log(`Hello, ${name}!`);
}

Hello("Parsh Texhnology");


//Object Destructuring

let Student = {
    fname: "John",
    age: 25,
    city: "New York"
}

let {fname, age} = Student;


const fruits = ["Banana", "Orange", "Apple", "Mango"];

//...rest is rest oprator
let [first, second, ...rest] = fruits;

console.log(first, second, rest);

