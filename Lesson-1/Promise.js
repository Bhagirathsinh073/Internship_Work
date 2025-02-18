// Easy Task of Promise 

// console.log('I am running before the promise');
let promise = new Promise((resolve,reject)=>{
    let number = 0;
    if(number % 2 == 0){
        resolve('The number is even');
    }
    else{
        reject('The number is odd');
    }
})

promise.then((mess)=>{
    // console.log(mess);
});
promise.catch((err)=>{
    console.error(err);
});
// console.log('I am running after the promise');



// Hard Task of Promise 

const fetchData = new Promise((resolve,reject)=>{
    const success = true;

    setTimeout(()=>{
        if(success){
            resolve('Data fetched successfully');
        }
        else{
            reject('Fetching failed');
        }
    },5);
});

fetchData.then(()=>{
    // console.log('Data fetched successfully - Q1');
})

.catch(()=>{
    console.error('Fetching failed');
});


//Fethcing API data using Promise

function fetchDatas(){
    return new Promise((resolve,reject)=>{
        const Data1 = {name : 'Bhagirathsinh',age:23}
        const success_ = true;

        setTimeout(()=>{
            
        if(success_){
            resolve(Data1);
        }
        else{
            reject("FETCHING  DATA FAILED");
        }
        },2000);
    });

   
}

fetchDatas().then((Data1)=>{
    // console.log(`Data fetch ${Data1.name} and age ${Data1.age}`);
    // console.log(`Data Fetch ${JSON.stringify(Data1)}`);
})
.catch((error)=>{
    console.error("Error fetching data"+error);
})

// console.log(fetchData)



//1)Promise();
// Syntax:- new Promise(executor)
// The Promise() constructor creates Promise objects. It is primarily used to wrap callback-based APIs that do not already support promises.

const promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello world!");
    },1000);    
})

promise1.then((value)=>{
    // console.log(value);
    //Hello world!
})
promise1.catch((error)=>{
    console.error(error);
    //Error
})
// console.log(promise1)
//[object Promise]
 

//Static Methods
  
// 1) Promise.all()
// The Promise.all() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values. It rejects when any of the input's promises rejects, with this first rejection reason.

const  promises2 = Promise.resolve("0");
// const  promises2_1 = Promise.reject("0");
const promises3 = 10;
const promises3_1 = "70-3-1";
const promises4 = new Promise((resolve,reject)=>{
setTimeout(()=>{
    resolve("Timeout");
    reject("error from Pomise.all");
},2000);
});

// const promise4_1 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         reject("error from Pomise.all");
//     }, 1000);
// })

// console.log(Promise.all([promises2, promises3,promises3_1 ,promises4]));  //Pending state of Promise.all
// console.log(promise1)
// console.log(promises3)
// console.log(promises3_1)
// console.log(promises4)

//Pending state of Promise.all
// console.log(Promise.all([promises2, promises3,promises3_1 ,promises4]));  
// Promise.all([promises2,promises3,promises4]).then((value)=>{
//     console.log(value);
//     [73, 10, "timeout"]
    
// }).catch((error)=>{
//     console.error(error);
//     //Error
// })

// console.log(Promise.all([promises2,promises2_1, promises3,promises3_1 ,promises4])); //fullfill state Promise.all()

//fullfill state Promise.all()
// console.log(Promise.all([promises2,promises3,promises3_1 ,promises4])); 

//2)Promise.any()

// The Promise.any() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when any of the input's promises fulfills, with this first fulfillment value. It rejects when all of the input's promises reject (including when an empty iterable is passed), with an AggregateError containing an array of rejection reasons.

const promise5 = Promise.reject(24);
const promise6 = Promise.reject("Promise6 -Any");
const promise7 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Timeout - Any");
    },1000);
})
const promise16 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Timeout - Any 1000");
    })
},1000);
const promise8 =[promise5,promise6,promise7,promise16];
Promise.any(promise8).then((value)=>{
    // console.log(value);
})
// it will return a first fulfill promise 
// console.log(promise8);


// 3)Promise Race();

// The Promise.race() static method takes an iterable of promises as input and returns a single Promise. This returned promise settles with the eventual state of the first promise that settles.

const promise9 = new Promise((resolve,reject)=>{
    setTimeout(resolve,5000,"Speed 500-P1-Race");
});
const promise10 = new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"Speed 1000-P2-Race");
});

const promise11 = [promise9,promise10];
Promise.race(promise11).then((race)=>{
    // console.log(race); //!important
    // console.log(promise9)
    // console.log(promise10)
    //Speed 500-P2-Race
    //Both get Full Fill But only print first promise faster than promises
})

// console.log(promise11); //!important

// 4)Promise.reject();

// The Promise.reject() static method returns a Promise object that is rejected with a given reason.
// The static Promise.reject function returns a Promise that is rejected. For debugging purposes and selective error catching, it is useful to make reason an instanceof Error.


function success(){
    console.log("Success");
}
function failure(){
    console.log("Failure");
}
function unsucessful(){
    console.error("Unsucessful");
}
// Promise.reject(new Error("Unsucessful - RejectError")).then(success, unsucessful);
//it will retun only reject state if there is unsucessful is in reject state so it will return error 

//reject with promise
const promise12 = Promise.resolve("success");
const promise13 = Promise.reject(promise12);
 console.log(promise13 === promise12);
 promise13.catch((v)=>{
    //  console.log(v === promise12); // success
 })


// 5)Promise.resolve()

// The Promise.resolve() static method "resolves" a given value to a Promise. If the value is a promise, that promise is returned; if the value is a thenable, Promise.resolve() will call the then() method with two callbacks it prepared; otherwise the returned promise will be fulfilled with the value.

// This function flattens nested layers of promise-like objects (e.g. a promise that fulfills to a promise that fulfills to something) into a single layer — a promise that fulfills to a non-thenable value.


const promise14 = Promise.resolve(123);

promise14.then((value)=>{
    // console.log(value); //123
})


//6) PRomise.Try()

// The Promise.try() static method takes a callback of any kind (returns or throws, synchronously or asynchronously) and wraps its result in a Promise.

const tryPromise = [success,unsucessful,failure];
Promise.try(success);
Promise.try(failure);
Promise.try(unsucessful);
Promise.try(tryPromise);
// console.log(Promise.try(success));
// console.log(Promise.try(failure));
// console.log(Promise.try(unsucessful));