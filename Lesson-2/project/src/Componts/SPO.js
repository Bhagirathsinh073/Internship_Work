import React, { useState } from 'react'
import SPOC from './SPOC'

export default function SPO() {
    const [data,setData] = useState({
        fullName: 'SPOC',
        phone: '9876543210'
    });
    const user = {
        name: 'John Doe',
        contact: '1234567890'
    }
  return (
    <div>
      <h1>Parent</h1>
      <SPOC {...user}  {...data}/>
    </div>
  )
}

