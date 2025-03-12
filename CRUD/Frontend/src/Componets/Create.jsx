import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Create() {
    const navigate = useNavigate();
    const [input,setInput] =useState({
        userid:'',
        name:'',
        username:'',
        address:[
            {type:'home',block:'',street:'',city:'',state:'',zip:''},
            {type:'work',block:'',street:'',city:'',state:'',zip:''}
        ],
        password:'',
        email:'',
        phone:'',
        role:'',
        bio:'',
        isActive:true,
    })

    const handleInput = (e) =>{
        const {name,value} = e.target
        setInput({...input,[name]:value})
    }
    const handlesubmit = async (e) =>{
        e.preventDefault();
        console.log('Form Submitted');
        // Add API call here
        try {
           const response =  await axios.post('http://localhost:9000/api/users/create',input)
           console.log("Response:", response.data);
        } catch (error) {
            console.log(error)
        }

        navigate('/');
    }

    const handleAddressChange = (index, e) => {
        const updatedAddress = [...input.address];
        updatedAddress[index][e.target.name] = e.target.value;
        setInput({ ...input, address: updatedAddress });
      };
  return (
    <div>
<h1>User ADD Form</h1>
      <div className='container w-50 border-2 mt-2 border border-dark bg-dark text-white'>

<form onSubmit={handlesubmit}>
  <div className='row'>
    <div className='col-md-3'>
    <div className="mb-3">
<label htmlFor="exampleInputEmail1" className="form-label">User ID</label>
<input type="text" className="form-control" id="exampleInputEmail1"
 name='userid' 
onChange={handleInput}
value={input.userid}
aria-describedby="emailHelp"/>
</div>
    </div>
    <div className='col-md-9'>
    <div className="mb-3">
<label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
<input type="text" className="form-control" id="exampleInputName" name='name' onChange={handleInput} value={input.name} aria-describedby="emailHelp"/>
</div>
    </div>
  </div>

<div className='row'>
  <div className='col-md-6'>
  <div className="mb-3">
<label htmlFor="exampleInputEmail1" className="form-label">Username</label>
<input type="text" className="form-control" id="exampleInputUsername" name='username'onChange={handleInput} value={input.username} aria-describedby="emailHelp"/>
</div>
  </div>
  <div className='col-md-6'>
  <div className="mb-3">
<label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
<input type="text" className="form-control" id="exampleInputphone" name='phone'onChange={handleInput} value={input.phone}aria-describedby="emailHelp"/>
</div>
  </div>
</div>



<div className="mb-3">
<label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
<input type="text" className="form-control" id="exampleInputEmail1" name='email'onChange={handleInput} value={input.email} aria-describedby="emailHelp"/>
</div>

<div className="mb-3">
<label htmlFor="exampleInputPassword1" className="form-label">Password</label>
<input type="password" className="form-control" id="exampleInputPassword1" name='password' value={input.password} onChange={handleInput}/>
</div>
<div className='d-flex justify-content-around '>

<label htmlFor="exampleInputPassword1" className="form-label">Role</label>
<div className="form-check">
  <input className="form-check-input" type="radio" name="role" id="exampleRadios1" value={"user"} onChange={handleInput} />
  <label className="form-check-label" htmlFor="exampleRadios1">
    User
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="role" id="exampleRadios1" value={"admin"} onChange={handleInput}/>
  <label className="form-check-label" htmlFor="exampleRadios1">
    Admin
  </label>

</div>

</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">BIO</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='bio' onChange={handleInput}></textarea>
</div>
<div>

    <label htmlFor="validationCustom01" className="form-label">Home Address</label>
<div className='row'>

<div className="col-2 mb-1">
    <label htmlFor="validationCustom01" className="form-label">Block</label>
    <input type="text" className="form-control" id="validationCustom01"  name='block' value={input.address[0].block} onChange={(e) => handleAddressChange(0, e)}/>
    
  </div>
  <div className="col-10 mb-1">
    <label htmlFor="validationCustom02" className="form-label">Street</label>
    <input type="text" className="form-control" id="validationCustom02" name='street' value={input.address[0].street} onChange={(e) => handleAddressChange(0, e)} />
   
  </div>
<div className="col-4 mb-1">
    <label htmlFor="validationCustom01" className="form-label">City</label>
    <input type="text" className="form-control" id="validationCustom01"  name='city' value={input.address[0].city} onChange={(e) => handleAddressChange(0, e)}/>
    
  </div>
  <div className="col-4 mb-1">
    <label htmlFor="validationCustom02" className="form-label">State</label>
    <input type="text" className="form-control" id="validationCustom02" name='state' value={input.address[0].state} onChange={(e) => handleAddressChange(0, e)} />
   
  </div>
<div className="col-4 mb-1 mb-1">
    <label htmlFor="validationCustom01" className="form-label">Zip</label>
    <input type="text" className="form-control" id="validationCustom01" name='zip' value={input.address[0].zip} onChange={(e) => handleAddressChange(0, e)} />
    
  
  
</div>
</div>
</div>
<div>

    <label htmlFor="validationCustom01" className="form-label">Work Address</label>
<div className='row'>

<div className="col-2 mb-1">
    <label htmlFor="validationCustom01" className="form-label">Block</label>
    <input type="text" className="form-control" id="validationCustom01" name='block' value={input.address[1].block} onChange={(e) => handleAddressChange(1, e)}/>
    
  </div>
  <div className="col-10 mb-1">
    <label htmlFor="validationCustom02" className="form-label">Street</label>
    <input type="text" className="form-control" id="validationCustom02"  name='street'value={input.address[1].street} onChange={(e) => handleAddressChange(1, e)}/>
   
  </div>
<div className="col-4 mb-1">
    <label htmlFor="validationCustom01" className="form-label">City</label>
    <input type="text" className="form-control" id="validationCustom01"  name='city' value={input.address[1].city} onChange={(e) => handleAddressChange(1, e)}/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-4 mb-1">
    <label htmlFor="validationCustom02" className="form-label">State</label>
    <input type="text" className="form-control" id="validationCustom02" name='state' value={input.address[1].state} onChange={(e) => handleAddressChange(1, e)} />
   
  </div>
<div className="col-4 mb-1 mb-1">
    <label htmlFor="validationCustom01" className="form-label">Zip</label>
    <input type="text" className="form-control" id="validationCustom01" name='zip' value={input.address[1].zip} onChange={(e) => handleAddressChange(1, e)} />
    
  
  
</div>
</div>
</div>


<div className='d-flex justify-content-center align-items-center p-2 m-1'>

<button type="submit" className="btn btn-primary mt-2 mb-2 ">Submit</button>
</div>
</form>
</div>
    </div>
  )
}
