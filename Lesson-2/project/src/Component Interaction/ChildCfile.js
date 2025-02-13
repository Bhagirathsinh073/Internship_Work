import React, { useContext } from 'react'
import { MyContext } from './MyContext';

export default function ChildCFile(props) {
    const{text,setText} = useContext(MyContext);
  return (
    <div>
      <h1>ChildCFile</h1>
      <p>This is a ChildCFile component.</p>
        <p>{props.fulluserdataB}</p>
        <button onClick={props.fun}>From C</button>
        <h1>{text}</h1>
      <button onClick={() => setText('Hello, world!')}>
        Click me
      </button>
    </div>
  )
}
