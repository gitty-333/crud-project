import { useState } from "react"
import { useLocation } from "react-router-dom";
import Axios from "axios"
import { useNavigate } from "react-router-dom"
import "../style/inputsUser.css"
const UpdateUser=()=>{
     const navigate=useNavigate()
     const location = useLocation()
     const users = location.state?.users
     const[name,setName] =useState(users.name)
     const[userName,setUserName]=useState(users.userName)
     const[email,setEmail]=useState(users.email)
     const[address,setAddress]=useState(users.address)
     const[phone,setPhone]=useState(users.phone)
     const update=async(e)=>{
        e.preventDefault()
        await Axios.put(`http://localhost:7002/api/users/${users._id}`,{_id:users._id,name:name===""?users.name:name,userName:userName===""?users.userName:userName,email:email===""?users.email:email,address:address===""?users.address:address,phone:phone===""?users.phone:phone})
        navigate('/users')
    }
return(<>
<br/>  <br/>
<div style={{display:"flex", alignItems:"center", justifyContent:"center",height:"90vh", width:"100vw",flexDirection:"column",gap:"5vh"}}>
<h1 style={{fontFamily:"Winky Sans, sans-serif"}}>update user</h1>
  <div style={{border:"solid",borderColor:"black",height:"60vh",width:"30vw",display:"flex",alignItems:"center", justifyContent:"center",borderRadius:"15px",boxShadow:"0 0 3px #ff0080 ", borderColor:"#ff0080"}}> 
     <form style={{display:"flex",flexDirection:"column",gap:"3vh",alignItems:"center", justifyContent:"center"}} onSubmit={update}>
     <input className="inputU"  onChange={(e)=>{setName(e.target.value)}} placeholder={`name: ${users.name}` }></input>
     <input className="inputU"  onChange={(e)=>{setUserName(e.target.value)}} placeholder={`user name: ${users.userName}`}></input>
     <input className="inputU"  onChange={(e)=>{setEmail(e.target.value)}} placeholder={`email: ${users.email}`} ></input>
     <input className="inputU"  onChange={(e)=>{setAddress(e.target.value)}} placeholder={`address: ${users.address}`}></input>
     <input className="inputU"  onChange={(e)=>{setPhone(e.target.value)}} placeholder={`phone: ${users.phone}`}></input>        
     <button className="saveU"  type="submit">עדכן</button>
     </form>
 </div>
</div>
</>)
}
export default UpdateUser