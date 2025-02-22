import React, { useState } from 'react'

// Description :
// Create a "todo" app with the following criteria. The user should able to add and remove todo items. Starter code is provided
export default function C2() {
    const [input,setInput] = useState("");
    const [todos, setTodos] = useState([]);
    const addItem = ()=>{
        setTodos([...todos,input]);
        // setInput("");
        console.log(todos);
    }
 return(
    <>
    <input type='text' placeholder='Enter' value={input} onChange={(e)=>{setInput(e.target.value)}}/>
    <button onClick={addItem}>ADD</button>
    <div>

    <ul>
        {
            todos.map((items,i)=>{
                return <li key={i}>{items}</li>
            })
        }
    </ul>
        </div>
    </>
 )    
}
