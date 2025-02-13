import React, { useEffect, useRef, useState } from 'react'

export default function UseRef() {
    const [inputValue,setInputValue] = useState("");
    const [inputHeadValue,setInputHeadValue] = useState("");
    const inputElement = useRef();
    const heading = useRef();
    const count = useRef(10);

    useEffect(()=>{
        count.current = count.current + 1
    })

    const focusInput = () =>{
            inputElement.current.focus();
    }
    const changehead = ()=>{
        heading.current.innerText= inputHeadValue;
        heading.current.style.backgroundColor = "red";
    }
  return (
    <div>
      <h1 ref={heading}>UseRef Hook</h1>
      <input
      type='text'
      value={inputValue}
      onChange={(e)=>{setInputValue(e.target.value)}}
      />
      {/* <h1>Render Times{count}</h1> */}
      <h1>Render Times{count.current}</h1>

<input
type='text'
placeholder='Type...'
ref={inputElement}
onChange={(e)=>{setInputHeadValue(e.target.value)}}

/>   <br/><br/>
<button onClick={focusInput}>Click For Button</button>
<button onClick={changehead}>Change heading</button>




 </div>
  )
}
