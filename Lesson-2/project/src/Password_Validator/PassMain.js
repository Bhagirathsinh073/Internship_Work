import React, { useState } from 'react'
import validator from 'validator';

export default function PassMain() {
    const [errorMessage,setErrorMessage] = useState();

    
    const validate = (value) =>{
        if(validator.isStrongPassword(value,{
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 5,
            minSymbols: 2,
            maxRepeat: 2
        })){
            setErrorMessage('is Strong Password');
            return true;
        }else{
            setErrorMessage('is not Strong Password');
            return false;
        }

    }
   
console.log(validator);
  
  return (
    <div>
      <h1>PassMain</h1>
      
        <h2>Check Password is strong or note</h2>
        <label>
            Enter Password:
            <input type='text' name='password' 
            onChange={(e)=>{
                validate(e.target.value)
            }} />
            {errorMessage === "" ? null : <>
                <p style={{color:'red'}}>{errorMessage}</p>
            </> }
        </label>
          
    </div>
  )
}
