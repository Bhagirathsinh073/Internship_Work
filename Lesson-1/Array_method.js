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