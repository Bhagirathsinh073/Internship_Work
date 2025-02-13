import React, { useState } from 'react'
import ChildAFile from './ChildAFile'
import { MyContext } from './MyContext'


export default function ParentFile() {
    const[text,setText] = useState("");
    const fullname = 'John Doe'
    // const age = 30
    function Gethello(){
        console.log(`Hello from parent`)
    }
  return (
    <div>
      <h1>Prop Driling</h1>
      <h1>{text}</h1>
    <MyContext.Provider value={{text,setText}}>
    <ChildAFile fulluserdata={fullname} fun={Gethello}/>
    </MyContext.Provider>
    
    </div>
  )
}
