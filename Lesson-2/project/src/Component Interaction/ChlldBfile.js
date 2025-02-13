import React from 'react'
import ChildCFile from './ChildCfile'

export default function ChildBFile(props) {
  return (
    <div>
      <h1>ChildBFile</h1>
      <p>{props.fulluserdataA}</p>
      <button onClick={props.fun}>Click Me B</button>
      <ChildCFile fulluserdataB ={props.fulluserdataA} fun={props.fun}/>
    </div>
  )
}
