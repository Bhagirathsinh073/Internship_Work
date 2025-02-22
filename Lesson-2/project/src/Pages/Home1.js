import React from 'react'
import { Link } from 'react-router-dom'

export default function Home1() {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
      <h2>Welcome to the Home Page</h2>
      <p>Click on a username to view the profile</p>

      <Link to="/profile/john">Go to John's Profile</Link> <br />
      <Link to="/profile/jane">Go to Jane's Profile</Link><br/>
      <Link to="/profile/Bj/name">Go to lasst's Profile</Link>
    </div>
    </div>
  )
}
