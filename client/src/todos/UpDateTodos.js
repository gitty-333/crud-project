import { useState } from "react"
import { useLocation } from "react-router-dom";
import Axios from "axios"
import { useNavigate } from "react-router-dom"
import "../style/inputs.css"
const UpDateTodos=()=>{
    const navigate=useNavigate()
    const location = useLocation()
    const todos = location.state?.todos
    const [title,setTitle]=useState(todos.title)
    const [tags,setTags]=useState(todos.tags)
  
  const update=async(e)=>{
      e.preventDefault()
      await Axios.put(`http://localhost:7002/api/todos/${todos._id}`,{_id:todos._id,title:title===""?todos.title:title,tags:tags[0]===""?todos.tags:tags,completed:todos.completed})
      navigate('/todos')
    }
return(<>
<br/><br/>
 <div style={{display:"flex", alignItems:"center", justifyContent:"center",height:"90vh", width:"100vw",flexDirection:"column",gap:"5vh"}}>
 <h1 style={{fontFamily:"Winky Sans, sans-serif"}}>update todos</h1>
   <div style={{border:"solid",borderColor:"black",height:"60vh",width:"30vw",display:"flex",alignItems:"center", justifyContent:"center",borderRadius:"15px",boxShadow:"0 0 3px #ff0080 ", borderColor:"#ff0080"}}> 
     <form  style={{display:"flex",flexDirection:"column",gap:"5vh",alignItems:"center", justifyContent:"center"}} onSubmit={update}>
       <input className="input" onChange={(e)=>{setTitle(e.target.value)}} placeholder={`title: ${title}`}></input>
        <input className="input" onChange={(e)=>{setTags(e.target.value.split(","))}} placeholder={`tags: ${tags}`}></input>
        <button className="save" type="submit">עדכן</button>
     </form>
 </div>
</div>
</>)

}

export default UpDateTodos