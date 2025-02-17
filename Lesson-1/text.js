console.log("Starting");


function getValue() {
    let inputVal = document.getElementById("myInput").value;
    let word = inputVal.split(" ");
    let wordsLength = word.map(word => word.length)
    let word1 = wordsLength[0];
    let word2 = wordsLength[1];
    let subWord = word1+ word2;
    let wordFC = factorial(subWord);
    // return wordsLength;




        console.log(wordsLength);;
    // console.log(inputVal2);
    
    
    
    document.getElementById("myText").innerText = "Input Stirng:-"+ inputVal;
    document.getElementById("myText1").innerText = "Input length" + wordsLength;
    document.getElementById("myText2").innerText = `Length of ${word[0]} `+word1;
    document.getElementById("myText3").innerText = `Length of ${word[1]}` +word2;
    document.getElementById("myText4").innerText = factorial(subWord);
    // document.getElementById("myText5").innerText = sumArry;
    // document.getElementById("myText6").innerText = `SubString ELL = ${ELL}` ;
    // document.getElementById("myText7").innerText = `SubString RLD = ${RLD}`;
    // document.getElementById("myText8").innerText = `Concate = ${ConString}`;
    // document.getElementById("myText9").innerText = `SubString ELL = ${ELL_length}`;
    // document.getElementById("myText10").innerText = `SubString Length RLD = ${RLD_length}`;
  }
  function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}


// let inplen = inputVal.length;
//     let sublen1  =inputVal.substring(0,5).length;
//     let sublen2  =inputVal.substring(6,11).length;
//     let sumlen  =sublen1 +sublen2;
//     let ELL = inputVal.substring(1,4);
//     let RLD = inputVal.substring(8,11);
//     let ConString = ELL.concat(" ", RLD)
//     let ELL_length = ELL.length;
//     let RLD_length = RLD.length;
//     let sumArry =[3,6,2,8,8,0,0];



    
    // console.log(inputVal);
    // console.log(inplen);
    // console.log("Length of Hello "+sublen1);
    // console.log("Length of World "+sublen2);
    // console.log("sum of length " + sumlen);
    // console.log(factorial(sumlen));
    // console.log(sumArry);
    // console.log( `SubString ELL = ${ELL}` );
    // console.log( `SubString RLD = ${RLD}` );
    // console.log( `Concate = ${ConString}` );
    // console.log( `SubString ELL = ${ELL_length}` );
    // console.log( `SubString Length RLD = ${RLD_length}` );
    
    // for(let i = 0; i<sumArry.length;i++){
    //     console.log(sumArry[i]);
    // }