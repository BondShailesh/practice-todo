import { useState } from "react";
import TodoInput from "./TodoInput";

export default function Todo() {
const [todo,setTodo] = useState([
  {id:1,todo:"Work hard",status:false},
  {id:2,todo:"Smart work does not exist",status:false},
]);

const addTodo =(el)=>{
  setTodo([
    ...todo,{id:todo.length+1,todo:el,status:false}
         
  ])
}
const handleStatus = (id)=>{
let data = todo.map((todo)=>{
  if(todo.id==id){
    return {...todo,status:!todo.status}
  }else{
    return todo
  }
})
setTodo(data)
}


  return (
    <div >
      <TodoInput addTodo={addTodo}/>
      {todo.map((todo)=>( 
        <div key={todo.id} style={{display:"flex",justifyContent:"space-around"}}>
        <p>{todo.todo}</p>
        <p onClick={()=>handleStatus(todo.id)} style={{cursor:"pointer",color:todo.status ? "green":"red"}}
        >{todo.status ? "Done":"Not Done"}</p>
        </div>
        ))}
    </div>
  );
}
