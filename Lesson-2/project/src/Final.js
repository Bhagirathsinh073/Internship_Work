import React, { useState } from 'react'

export default function Final() {

    // function Sum (...num){
    //     return num.reduce((total,num)=>total + num,0)
    // }
    // const  oneTofive = [1,2,3,4,5];
    // const onetoTen = [...oneTofive,6,7,8,9,10];
    // var address = {
    //     street: "123 Main St",
    //     city: "New York",
    //     state: "NY",
    //     zip: "10001"
    // };

    // const isSummer = false;
// const fruits = ["apple", "banana", ...(isSummer ? ["watermelon"] : ["None"])];
// ['apple', 'banana']

    // address ={...address,country: "United"}
    // console.log(oneTofive);
    // console.log(onetoTen);
    // console.log("Sum of oneTofive: ", Sum(...oneTofive));

    // const Mix =["A",...oneTofive,"B","C","D",...onetoTen];
    // console.log(Mix);
    // console.log(address.country);
    // console.log(fruits);



    // <button onClick={()=>{setIsShow(!isShow)}}>Click to Show/Hide</button>
    // {
    //     isShow ? <ShowDiv/> : <HideDiv/>
    // } 
    const [input,setInput] = useState("")
    const [task,setTask] = useState(["Apple","Google"]);
    const regex = /\s{2,}/;
    // const regex = /^[a-zA-Z0-9 ]+$/; // Allows only letters, numbers, and spaces
    // const words = input.trim().split(" ");
    const btnStyle = {
        backgroundColor: "#dc3545",
        border: "none",
        color: "white",
        padding: "5px 10px",
        borderRadius: "5px",
        cursor: "pointer",
        marginLeft:"20px"
    }
    
const addTask = () =>{
    if(input.length === 0){
        alert("enter Task");
    }else if(input.length <= 5 || input.length >= 20){
        alert("Task should be between 1-5 or 1-20 characters long");
        setInput("")
    }
    else if(input.startsWith(" ")){
        alert("black space Exist at start");
        setInput("")
    }else if(regex.test(input)){
        console.log("black space Exist at end");
    }   
    else{
        setTask([...task,input])
        setInput("")
        alert("Task Added Successfully");
    }
   
}
const deleteTask =(index)=>{
    console.log("Delete Task Index"+ index);
    // alert("Delete Task")
    const remainTask = task.filter((t,i)=>  {
        // console.log("Before Filter "+ t +" "+ i)
        // console.log("After Filter "+ t +" "+ i)
        return i!== index;
    })
    setTask(remainTask)
}
    return(
        <>
        <h1>Final </h1>
        <h2 style={{textAlign:"center"}}>Todo List</h2>
        <input 
        type="text" 
        value={input} 
        onChange={(e)=>setInput(e.target.value)}
        placeholder='Enter Your Task'
        />
        <button onClick={addTask}
        style={btnStyle}
        >Click</button>

       <div>
        <ul style={{listStyle:"none"}}>

        {
            task.map((item,index)=>{
                return(
                    <>
                    <div style={{display:"flex"}} key={index}>
                    <li >{item}</li>
                    <li style={{marginLeft:"10px"}}><button onClick={()=>{deleteTask(index)}}>Delete</button></li>
                    </div>
                    </>
                )
            })
        }
        </ul>
       </div>
       {/* passing pros  */}
       <div>
        <h2>Props</h2>
       </div>
        </>
  )
}


    //conditinal render
    // const [isShow,setIsShow] = useState(false);

    // const ShowDiv = () =>{
    //     return(
    //         <>
    //         <h1>Show Componet</h1>
    //         </>
    //     )
    // }
    // const HideDiv = () =>{
    //     return(
    //         <>
    //         <h1>Hide Componet</h1>
    //         </>
    //     )
    // }