import React from 'react'
import ChildAFile from './ChildAFile'

export default function ParentFile() {
    const fullname = 'John Doe'
    // const age = 30
  return (
    <div>
      <h1>Prop Driling</h1>
    <ChildAFile fulluserdata={fullname}/>
    </div>
  )
}
