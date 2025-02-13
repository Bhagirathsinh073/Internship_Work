import React, { useEffect, useState } from 'react'

export default function Useeffect() {
    const [name,setName] = useState("user")
   
    // const [count, setCount] = useState(0);

    useEffect(() => {
      setTimeout(() => {
        // setCount((count) => count + 1);
        setName("Bhagirathsinh");
        console.log("Name changed useEffect");
      }, 1000);
    },[name]);
    const changeN = ()=>{
      setName("John Doe");
      console.log("Name changed With Button");
    }
  return (
    <div>
      <h1>Useeffect</h1>
      <p>Hello, {name}!</p>
      {/* <h1>I've rendered {count} times!</h1>; */}
      <button onClick={changeN}>Change Name</button>
    </div>
  )
}
