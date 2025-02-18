/* eslint-disable react/jsx-no-comment-textnodes */
import './App.css';
import Create from './CRUD/create';
// import Test from './axios/Test';
// import './Componts/Form.css';
import Texttask from './Task-1/Text_task';

// import ParentFile from './Component Interaction/ParentFile';
// import AxiosCoM from './Componts/AxiosCom';
// import AxiosPost from './Componts/AxiosPost';
// import { BrowserRouter,Link,Route,Routes} from 'react-router-dom';
// import Read from './CRUD/read';
// import Update from './CRUD/update';
// import ClassComp from './Componts/ClassComp';
// import LifeCycle from './Componts/LifeCycle';
// import UseState from './Hooks/UseState';
// import Useeffect from './Hooks/Useeffect';
// import UseContextMain from './Hooks/UseContext/Usecontext_Main';
// import UseRef from './Hooks/UseRef';
// import RouterB from './Componts/RouterB';
// import Form from './Componts/Form';

function App() {
  return (
    <>
    {/* <NavBar/>  Function Component */}
    {/* <ClassComp/>  class Component */}
    {/* <LifeCycle/> ' Life cycle of react */}
    {/* <UseState/>  */}
    {/* <Useeffect/> */}
    {/* <UseContextMain/> */}
    {/* <UseRef/> */}
   
    {/* <AxiosCoM/> */}
    {/* <AxiosPost/> */}
    {/* <ParentFile/> */}
    {/* <Form/> */}
    {/* <Test/> */}
     {/* <BrowserRouter> */}
    {/* <RouterB/>  */}
    {/* <div className='main'>
      <h2 className='main-header'>React CRUD Operation:</h2>
      <button><Link to={'/create'}>Create Operation</Link></button>
      <div>
      <Routes>
      <Route exact path='/create' element={<Create/>} />
      <Route exact path='/read' element={<Read/>} />
      <Route exact path='/update' element={<Update/>} />
      </Routes>
      {/* <Create/> */}
      {/* </div> */}
    {/* </div> */}
     {/* </BrowserRouter>  */} 
      <Texttask/>
    
    </>
  );
}

export default App;
