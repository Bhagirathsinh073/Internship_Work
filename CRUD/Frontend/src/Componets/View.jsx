import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function View() {
    const [userData,setUserData] = useState("")
    // Fetch data from API, map it to table rows, and display it here.
    // This component will be responsible for displaying the user's data.
    // You can use hooks or class components here based on your preference.
    // The API endpoint for fetching user data will be provided in the props.
    const getUserData = async () => {
        try {
            const response = await axios.get('localhost:9000/api/users')
            setUserData(response)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(()=>{
        getUserData()
        console.log(userData)
    },[userData])
  return (
    <div>
      <h1>HEllo</h1>
      <table>

      </table>
    </div>
  )
}
