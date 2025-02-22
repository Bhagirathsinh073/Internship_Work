import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'

export default function Profile() {
    const {username,last} = useParams();
    // const {} = useParams();
    const navigate = useNavigate();
  return (
    <div>
      <h2>Profile Page</h2>
      <p>Welcome, 1<strong>{username}</strong>!</p>
      <p>Welcome, 2<strong>{last}</strong>!</p>

      <button onClick={() => navigate("/home1")}>Go Back to Home</button>
    </div>
  )
}
