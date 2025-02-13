import React from 'react'
import ChildBFile from './ChlldBfile'

export default function ChildAFile(props) {
    // console.log(props);
  return (
    <div>
      <h1>ChildAFile</h1>
      <p>{props.fulluserdata}</p>
      <button onClick={props.fun}>Hello A</button>
      {/* Passing props to ChildBFile component */}
      <ChildBFile fulluserdataA = {props.fulluserdata} fun={props.fun}/>
    </div>
  )
}
