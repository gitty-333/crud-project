import { useState } from "react"
import Axios from "axios"
import { useNavigate } from "react-router-dom"
const AddUsers=()=>{
    const [name,setName]=useState("")
    const [userName,setUserName]=useState("")
    const [email,setemail]=useState("")
    const [address,setaddress]=useState("")
    const [phone,setPhone]=useState("")
    const navigate=useNavigate()
    const SubmitFrom=async(e)=>{
        e.preventDefault()
        await Axios.post("http://localhost:7002/api/users",{name,userName,email,address,phone})
        setName("")
        setUserName("")
        setemail("")
        setaddress("")
        setPhone("")
        navigate("/users")
    }
return(<>
<br/> <br/>
<div style={{display:"flex", alignItems:"center", justifyContent:"center",height:"90vh", width:"100vw",flexDirection:"column",gap:"5vh"}}>
    <h1 style={{fontFamily:"Winky Sans, sans-serif"}}>add user</h1>
    <div style={{border:"solid",borderColor:"black",height:"60vh",width:"30vw",display:"flex",alignItems:"center", justifyContent:"center",borderRadius:"15px",boxShadow:"0 0 3px #ff0080 ", borderColor:"#ff0080"}}> 
        <form onSubmit={SubmitFrom} style={{display:"flex",flexDirection:"column",gap:"3vh",alignItems:"center", justifyContent:"center"}}>
        <input  className="inputU" required={true} onChange={(e)=>{setName(e.target.value)}} placeholder="insert name" ></input>
        <input  className="inputU" required={true} onChange={(e)=>{setUserName(e.target.value)}} placeholder="insert user name"></input>
        <input  className="inputU" onChange={(e)=>{setemail(e.target.value)}} placeholder="insert email" ></input>
        <input  className="inputU" onChange={(e)=>{setaddress(e.target.value)}} placeholder="insert address"></input>
        <input  className="inputU" required={true} onChange={(e)=>{setPhone(e.target.value)}} placeholder="insert phone"></input>        
        <button className="saveU" type="submit" disabled={name===""||userName===""||phone===""}>send</button>
        </form>
    </div>
</div>
</>)
}
export default AddUsers