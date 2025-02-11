
//Arrow Function
const Arrow = (a,b) =>{
    return a + b;
}
console.log("Addition :"+ Arrow(10,30));


//Default Funtion

function hello (){
    console.log("Hello World!");
}

hello();


//Default Funtion with parameters
function greet(name,message){
console.log(`${message} and ${name}`);
}
const greeting = (fname  = "Guest") =>{
    return `hello ${fname}!`;

} 

greet("-Bhagirathsinh","Good Morning first day of Internship");

console.log(greeting());
console.log(greeting("Bhagirathsinh"));
