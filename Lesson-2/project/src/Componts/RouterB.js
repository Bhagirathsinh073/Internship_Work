import React from 'react'
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';
import Layout from '../Pages/Layout';
import Blog from '../Pages/Blog';

import { Routes, Route } from'react-router-dom';

import Nothing from '../Pages/Nothing';

export default function RouterB() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/layout' element={<Layout/>}/>
          <Route path='*' element={<Nothing/>}/>
      </Routes>
    </div>
  )
}
