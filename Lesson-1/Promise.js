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
    const success = true;

    setTimeout(()=>{
        if(success){
            resolve('Data fetched successfully');
        }
        else{
            reject('Fetching failed');
        }
    }, 3000);
});

fetchData.then(()=>{
    console.log('Data fetched successfully - Q1');
})

.catch(()=>{
    console.error('Fetching failed');
});


//Fethcing API data using Promise

function fetchDatas(){
    return new Promise((resolve,reject)=>{
        const Data1 = {name : 'Bhagirathsinh',age:23}
        const success_ = false;

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
    console.log(`Data fetch ${Data1.name} and age ${Data1.age}`);
    console.log(`Data Fetch ${JSON.stringify(Data1)}`);
})
.catch((error)=>{
    console.error("Error fetching data"+error);
})

console.log(fetchData)