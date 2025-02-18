import React, {  useRef, useState } from 'react'

import './Form.css';
import axios from 'axios';

export default function Form() {
  const [FirstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [mail,setMail] = useState("");
  const [phone,setPhone] = useState("");
  const [address,setAddress] = useState("");
  // const [show,setShow] = useState(false);

  const ferror = useRef()
  const lerror = useRef()
  const merror = useRef("")
  const perror = useRef()
  const aerror = useRef()

  // const details = useRef();

  //Handle form submission
  const handleForm = (e)=>{
    e.preventDefault();
  }

  // validate the form 
  function validate(){
    if(FirstName === ""){
      console.log("First Name is Empty")
      ferror.current.style.display = "block"
      ferror.current.textContent = "* First Name is required *"
    }else if(FirstName.length < 5){
      console.log("*First Name more than 5 characters*")
      ferror.current.textContent = "*First Name more than 5 characters*"
    }else if(FirstName.length > 15){
      ferror.current.textContent = "*First Name less then 15 characters*"
      console.log("*First Name less than 15 characters*")
    }else {
      ferror.current.style.display = "none";
      ferror.current.textContent = "";
      console.log(FirstName)
    }
    
    if(lastName === ""){
      lerror.current.textContent = "*Last Name is Required*"
      console.log("last Name is Empty")
    }else if(lastName.length < 5){
      lerror.current.textContent = "*Last Name is More than 5 Character*"
      console.log("last name more than 5 characters")
    }else if(FirstName.length > 20){
      lerror.current.textContent = "*Last Name is Less than 15 Character*"
      console.log("last name less than 20 characters")
    }else{
      console.log(lastName)
      lerror.current.textContent = ""
    }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const pattern = /^\d{10}$/;
    
    if(mail === ""){
      console.log("Email is Empty")
      merror.current.textContent = "Email is required";
    }else  if(!emailPattern.test(mail)){
      merror.current.textContent = "Email in not valid format";
      console.log("not properly formatted")
    }
    else{
      merror.current.textContent = ""
      console.log(mail)
    } 
    
    if(phone === ""){
      perror.current.textContent = "Number is required";
      console.log("Phone Number is Empty")
    }else if(!pattern.test(phone)){
      perror.current.textContent = "Number is not properly";
      console.log("not properly formatted")
    }
    else{
      perror.current.textContent = ""
      console.log(phone)
    }
    

    if(address === ""){
      aerror.current.textContent = "Address is required";
      console.log("Address is Empty");
    }else{
      console.log(address);
    }
  }
  //Console the data
  const sendData = () =>{   
    validate();
    if(!FirstName || !lastName || !mail || !phone || !address){
      console.log("Please fill all fields");
      return;
    }else{
      axios.post("https://67b2ce60bc0165def8ce9ce8.mockapi.io/Form_Data",{
        FirstName,
        lastName,
        mail,
        phone,
        address
      }).then((res)=>{
        console.log({res});
      }).catch((err)=>{
        console.log(err);
      })
    }
    
  }

 
  //useRef to target the element to show or hide
  // const togg =() =>{
  //   if(show === true){
  //     details.current.style.display= 'none';
  //     setShow(false);
  //   }
  //   else{
  //     details.current.style.display= 'block';
  //     setShow(true);
  //   }
  // }
  return (
<>
 <div className='main'>
  <div className='mainbox'>
    <div className='formbox'>
      <div className='head '>
          <h2>Client Details</h2>
          <p>Enter the details of incoming Clients</p>
      </div>
      <div className='formbody bebas-neue-regular'>
        <form onSubmit={handleForm} className='formBodymain'>
          <div className='formField'>
            <div className='titleText'>
          <p><i className="fa-solid fa-user"></i>FirstName </p><span ref={ferror}></span>
            </div>
        <input type='text' placeholder="Enter Your First Name" value={FirstName} onChange={(e)=>{setFirstName(e.target.value)}} autoComplete='off' required />
        </div>
        <div className='formField'>
        <div className='titleText'>
          <p><i className="fa-solid fa-user"></i>LastName</p><span ref={lerror}></span>
        </div>
        <input type='text' placeholder="Enter Your Last Name" value={lastName} onChange={(e)=>{setLastName(e.target.value)}}  autoComplete='off' required/>
        </div>
          <div className='formField'>
          <div className='titleText'>
          <p><i className="fa-solid fa-envelope"></i>Email</p><span ref={merror}></span>
        </div>
        <input type='email' placeholder="Enter Your Email address" value={mail} onChange={(e)=>{setMail(e.target.value)}}  autoComplete='off' />
        </div>
        <div className='formField'>
        <div className='titleText'>
          <p><i className="fa-solid fa-phone"></i>Phone Number</p><span ref={perror}></span>
          </div>
        <input type='number' placeholder="Enter Your Number" value={phone} onChange={(e)=>{setPhone(e.target.value)}}  autoComplete='off'  required/>
        </div>
          <div className='formField'>
          <div className='titleText'>
          <p><i className="fa-solid fa-address-book"></i>Address</p><span ref={aerror}></span>
          </div>
          
          <textarea placeholder='Enter Your Address' value={address} onChange={(e)=>{setAddress(e.target.value)}} required ></textarea>
        </div>
        
          
         
          
        
          <div className='btn'>
        <button onClick={sendData} className='btn1'>Click</button>
          </div>
        
        </form>

        
      </div>
    </div>
    </div>
 </div>
</>


    // <>
    // details.current.innerText = `Person ${FirstName} ${lastName} with ${mail} and ${phone}`;
      // details.current.style.fontSize = '20px';
    //   <h1>Form in React</h1>

    //   <form onSubmit={handleForm}>
    //     <label>FirstName:</label>
    //     <br/>
    //     <input type='text' 
    //     placeholder="Your First Name"
    //     value={FirstName}
    //     onChange={(e)=>{setFirstName(e.target.value)}} 
    //     />
    //     <br/>
    //     <label>LastName:</label>
    //     <br/>
    //     <input type='text' placeholder="Your Last Name"
    //     value={lastName}
    //     onChange={(e)=>{setLastName(e.target.value)}} />
    //     <br/>
    //     <label>Email:</label>
    //     <br/>
    //     <input type='text' placeholder="Your mail address"
    //     value={mail}
    //     onChange={(e)=>{setMail(e.target.value)}} />
    //     <br/>
    //     <label>Phone:</label>
    //     <br/>
    //     <input type='text' placeholder="Your Phone"
    //     value={phone}
    //     onChange={(e)=>{setPhone(e.target.value)}} />
    //     <button onClick={sendData}>Submit</button>
    //   </form>
    //   {/* <p ref={details}>Hello</p> */}
    //   {/* <button onClick={togg}>Show/Hide Text</button> */}
    // </>
  )
}
