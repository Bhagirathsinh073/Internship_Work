import React from 'react'
import ChildAFile from './ChildAFile'

export default function ParentFile() {
    const fullname = 'John Doe'
    // const age = 30
    function Gethello(){
        console.log(`Hello from parent`)
    }
  return (
    <div>
      <h1>Prop Driling</h1>
    <ChildAFile fulluserdata={fullname} fun={Gethello}/>
    </div>
  )
}
