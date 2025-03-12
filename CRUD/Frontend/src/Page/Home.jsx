import React from 'react'
import PButton from '../Componets/PButton'
// import { useNavigate } from 'react-router-dom'

export default function Home() {
  // const navigate = useNavigate()


  const handleAddUserBtn = () => {
    console.log("Add User Button Clicked")
    
  }
  const handleShowUserBtn = () => {
    console.log("Show User Button Clicked")
  }
  const handleDeleteUserBtn = () => {
    console.log("Delete User Button Clicked")
  }
  const handleLogoutBtn = () => {
    console.log("Logout User Button Clicked")
  }



  return (
    <div>
      <div className='text-center'>
      <h1>Welcome to CRUD OPRATION</h1>
      <h3>This is a simple CRUD operation using React, Vite, and Axios Node js,Express JS and Mongo DB</h3>
      </div>
      <div className='d-flex justify-content-center m-3 p-4 align-items-center'>
      <PButton 
      text = {"Add User"}
      onclick={handleAddUserBtn}
      // cl = {"p-1"}
      />
      <PButton 
      text = {"Show User"}
      onclick={handleShowUserBtn}
      />
      <PButton 
      text = {"Delete User"}
      onclick={handleDeleteUserBtn}
      />
      <PButton 
      text = {"Logout User"}
      onclick={handleLogoutBtn}
      />
      </div>
    </div>
    
  )
}
