import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function Update() {

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [id, setID] = useState(null);
    const navigate = useNavigate();

useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setEmail(localStorage.getItem('Email'));
        setPhone(localStorage.getItem('Phone'));
}, []);

const handleSubmit =(e)=>{
  e.preventDefault();
}
const updateAPIData = () =>{
    axios.put(`https://67b2ce60bc0165def8ce9ce8.mockapi.io/FakeData/${id}`,{
         id,
         firstname,
         lastname,
         email,
         phone,
 
    });
    localStorage.setItem('First Name', " ");
    localStorage.setItem('Last Name', " ");
    localStorage.setItem('Email', " ");
    localStorage.setItem('Phone', " ");
    localStorage.setItem('ID', " ");
    console.log("Data Update");
    navigate("/read");
}
  return (
    <form className="create-form" onSubmit={handleSubmit}>
    <label>
      First Name:
      <input type="text"  placeholder='First Name' value={firstname} onChange={(e) => setFirstName(e.target.value)}/>

    </label>
    <br/><br/>
    <label>
      Last Name:
    <input type="text" placeholder='Last Name'value={lastname} onChange={(e) => setLastName(e.target.value)}/>
    </label>
    <br/>
    <label>
      Email Address:
      <input type="text"  placeholder='First Name' value={email} onChange={(e) => setEmail(e.target.value)}/>

    </label>
    <br/><br/>
    <label>
      Phone Number:
    <input type="text" placeholder='Last Name'value={phone} onChange={(e) => setPhone(e.target.value)}/>
    </label>
    <br/>
    <button type="submit" onClick={updateAPIData}>Update Data</button>
  </form>
  )
}
