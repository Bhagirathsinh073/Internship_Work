import React from 'react'

export default function PButton({text,onclick}) {
  
  return (
    <div>
      {/* <button className={}>{text}</button> */}
      <button className="p-2 ms-4 bg-dark text-light fw-medium" onClick={onclick}>{text}</button>
    </div>
  )
}
