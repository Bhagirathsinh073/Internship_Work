let fruitss =["Apple","Banana","Kiwi","Mango","Orange"];
let price = [20,30,40,50,60];
let boys = ["A","B","C","D","E"];
let girls = ["F","G","H","I"];
// return array length  - 4
console.log(fruits.length);

//seperate with commas and string value
console.log(fruitss.toString());

//access index of 2 and return array value -- Kiwi
console.log(fruitss.at(2));

// every array element after value write / in the array
console.log(fruitss.join("/"));

//remove last element
fruitss.pop();
console.log(fruitss);

//remove first element
 fruitss.shift();
console.log(fruitss);

//add element at the end of array
fruitss.push("Watermellon");
console.log(fruitss);

//add element at the beginning of array
fruitss.unshift("First")
console.log(fruitss);

//empty array value at 0 index
delete fruitss[0];
console.log(fruitss);

//add to more string values
let child = boys.concat(girls)
console.log(child);


//flat array value means 2-d array value into single element
let flat = [[1,2],[3,2],[4,2],[5,2],[6,2],[7,2]];

console.log(flat.flat());



//Splice method is use to add value into array
const fnames = ["Banana", "Orange", "Apple", "Mango","Graps"];
console.log(fnames);


fnames.splice(1,1 , "Lemon", "Kiwi");
console.log(fnames);
// here 2 - show  index value to add 
//  1 - show how many element to remove
//  "string" - to add


//search array method

// return index
console.log(fnames.indexOf("Apple")); // 3

console.log(fnames.includes("Apple")); // true
// check that is includes in array or not if includes then true and else false


console.log(fnames.lastIndexOf("Lemon")); // 3


//sort array in ascending order
console.log(fnames.sort()); // ["Apple", "Banana", "Graps", "Kiwi", "Lemon", "Mango", "Orange"]

// revere the Array
console.log(fnames.reverse()); //[O,M,L,K,G,B,A];

//toSorted() and toReversed() arrays return new Array
 let toSorted = fnames.sort();
 let tonewSorted = fnames.toSorted();
 console.log("ToStored "+ toSorted); // ["Apple", "Banana", "Graps", "Kiwi", "Lemon", "Mango", "Orange"]
 console.log(`tostorednew + ${tonewSorted}`); 



 //For each

 const numbers1 = [20,3,0,8,45,89,40,73];
 let txt = '';
 
//  const myfun = (value,index,array) =>{
//     console.log(`Value: ${value} -> ${index} -> ${array}`);
//     }
//     numbers1.forEach(myfun);

console.log("For Each",numbers1);

// for each take by deafult call back function 
numbers1.forEach((value)=>{
    console.log(`Value: ${value} ->`)
});

let mapvalue = numbers1.map((item)=>{
 item = item * 10;
 return item;
})

console.log("Map",mapvalue);

let filtevlaue = numbers1.filter((value,index)=>{
    if(value % 2 == 0 ){
        return value;
    }
}) 
console.log("Filter",filtevlaue);