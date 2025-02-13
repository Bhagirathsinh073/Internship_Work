import React from 'react'
import ChildCFile from './ChildCfile'

export default function ChildBFile(props) {
  return (
    <div>
      <h1>ChildBFile</h1>
      <p>{props.fulluserdataA}</p>
      <ChildCFile fulluserdataB ={props.fulluserdataA} />
    </div>
  )
}
