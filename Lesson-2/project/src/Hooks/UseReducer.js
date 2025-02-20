import React, { useReducer } from 'react'

const intialTodo = [
    {
        id:1,
        title:"React",
        description: 'React is a JavaScript library for building user interfaces.', 
        complete :false
    },
    {
        id:2,
        title:"React Node",
        description: 'React is a JavaScript library for building user interfaces.', 
        complete :true
    }
];

const reducer = (state,action) =>{
    // console.log(action)
    // console.log(state)
    console.log(action.payload)
    console.log(action.nakum)
    switch (action.type) {
        case "Complete":
            return state.map((todo)=>{
                if(todo.id === action.id){
                    return {...todo, complete:!todo.complete,title:todo.title = "Node JS", description :todo.description = "Done with"}
                }else{
                    return todo
                }
            });
                
        default:
            return state;
    }
}
export default function UseReducer() {
    //useReducer(Fucntion,initial value)
    //useReducer(Fucntion- reducer(),initial value--initialtodo)
    const  [todos,dispatch] = useReducer(reducer,intialTodo);

    const handleComplete = (todo) => {
        dispatch({type:"Complete", id:todo.id,payload : "complete B",nakum : {...intialTodo}});
    }
  return (
    <div>
      <h1>UseReducer</h1>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}<br/>
            {todo.description}
          </label>
        </div>
      ))}
    </div>
  )
}
