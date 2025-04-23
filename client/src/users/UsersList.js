import {useState,useEffect}from "react"
import {Link} from "react-router-dom"
import Axios from "axios"
import UsersItem from "./UsersItem"
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
const UsersList=()=>{
const [users,setUsers]=useState([])
const [filterUsers,setFilterUsers]=useState([])
const [searchWord,setSearchWord]=useState("")
const fetchData=async ()=>{
   const {data}=await Axios.get("http://localhost:7002/api/users")
   setUsers(data)
   setFilterUsers(data)
}
useEffect(()=>{
fetchData()
},[])
useEffect(()=>{
  const filterd=users.filter((user)=>{return user.name.includes(searchWord)|| user.userName.includes(searchWord)
   || user.email.includes(searchWord)|| user.phone.includes(searchWord)
  })
  setFilterUsers(filterd)
},[searchWord])
if(users.length===0)
return(<>
<br/> <br/>   <br/> <br/>   <br/> <br/>
<div style={{display:"flex", alignItems:"center",justifyContent:"center" , flexDirection:"column", gap:"20px"}}>
  <h1  style={{fontFamily:"Winky Sans, sans-serif"}}>users</h1>
  <Box  sx={{ position:"fixed", bottom: "50px" ,left: "50px", '& > :not(style)': { m: 1 }}}>
    <Fab component={Link} to="/users/add"
   sx={{ backgroundColor: "#ff0080", '&:hover': { backgroundColor: "#f72c91" } }} 
   aria-label="add">
       <AddIcon />
     </Fab>
   </Box>
   </div>
</>)
return(<>
<br/> <br/>   <br/> <br/>   <br/> <br/>
<div style={{display:"flex", alignItems:"center",justifyContent:"center" , flexDirection:"column", gap:"20px"}}>
  <h1  style={{fontFamily:"Winky Sans, sans-serif"}}>users</h1>
  <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
<input className="search" type="text" onChange={(e) => { setSearchWord(e.target.value) }} placeholder="search"></input>
</div>
<div style={{display:"flex",flexWrap: "wrap",gap:"20px",width:`calc(${25 * 3}vw + 55px)`}}>
<Box  sx={{ position:"fixed", bottom: "50px" ,left: "50px", '& > :not(style)': { m: 1 }}}>
     <Fab  component={Link} to="/users/add" 
   sx={{ backgroundColor: "#ff0080", '&:hover': { backgroundColor: "#f72c91" } }} 
   aria-label="add">
       <AddIcon />
     </Fab>
   </Box>
{filterUsers.map((users)=>{return <div>
<UsersItem fetchData={fetchData} users={users}/></div>})}
<br/> <br/>   <br/> <br/>   <br/> <br/>
</div>
</div>
</> )
}
export default UsersList