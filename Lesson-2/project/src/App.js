import React from "react";
import './App.css';
// import UseCounterMain from "./Hooks/UseCounterMain";
// import Life from './Componts/Life';
// import './Componts/Form.css';
// import ClassComp from './Componts/ClassComp';
// import LifeCycle from './Componts/LifeCycle';
// import Form from './Componts/Form';
// import FormData from './Componts/Form_Data';

//Hooks
// import ParentFile from './Component Interaction/ParentFile';
// import Useeffect from './Hooks/Useeffect';
// import UseState from './Hooks/UseState';
// import UseContextMain from './Hooks/UseContext/Usecontext_Main';
// import UseRef from './Hooks/UseRef';

//Task
// import Texttask from './Task-1/Text_task';

//CRUD -axios
// import Test from './axios/Test';
// import AxiosCoM from './Componts/AxiosCom';
// import AxiosPost from './Componts/AxiosPost';
// import Create from './CRUD/create';
// import Read from './CRUD/read';
// import Update from './CRUD/update';
import RouterB from './Componts/RouterB';
// import RouterA from './Componts/RouterA';
// import { BrowserRouter} from 'react-router-dom';
// import Main from "./MultiStage_form/Main";
// import RouterA from "./Componts/RouterA";
// import SPO from './Componts/SPO';
// import UseReducer from './Hooks/UseReducer';
// import UseMemo from './Hooks/UseMemo';
// import Final from './Final';
// import {Link,Route,Routes} from 'react-router-dom';
// import ExpenseMain from "./Expense/ExpenseMain";

function App() {
  return (
    <>

    {/* <NavBar/>  Function Component */}
    {/* <ClassComp/>  class Component */}
    {/* <LifeCycle/> ' Life cycle of react */}
    {/* <Life/>  */}

{/* ========HOOKS============ */}

    {/* <UseState/>  */}
    {/* <Useeffect/> */}
    {/* <UseContextMain/> */}
    {/* <UseRef/> */}
    {/* <UseReducer/> */}
    {/* <UseMemo/> */}
   
{/* ========HOOKS============ */}

{/* ==============AXIOS=============== */}
    
    {/* <AxiosCoM/> */}
    {/* <AxiosPost/> */}
    {/* <ParentFile/> */}
    {/* <Form/> */}
    {/* <FormData/> */}
    {/* <Test/> */}
    {/* <Texttask/> */}
    {/* CRUD-AXIOS */}

{/* ==============AXIOS=============== */}


    {/* remove this if not work ROUTE-A */}
    {/* <RouterA/> */}
    <RouterB/> 

    {/* //Cred opration  */}
     {/* <div className='main'>
      <h2 className='main-header'>React CRUD Operation:</h2>
      <button><Link to={'/create'}>Create Operation</Link></button>
      <div>
      <Routes>
      <Route exact path='/create' element={<Create/>} />
      <Route exact path='/read' element={<Read/>} />
      <Route exact path='/update' element={<Update/>} />
      </Routes>
      </div>
      </div> */}
  
{/* =======Project======== */}
    {/* <Final/> */}
    {/* <SPO/> */}
 {/* <ExpenseMain/> */}
{/* =======Project======== */}

      {/* <Main/> */}
      {/* <ParentForm/> */}
    {/* <UseCounterMain/> */}
    </>


  );
}

export default App;
