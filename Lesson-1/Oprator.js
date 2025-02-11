
// 1) The JavaScript spread operator
// The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

const f_arr = ["A","B","C","D","E","F","G","H"];
let b_arr =[...f_arr,"NEW","OLD"];

console.log(b_arr);

const myVehicle =  {
    make: "Toyota",
    model: "Camry",
    year: 2020,
};

// let newVehicle = {
//     "make": "Honda",
//     "model": "Accord",
//     "year": 2018,
//    ...myVehicle,
// }
//if key is same then overwrite value
let newVehicle = {
    makes: "Honda",
    models: "Accord",
    years: 2018,
   ...myVehicle,
}
const modifyVehicle ={...myVehicle,...newVehicle}

console.log(newVehicle);
console.log(newVehicle.makes);
console.log(modifyVehicle);


// 2) Rest Oprator

function calculateTotalAgeOfGuest(hostAge, ...guestAges) {
    let totalAge = hostAge;
    for (const age of guestAges) {
      totalAge += age;
    }
    return totalAge;
  }
  
  const hostAge = 50;
  const guestAges = [25, 28, 10, 5,15];
  
  const totalAge = calculateTotalAgeOfGuest(hostAge, ...guestAges);

  console.log(totalAge);


  // 3) Destructuring Assignment
  const {makes,years} = newVehicle
  console.log("Destructring Assignment")
  console.log(makes);
  console.log(years);