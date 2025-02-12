import './App.css';
// import AxiosCoM from './Componts/AxiosCom';
// import AxiosPost from './Componts/AxiosPost';
import { BrowserRouter} from 'react-router-dom';
// import ClassComp from './Componts/ClassComp';
// import LifeCycle from './Componts/LifeCycle';
import UseState from './Hooks/UseState';
import Useeffect from './Hooks/Useeffect';
import RouterB from './Componts/RouterB';
function App() {
  return (
    <>
    {/* <NavBar/>  Function Component */}
    {/* <ClassComp/>  class Component */}
    {/* <LifeCycle/> ' Life cycle of react */}
    <UseState/> 
    <Useeffect/>
    <BrowserRouter>
    <RouterB/> 
    </BrowserRouter>
    {/* <AxiosCoM/> */}
    {/* <AxiosPost/> */}
    </>
  );
}

export default App;
