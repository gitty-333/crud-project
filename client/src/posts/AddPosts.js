import { useState } from "react"
import Axios from "axios"
import { useNavigate } from "react-router-dom"
const AddPosts=()=>{
    const [title,setTitle]=useState("")
    const [body,setBody]=useState("")
    const navigate=useNavigate()
    const SubmitFrom=async(e)=>{
        e.preventDefault()
        await Axios.post("http://localhost:7002/api/posts",{title,body})
        setTitle("")
        setBody("")
        navigate('/posts')
    }
return(<>
<br/> <br/>
<div style={{display:"flex", alignItems:"center", justifyContent:"center",height:"90vh", width:"100vw",flexDirection:"column",gap:"5vh"}}>
    <h1 style={{fontFamily:"Winky Sans, sans-serif"}}>add post</h1>
    <div style={{border:"solid",borderColor:"black",height:"60vh",width:"30vw",display:"flex",alignItems:"center", justifyContent:"center",borderRadius:"15px",boxShadow:"0 0 3px #ff0080 ", borderColor:"#ff0080"}}> 
        <form onSubmit={SubmitFrom} style={{display:"flex",flexDirection:"column",gap:"5vh",alignItems:"center", justifyContent:"center"}}>
        <input className="input"  required={true} onChange={(e)=>{setTitle(e.target.value)}} placeholder="insert title" ></input>
        <input className="input"  onChange={(e)=>{setBody(e.target.value)}} placeholder="insert body" ></input>
        <button className="save" type="submit" disabled={title===""}>send</button>
        </form>
    </div>
</div>
</>)
}
export default AddPosts
