import React, { createContext, useState } from 'react'
import ChildA from './ChildA'

const Data11 = createContext()
const Data12 = createContext()
 const Data13 = createContext()
 const Data14 = createContext()
 
export default function Usecontext_Main() {

const [user,setUser] = useState("Bhagirathsinh");
const [age,setAge] = useState(23);
const [lastname,setLastName] = useState("Nakum");
 function fun1(){
    setUser("Poojan");
    setAge(25);
    setLastName("Pathak");
}
  return (
    <div>
      <>
      <h1>Main File For Render</h1>
      <Data11.Provider value={user}>
      <Data12.Provider value={age}>
        <Data13.Provider value={fun1}>
            <Data14.Provider value={lastname}>
                <ChildA/>
            </Data14.Provider>
        </Data13.Provider>
      </Data12.Provider>
      </Data11.Provider>
      </>
    </div>
  )
}

export {Data11,Data12,Data13,Data14}