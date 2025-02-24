// import React, { use, useState } from 'react'
// import { Route, Routes } from 'react-router-dom'
// import Fs from './Fs'
// import Ss from './Ss'

// // import Fs from './Fs'

// export default function Fmain() {
//     const [stage,setState] = useState(1)
//     // const [dis,setDis] =useState(false)
//     const [formData,setFormData] = useState({
//         name:'',
//         email:'',
//         phone:''
//     })

// function stageNext(){
//     setState(stage+1);
// }

// function stagePrev(){
//     setState(stage-1);
// }
    
//     //   <button onClick={(e)=>{setState(stage-1)}} disabled = {true}>prev</button>
//     // <button onClick={(e)=>{setState(stage+1)}} disabled={dis} >Next</button>
//   return (
//     <div>
//         <h1>Form</h1>
//         <h2>Stage: {stage}</h2>
        
   
    
//     {
//         stage === 1 && (
//             <>
//             <Fs stageNext={stageNext} stagePrev={stagePrev}  stage={stage} setState={setState}/>
//             </>
//         ) 
//     }
//     {
//         stage === 2 && (
//             <>
//             <Ss/>
//             </>
//         )
//     }
  
        





//         {/* <Routes>
//       <Route path='/mf' element={<Fs/>}/>
//         </Routes> */}
//     </div>
//   )
// }
