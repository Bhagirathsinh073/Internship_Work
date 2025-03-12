// import axios from 'axios';
import React, { useState } from 'react'
import API from "../api";
import { Navigate, useNavigate } from 'react-router-dom';

export default function Login() {
  const [formData,setFormData] = useState({
    email: '',
    password: '',
  })

  const navigate = useNavigate();

  const handleInput = (e) =>{
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  const handleSubmit = async (e) =>{
    e.preventDefault()
    try {
      const response = await API.post("/hash/login",formData)
      console.log(response.data)
      alert("Success to login")
      navigate('/')  
    } catch (error) {
      console.log(error)
      alert(`Failed to Login ${error.response.data.error}`)
      navigate('/login')
    }
  }
  return (
    <div className='w-25 container mt-5 border border-1 p-5 bg-dark rounded-4 text-white'>
      <h3>Login Here</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="text" className="form-control" id="exampleInputEmail1" name='email' onChange={handleInput} value={formData.email} aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" onChange={handleInput} value={formData.password} name='password' autoComplete='false' />
        </div>

        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  )
}
