import  Axios  from "axios"
import { Link, useNavigate } from "react-router-dom"
import "../style/elements.css"
import "../style/buttons.css"
import { MdDelete } from "react-icons/md";
import { RiPencilFill } from "react-icons/ri";
const UsersItem=({users,fetchData})=>{
    const navigate=useNavigate()
    const deleteUser=async()=>{
     await Axios.delete("http://localhost:7002/api/users",{
            data:{_id:users._id}
             })
       fetchData()
    }
return<>
<div className="onElement">
<Link className="link" to={`/users/${users._id}`}><h1>{users.name}</h1></Link>
<div style={{display:"flex",gap:"25px"}}>
 <button style={{color: "red"}}  className="button" onClick={deleteUser}><MdDelete/></button>
 <button style={{color: "green"}}  className="button" onClick={()=>{navigate('/users/updateUser',{state:{users}})}}><RiPencilFill /></button>
 </div>
 </div>
</>
}
export default UsersItem
