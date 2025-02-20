import React ,{ Suspense, lazy } from 'react'
// import Home from '../Pages/Home';
// import Contact from '../Pages/Contact';
// import Layout from '../Pages/Layout';
import Blog from '../Pages/Blog';

import { Routes, Route } from'react-router-dom';

import Nothing from '../Pages/Nothing';
import Form from './Form';
import FormData from './Form_Data';


//Lazy loading
const Home = lazy(() => import("../Pages/Home"));
const Layout = lazy(() => import("../Pages/Layout"));
const Contact = lazy(() => import("../Pages/Contact"));

//Create a new variable and assign to lazy(() => import("path"))
export default function RouterB() {
  return (
    <div>
          <Suspense fallback={<h2>Loading Page...</h2>}>
        
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/layout' element={<Layout/>}/>
          <Route path='*' element={<Nothing/>}/>
          <Route path='/form' element={<Form/>}/>
          <Route path='/formdata' element={<FormData/>}/>
      </Routes>
      </Suspense>
    </div>
  )
}
