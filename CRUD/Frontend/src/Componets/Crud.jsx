import React from 'react'
import { useNavigate } from 'react-router-dom'

function Crud() {
  
    const navigate = useNavigate()
  return (
    <>
<button onClick={()=>{navigate('/create')}}>Add User</button>    
<button onClick={()=>{navigate('/view')}}>Show User</button>
    </>
  )
}

export default Crud