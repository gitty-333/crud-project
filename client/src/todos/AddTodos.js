import { useState } from "react"
import Axios from "axios"
import { useNavigate } from "react-router-dom"
import "../style/inputs.css"
const AddTodos=()=>{
    const [title,setTitle]=useState("")
    const [tags,setTags]=useState([])
    const navigate=useNavigate()
    const SubmitFrom=async(e)=>{
        e.preventDefault()
        await Axios.post("http://localhost:7002/api/todos",{title,tags})
        setTitle("")
        setTags([])
        navigate('/todos')
    }
return(<>
<br/> <br/>
<div style={{display:"flex", alignItems:"center", justifyContent:"center",height:"90vh", width:"100vw",flexDirection:"column",gap:"5vh"}}>
    <h1 style={{fontFamily:"Winky Sans, sans-serif"}}>add todos</h1>
    <div style={{border:"solid",borderColor:"black",height:"60vh",width:"30vw",display:"flex",alignItems:"center", justifyContent:"center",borderRadius:"15px",boxShadow:"0 0 3px #ff0080 ", borderColor:"#ff0080"}}> 
    <form onSubmit={SubmitFrom} style={{display:"flex",flexDirection:"column",gap:"5vh",alignItems:"center", justifyContent:"center"}}>
        <input required={true} onChange={(e)=>{setTitle(e.target.value)}} placeholder="insert title" className="input"></input>
        <input  onChange={(e)=>{setTags(e.target.value.split(","))}} placeholder="insert tags" className="input"></input>
        <button className="save" disabled={title===""} type="submit">send</button>
    </form>  
    </div>
</div>
</>)
}
export default AddTodos