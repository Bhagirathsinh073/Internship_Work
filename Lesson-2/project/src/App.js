import './App.css';
// import AxiosCoM from './Componts/AxiosCom';
// import AxiosPost from './Componts/AxiosPost';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home'
import Contact from './Pages/Contact';
import Layout from './Pages/Layout';
import Blog from './Pages/Blog';
import NavBar from './Componts/NavBar';
import Nothing from './Pages/Nothing';
import ClassComp from './Componts/ClassComp';
function App() {
  return (
    <>
    <BrowserRouter>
    
    <NavBar/> {/*  Function Component */}
    <ClassComp/> {/*  class Component */}
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/layout' element={<Layout/>}/>
          <Route path='*' element={<Nothing/>}/>
      </Routes>
    
    </BrowserRouter>
    {/* <AxiosCoM/> */}
    {/* <AxiosPost/> */}
    </>
  );
}

export default App;
