import React, { useContext } from 'react'
import { Data11, Data12, Data13, Data14} from './Usecontext_Main'

export default function ChildB() {
    const userName =useContext(Data11);
    const userage = useContext(Data12);
    const userfun = useContext(Data13);
    const userlast = useContext(Data14);
  return (
    <div>
      <h1>ChildB</h1>
      <p>Name :{userName + " " + userlast}</p>
      <p>Age :{userage}</p>
      <button onClick={userfun}>Button</button>
    </div>
  )
}
