// ECMAScript 2015 was the second major revision to JavaScript.

// ECMAScript 2015 is also known as ES6 and ECMAScript 6.

// This chapter describes the most important features of ES6.

// function like arrow function ,let,const ,...(Spread oprator) etc are introduction on it

// Three Type Variable Declaration 
// let ,var , const 


// 1)let:- 
// The let keyword was introduced in ES6 (2015)
// Variables declared with let have Block Scope
// Variables declared with let must be Declared before use
// Variables declared with let cannot be Redeclared in the same scope


// 2)const
// The const keyword was introduced in ES6 (2015)
// Variables defined with const cannot be Redeclared
// Variables defined with const cannot be Reassigned
// Variables defined with const have Block Scope


// When to Use var, let, or const?
// 1. Always declare variables

// 2. Always use const if the value should not be changed

// 3. Always use const if the type should not be changed (Arrays and Objects)

// 4. Only use let if you can't use const

// 5. Only use var if you MUST support old browsers.


let a = 10; 
var b =  11;
const Name= "Bhagirathsinh"; 

console.log(a , b , Name);


//Arrow Functions

const Hello = (name) => {
  return console.log(`Hello, ${name}!`);
}

Hello("Parsh Technology");


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

