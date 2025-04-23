import {  useParams } from "react-router-dom"
import  Axios  from "axios"
import { useEffect, useState } from "react"
const UsersFrom=()=>{
const [users,setUsers]=useState(null)
const {_id}=useParams()
const fetchData=async()=>{
    const {data}=await Axios.get(`http://localhost:7002/api/users/${_id}`)
    setUsers(data)
}
useEffect(()=>{
 fetchData()
},[_id])

if(!users){
     return<h1>loading...</h1>
}
return(<>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
<div style={{border:"solid",borderColor:"black",height:"60vh",width:"30vw",display:"flex",alignItems:"center", justifyContent:"center",borderRadius:"15px",boxShadow:"0 0 3px #ff0080 ", borderColor:"#ff0080", flexDirection:"column", gap:"10px",fontFamily:"Winky Sans, sans-serif"}}> 
    <h1>{users.name}</h1>
    <br/>
    <br/>
    <h5 style={{color:" #ff0080 "}}>user name:{users.userName}</h5>
    <h5 style={{color:" #ff0080 "}}>address:{users.address}</h5>
    <h5 style={{color:" #ff0080 "}}>phone:{users.phone}</h5>
    <h5 style={{color:" #ff0080 "}}>email:{users.email}</h5>
    </div>
</div>
</>)
}
export default UsersFrom