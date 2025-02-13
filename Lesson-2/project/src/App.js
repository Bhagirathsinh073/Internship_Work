/* eslint-disable react/jsx-no-comment-textnodes */
import './App.css';
// import AxiosCoM from './Componts/AxiosCom';
// import AxiosPost from './Componts/AxiosPost';
import { BrowserRouter} from 'react-router-dom';
// import ClassComp from './Componts/ClassComp';
// import LifeCycle from './Componts/LifeCycle';
import UseState from './Hooks/UseState';
import Useeffect from './Hooks/Useeffect';
import UseContext_Main from './Hooks/UseContext/Usecontext_Main';
// import RouterB from './Componts/RouterB';
function App() {
  return (
    <>
    {/* <NavBar/>  Function Component */}
    {/* <ClassComp/>  class Component */}
    {/* <LifeCycle/> ' Life cycle of react */}
    <UseState/> 
    <Useeffect/>
    <UseContext_Main/>
    <BrowserRouter>
    {/* <RouterB/>  */}
    </BrowserRouter>
    {/* <AxiosCoM/> */}
    {/* <AxiosPost/> */}
    </>
  );
}

export default App;
