import { useState } from "react"
import { useLocation } from "react-router-dom";
import Axios from "axios"
import { useNavigate } from "react-router-dom"
const UpdatePost=()=>{
    const navigate=useNavigate()
    const location = useLocation()
    const posts = location.state?.posts
    const [title,setTitle]=useState(posts.title)
    const [body,setBody]=useState(posts.body)
    const update=async(e)=>{
        e.preventDefault()
        await Axios.put(`http://localhost:7002/api/posts/${posts._id}`,{_id:posts._id,title:title===""?posts.title:title,body:body===""?posts.body:body})
        navigate('/posts')
  }
return(<>
<br/> <br/>
<div style={{display:"flex", alignItems:"center", justifyContent:"center",height:"90vh", width:"100vw",flexDirection:"column",gap:"5vh"}}>
  <h1 style={{fontFamily:"Winky Sans, sans-serif"}}>update post</h1>
  <div style={{border:"solid",borderColor:"black",height:"60vh",width:"30vw",display:"flex",alignItems:"center", justifyContent:"center",borderRadius:"15px",boxShadow:"0 0 3px #ff0080 ", borderColor:"#ff0080"}}> 
    <form style={{display:"flex",flexDirection:"column",gap:"5vh",alignItems:"center", justifyContent:"center"}} onSubmit={update}>
       <input className="input"  onChange={(e)=>{setTitle(e.target.value)}} placeholder={`title: ${posts.title}`}></input>
        <input className="input" onChange={(e)=>{setBody(e.target.value)}} placeholder={`body: ${posts.body}`}></input>
       <button className="save" type="submit">send</button>
    </form>
  </div>
</div>
</>)
}
export default UpdatePost