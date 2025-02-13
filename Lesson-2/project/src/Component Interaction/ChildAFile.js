import React from 'react'
import ChildBFile from './ChlldBfile'

export default function ChildAFile(props) {
    // console.log(props.FullNdata);
  return (
    <div>
      <h1>ChildAFile</h1>
      {/* <p>{props.fulluserdata}</p> */}
      <ChildBFile fulluserdataA = {props.fulluserdata}/>
    </div>
  )
}
