import {  useParams } from "react-router-dom"
import  Axios  from "axios"
import { useEffect, useState } from "react"
const PostsFrom=()=>{
const [posts,setPosts]=useState(null)
const {_id}=useParams()
const fetchData=async()=>{
    const {data}=await Axios.get(`http://localhost:7002/api/posts/${_id}`)
    setPosts(data)
}
useEffect(()=>{
 fetchData()
},[_id])

if(!posts){
     return<h1>loading...</h1>
}
return(<>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
    <div style={{border:"solid",borderColor:"black",height:"60vh",width:"30vw",display:"flex",alignItems:"center", justifyContent:"center",borderRadius:"15px",boxShadow:"0 0 3px #ff0080 ", borderColor:"#ff0080", flexDirection:"column", gap:"10px",fontFamily:"Winky Sans, sans-serif"}}> 
        <h1>{posts.title}</h1>
        <h3 style={{color:" #ff0080 "}}>body:{posts.body}</h3>
    </div>
</div>
</>)
}
export default PostsFrom