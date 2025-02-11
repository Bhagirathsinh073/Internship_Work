// Easy Task of Promise 

console.log('I am running before the promise');
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
    console.log(mess);
});
promise.catch((err)=>{
    console.error(err);
});
console.log('I am running after the promise');



// Hard Task of Promise 

const fetchData = new Promise((resolve,reject)=>{
    const success = false;
    setTimeout(()=>{
        if(success){
            resolve('Data fetched successfully');
        }
        else{
            reject('Fetching failed');
        }
    }, 2000);
});

fetchData.then((data)=>{
    let p = document.getElementById('demo');
    p.innerHTML = "DATA FETCH"
})
fetchData.catch((error)=>{
     let p = document.getElementById('demo');
    p.innerHTML = "DATA FETCHING ERROR"
    console.log(error);
})


