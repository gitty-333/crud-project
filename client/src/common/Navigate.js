import { NavLink } from "react-router-dom"
import "../style/styleMenu.css"
const Navigate=()=>{
return<div className="navigate" style={{display:"flex" , backgroundColor:"#ff0080", width:"100%" , height: "10vh", alignItems:"center", justifyContent:"center", gap:"6%", boxShadow:"0px 0px 5px",position:"fixed"}}>  
<NavLink to="/todos">Todos</NavLink>
<NavLink to="/posts">Posts</NavLink>
<NavLink to="/users">Users</NavLink>
</div>
}
export default Navigate