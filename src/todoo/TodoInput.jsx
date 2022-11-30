import { useState } from "react";

export default function TodoInput({addTodo}) {
const [todo,setTodo] = useState("");

  return (
    <div >
      <input onChange={(e)=>setTodo(e.target.value)}></input>
      <button onClick={()=>{
        addTodo(todo)
      }}>Add Todo</button>
    </div>
  );
}
