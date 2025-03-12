import React, {useEffect, useState } from 'react'

export default function TodoApp() {
    const [input,setInput] = useState("");
    const [tasks, setTasks] = useState([]);
    // const [loadTasks, setLoadTasks] = useState(false);
    // const [itemss,setItemss] =useState([]);


    const addTask = () => {
        if(input.length === 0){
            alert("Task cannot be empty");
            return;
        }
        if (input.trim() === "") return; // Prevent empty tasks
        setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
        setInput(""); 
        localStorage.setItem("tasks",input);
      };

      const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
      };
      const toggleComplete = (id) => {
        setTasks(
          tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
          )
        );
      };

      useEffect(()=>{
        const LocalTask = localStorage.getItem("tasks");
        if(LocalTask){
            // console.log(LocalTask);
            // setTasks(JSON.parse(tasksFromStorage));
        }
      })
  return (
    <div>



<div className="container">
        <h2>To-Do List</h2>
        <div className="input-container">
            <input type="text" id="taskInput" placeholder="Add a new task..." onChange={(e)=>{setInput(e.target.value)}} value={input}/>
            <button onClick={addTask}>Add Task</button>
        </div>
        <ul id="taskList">
            {tasks.length === 0? <p>No tasks to show.</p> : null}
        {
        tasks.map((task)=>{
            return (
                <div key={task.id} className='taskitems'>
                    <li>
                <input type='checkbox'onClick={() => toggleComplete(task.id)}></input></li>
                <li key={task.id} style={{textDecoration : task.completed ? "line-through": "none",padding:"5px",margin:"10px"}}>{task.text} </li> 
                    <li><button onClick={() => deleteTask(task.id)}>Delete</button></li>
                </div>
            )
        })
    }
        </ul>
    </div>
    </div>
  )
}
