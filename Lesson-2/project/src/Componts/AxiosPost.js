import axios from 'axios';
import React, { useState } from 'react'

function AxiosPost() {
    const [data,setData] = useState({
        name: '',
        email: ''
    })
    const [response,setResponse] = useState()


  const handleForm = (e) =>{
    e.preventDefault();
    
  } 

  const handleSubmit = async (e) => {
    try {
        const res =  await axios.post("https://jsonplaceholder.typicode.com/posts",data);
        setResponse(res.data);
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
  }

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    // console.log(data);
  };

  return (
    <>
<h1>Axios Post</h1>
<form onSubmit={handleForm}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange}  value={data.name}/>
        <input type="email" name="email" placeholder="Email" onChange={handleChange}  value={data.email}/>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>

      {response && <p>{JSON.stringify(response,null,2)}</p>}
    </>
)
}

export default AxiosPost