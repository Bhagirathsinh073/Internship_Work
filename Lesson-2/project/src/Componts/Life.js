import React, { useEffect, useState } from 'react'

export default function Life() {
    const [count,setCount] = useState(0);
// ComponetDidMount
// ComponetDidUpdate
// ComponetWillUnmount
    useEffect(()=>{
        console.log("Componet Mounted: (componentDIdMount)");
        console.log(count +"Componet Didupdate");
        
        return () => {
            console.log("Componet unMounted: (component willUnmount)");
        }
    },[count])
  return (
    <>
    <h1> Life Cycle Hooks Example </h1>
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>

    </>
  )
}


// class Component

// 1)Mounting
// 2)updating
// 3)unmounting


// 1)Mounting

// -constructor()
// -getDrivedStatefromPops
// -render()
// -componetDidMount()

// 2)Updating
// -getDrivedStateFromProps
// -shldComponentUpdate
// -render()
// -getSnapShotBeforeUpdate

// 3)Unmounting

// -componetWillUnmount()