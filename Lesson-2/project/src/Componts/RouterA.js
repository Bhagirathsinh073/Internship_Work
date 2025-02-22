import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Profile from '../Pages/Profile'
import Home1 from '../Pages/Home1'

export default function RouterA() {
  return (
    <div>
      
      <Routes>
        <Route path='/home1' element={<Home1/>}></Route>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/profile/:username' element={<Profile />} />   {/*dynamica routing*/}
        <Route path='/profile/:username/:last' element={<Profile />} />   {/*dynamica routing*/}
      </Routes>
    </div>
  )
}
