import {useState,useEffect}from "react"
import {Link} from "react-router-dom"
import Axios from "axios"
import TodosItem from "./TodosItem"
import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
const TodosList=()=>{
const [todos,setTodos]=useState([])
const [filterTodos,setFilterTodos]=useState([])
const [searchWord,setSearchWord]=useState("")
const fetchData=async ()=>{
   const {data}=await Axios.get("http://localhost:7002/api/todos")
   setTodos(data)
   setFilterTodos(data)
}
useEffect(()=>{
fetchData()
},[])
useEffect(()=>{
  const filterd=todos.filter((todo)=>{return todo.title.includes(searchWord)})
   setFilterTodos(filterd)
},[searchWord])
if(todos.length===0)
return(<>
<br/> <br/>   <br/> <br/>   <br/> <br/>
<div style={{display:"flex", alignItems:"center",justifyContent:"center" , flexDirection:"column", gap:"20px"}}>
<h1  style={{fontFamily:"Winky Sans, sans-serif"}}>todos</h1>
<Box  sx={{ position:"fixed", bottom: "50px" ,left: "50px", '& > :not(style)': { m: 1 }}}>
<Fab  component={Link} to="/todos/add" 
sx={{ backgroundColor: "#ff0080", '&:hover': { backgroundColor: "#f72c91" } }} 
aria-label="add">
<AddIcon />
  </Fab>
</Box>
</div>
</>)
return (<>
<br/> <br/>   <br/> <br/>   <br/> <br/>
<div style={{display:"flex", alignItems:"center",justifyContent:"center" , flexDirection:"column", gap:"20px"}}>
  <h1  style={{fontFamily:"Winky Sans, sans-serif"}}>todos</h1>
  <input className="search" type="text" onChange={(e) => { setSearchWord(e.target.value) }} placeholder="search"></input>
  <div style={{display:"flex",flexWrap: "wrap",gap:"20px",width:`calc(${25 * 3}vw + 55px)`}}>
    {filterTodos.map((todos) => {return <div>
      <TodosItem fetchData={fetchData} todos={todos}/>
      </div>})}
    </div>
    <Box  sx={{ position:"fixed", bottom: "50px" ,left: "50px", '& > :not(style)': { m: 1 }}}>
  <Fab  component={Link} to="/todos/add" 
sx={{ backgroundColor: "#ff0080", '&:hover': { backgroundColor: "#f72c91" } }} 
aria-label="add">
    <AddIcon />
  </Fab>
</Box>
<br/> <br/>   <br/> <br/>   <br/> <br/>
</div>
</>)
}
export default TodosList