import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Box from './Box';

// https://jsonplaceholder.typicode.com/posts
function Test() {
    const [data, setData] = useState();
    const [postData, setPostData] = useState();
    // const [title, setTitle] = useState();
    // const [body, setBody] = useState();


    useEffect(()=>{
        const res = axios.get(' https://jsonplaceholder.typicode.com/posts');
         res.then((data)=>{
             setData(data.data);
             console.log(data.data);
            //  console.log(title,body)
         })
         res.catch((error)=>{
             console.log(error);
         })
    },[])

  
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts',postData)
       .then((res)=>{
        setPostData(res)
           console.log(res);
    })
       .catch((error)=>{
         console.log(error);
       })
    }
    
  return (
    <>
        <h1>Axios - GET</h1>
        <ul>
        {data && data.slice(0,3).map((curItem,index) =>{
            return <Box postData = {curItem} />
            
        })}
        </ul>


        <h1>Axios - POST</h1>
        <form onSubmit={handleSubmit}>
            <input type='text'
            placeholder='Title'
            name='title'
            value={postData.title}
            // onChange={(e)=>{setTitle(e.target.value)}}
            />
            <br/>
            <input type='text'
            placeholder='Body'
            name='body'
            value={postData.body}
            // onChange={(e)=>{setBody(e.target.value)}}
            />

            <button type='submit'>Submit the Post:</button>
        </form>

      
    </>
  )
}

export default Test