import React from 'react'

export default function Fs({stageNext, stagePrev,stage,setStage}) {
  
  return (
    <div>
      {stage}
      <h2>Step 1:Personal Details</h2>
      {/* Personal details form */}
      <div>
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" />
      </div>
      <div>
        <label>email:</label>
        <input type="text" placeholder="Enter your name" />
      </div>
      <div>
        <label>phone:</label>
        <input type="text" placeholder="Enter your name" />
      </div>
      <button onClick={stageNext}>Click next</button>
      <button onClick={stagePrev}>Click next</button>
      {/* Done... */}
    </div>
  )
}
