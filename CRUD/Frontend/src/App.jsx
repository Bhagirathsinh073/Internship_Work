import './App.css'
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import Home from './Page/Home'
import Login from './Page/Login'
import Registor from './Page/Registor'
import ViewPage from './Page/ViewPage'
import CreateUser from './Page/CreateUser'

function App() {

  return (
    <>
    <BrowserRouter>
<Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/reg' element={<Registor/>}/>
          <Route path='/view' element={<ViewPage/>}/>
          <Route path='/create' element={<CreateUser/>}/>
</Routes>
    </BrowserRouter>
    </>
  )
}

export default App
