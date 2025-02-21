import React from 'react'
import useCustom from '../Hooks/UseCustom'


export default function Home() {
  const {data,loading} = useCustom("https://jsonplaceholder.typicode.com/posts");
  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <h1>Home Page</h1>
      {data.slice(0, 5).map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  )
}
