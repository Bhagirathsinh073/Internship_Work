import React, { useEffect, useState } from 'react'

export default function Useeffect() {
    const [name,setName] = useState("user")
   
    // const [count, setCount] = useState(0);

    useEffect(() => {
      setTimeout(() => {
        // setCount((count) => count + 1);
        setName("Bhagirathsinh");
      }, 3000);
    });
  return (
    <div>
      <h1>Useeffect</h1>
      <p>Hello, {name}!</p>
      {/* <h1>I've rendered {count} times!</h1>; */}
      <button>Change Name</button>
    </div>
  )
}
