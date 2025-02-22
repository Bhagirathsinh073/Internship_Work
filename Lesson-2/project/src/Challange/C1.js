import React, { useState } from 'react'


// Description : Implement a button to show/hide the text content

export default function C1() {
    const [isShow,setIsShow] = useState(false);
  return (
    <>
    {
        isShow ? "" :(<h1>Welcome to React Challenge</h1>)
    }

    <button onClick={(e)=>{setIsShow(!isShow)}}>Show/Hide</button>
    </>

  )
}
