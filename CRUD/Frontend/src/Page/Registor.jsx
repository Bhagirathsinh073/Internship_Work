import React, { useState } from 'react'
// import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import API from '../api'
export default function Registor() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })
const navigate = useNavigate();
  const handleInput = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
const handleSubmit = async(e) =>{
  e.preventDefault()
  console.log('Form Submitted', formData);
  // Add API call here
  try {
    const response = await API.post("/hash/register",formData)
    console.log("Response:", response.data);
    setFormData({name: '', email: '', password: ''})
    navigate('/login');

  } catch (error) {
    // console.log(error.response.data.error)
    alert(`Error: ${error.response.data.error}`);
  }  
}

  return (
    <div className='w-25 container mt-5 border border-1 p-5 bg-dark rounded-4 text-white'>
      <h3>Register User</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Name:</label>
          <input type="text" className="form-control" id="exampleInputEmail" name='name' onChange={handleInput} value={formData.name} aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="text" className="form-control" id="exampleInputEmail1" name='email' onChange={handleInput} value={formData.email} aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text text-light">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" onChange={handleInput} value={formData.password} name='password' autoComplete='false' />
        </div>

        <button type="submit"  onClick = {handleSubmit}className="btn btn-primary">Signup</button>
      </form>
    </div>
  )
}
