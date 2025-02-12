import React from 'react'
import { Link } from 'react-router-dom'
export default function NavBar() {
 
  return (
    <>
      <ul style={{listStyle:'none', display:'flex',justifyContent:"center", alignItems:"center" }}>
        <li className='m-left'><Link to={"/"}>Home</Link></li>
        <li  className='m-left'><Link to={"/blog"}>Blog</Link></li>
        <li  className='m-left'><Link to={"/contact"}>Contact</Link></li>
        <li  className='m-left'><Link to={"/layout"}>Layout</Link></li>
      </ul>
    </>
  )
}
