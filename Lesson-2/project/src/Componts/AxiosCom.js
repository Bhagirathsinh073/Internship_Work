import React,{useState,useEffect} from 'react'
import axios from 'axios';

export default function AxiosCom() {
  const [data,SetData] = useState({});
  useEffect(()=>{
    const getPost = async ()=> {
      try {
        const response =  await axios.get('https://jsonplaceholder.typicode.com/users');
        SetData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getPost();
  },[]);


  return (
  <>
  <h2>Axios Component</h2>
  {
    data.length > 10 && data.map(post=>(
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ))
  }
 
  </>
  )
}


// Note: This example requires axios to be installed and imported.