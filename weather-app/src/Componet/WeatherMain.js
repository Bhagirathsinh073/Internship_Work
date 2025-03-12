import React, { useState } from 'react'

export default function WeatherMain() {

    const [city, set] = useState('');
    const [input, setInput] = useState('');
    const [input, setInput] = useState('');
    const handleSearch = () => {

    }
    const handleSearch = () => {
         
        let

    }
  return (
    <div>
      <h1>Weather Main Project</h1>
      {/* Weather Main Component */}

        <div>
            <form onSubmit={handleSubmit}>
        <input type = 'text' id = 'weather' name='input' placeholder='Search Here....'/>
        <button onClick={handleSearch}>Search Weather</button>    
            </form>
        </div>      
    </div>
  )
}
