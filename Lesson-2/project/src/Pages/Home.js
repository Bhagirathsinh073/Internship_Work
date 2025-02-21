import React from 'react'
// import useCustom from '../Hooks/UseCustom'


export default function Home() {
  
  
  return (
    <div>
      <h1>Home Page</h1>
      
    </div>
  )
}




//Use for Custom Hook
// const {data,loading} = useCustom("https://jsonplaceholder.typicode.com/posts");

//  if (loading) return <p>Loading... FOR</p>;
// {
//   loading ? (<p>Loading... FOR</p>): (data.map((item)=>{
//      return (
//        <div key={item.id}>
//          <h2>{item.title}</h2>
//          <p>{item.body}</p>
//        </div>
//      )
//    })
//  )
//  }