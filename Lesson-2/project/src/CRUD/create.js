import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Create = () => {
  const [firstname,setFirstName] = useState("");
  const [lastname,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");

  const handleForm = (e)=>{
    e.preventDefault();
    console.log("Form submitted");

   
  }
  const postData = () => {
    console.log(firstname);
    console.log(lastname);
    console.log(email);
    console.log(phone);
    axios.post("https://67b2ce60bc0165def8ce9ce8.mockapi.io/FakeData",{
      firstname,
      lastname,
      email,
      phone
    }).then((data)=>{
      console.log({data});
    }).catch((err)=>{
      console.log(err);
    })
    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
}
// const showData = ()=>{
//   const res =  axios.get("https://67b2ce60bc0165def8ce9ce8.mockapi.io/FakeData");
//   console.log("Data fetched");
//   res.then((data)=>{
//     console.log({data});
//     setShowList(data.data);
//   }).catch((err)=>{
//     console.log(err);
//   })
// }
  return(
    <>
  <form className="create-form" onSubmit={handleForm}>
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
    <button type="submit" value="Submit"onClick={postData}>Post Data</button>
    <button><Link to="/read">Show Data</Link></button>
  </form>
 
  </>
  )
  

}

export default Create;