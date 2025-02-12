import React, { useState } from 'react'

export default function UseState() {
    const [Data,setData]=useState("Hello World"); 
  return (
    <div>
        <h1>UseState</h1>
        <h1>{Data}</h1>
        <button onClick={()=>setData("New Data")}>Change Data</button>
    </div>
  )
}
