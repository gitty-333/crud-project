import  Axios  from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "../style/elements.css"
import "../style/buttons.css"
import { MdDelete } from "react-icons/md";
import { RiPencilFill } from "react-icons/ri";
import { IoMdCheckmark } from "react-icons/io";
const TodosItem=({todos,fetchData})=>{
    const navigate=useNavigate()
    const [completed,setCompleted]=useState(todos.completed)
    const deleteTodo=async()=>{
     await Axios.delete("http://localhost:7002/api/todos",{
            data:{_id:todos._id}
             })
       fetchData()
    }
    const isCompleted=async()=>{
       const upDateCompleted=!completed
       setCompleted(upDateCompleted)
       await Axios.put(`http://localhost:7002/api/todos/completed/${todos._id}`)
        fetchData()
    }
return(<>
<div className="onElement">
<Link className="link" to={`/todos/${todos._id}`}><h1>{todos.title}</h1></Link>
 <div style={{display:"flex",gap:"25px"}}>
    <button style={{color: "red"}} className="button" onClick={deleteTodo}><MdDelete /></button>
    <button className="button"  onClick={isCompleted}  style={{color:completed?"white": "blue",backgroundColor:completed&&"blue"}}><IoMdCheckmark /></button>
    <button style={{color: "green"}} className="button" onClick={()=>{navigate("/todos/UpdateTodos",{ state: { todos: todos } })}}><RiPencilFill /></button>
 </div> 
</div>
</>)
}
export default TodosItem
