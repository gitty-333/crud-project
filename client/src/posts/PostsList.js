import {useState,useEffect}from "react"
import {Link} from "react-router-dom"
import PostsItem from "./PostsItem"
import Axios from "axios"
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
const PostsList=()=>{
const [posts,setPosts]=useState([])
const [filterPosts,setFilterPosts]=useState([])
const [searchWord,setSearchWord]=useState("")

const fetchData=async ()=>{
   const {data}=await Axios.get("http://localhost:7002/api/posts")
   setPosts(data)
   setFilterPosts(data)
}
useEffect(()=>{
fetchData()
},[])
useEffect(()=>{
  const filterd=posts.filter((post)=>{return post.title.includes(searchWord)})
   setFilterPosts(filterd)
},[searchWord])
if(posts.length===0)return(<>
<br/> <br/>   <br/> <br/>   <br/> <br/>
<div style={{display:"flex", alignItems:"center",justifyContent:"center" , flexDirection:"column", gap:"20px"}}>
    <h1  style={{fontFamily:"Winky Sans, sans-serif"}}>posts</h1>
  <Box sx={{ position:"fixed", bottom: "50px" ,left: "50px", '& > :not(style)': { m: 1 }}}>
   <Fab  component={Link} to="/posts/add" 
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
    <h1  style={{fontFamily:"Winky Sans, sans-serif"}}>posts</h1>
    <input className="search" type="text" onChange={(e) => { setSearchWord(e.target.value) }} placeholder="search"></input>
   <div style={{display:"flex",flexWrap: "wrap",gap:"20px",width:`calc(${25 * 3}vw + 55px)`}}>
     {filterPosts.map((posts)=>{return <div>
      <PostsItem fetchData={fetchData} posts={posts}/>
      </div>})}
    <Box  sx={{ position:"fixed", bottom: "50px" ,left: "50px", '& > :not(style)': { m: 1 }}}>
      <Fab component={Link} to="/posts/add" 
       sx={{ backgroundColor: "#ff0080", '&:hover': { backgroundColor: "#f72c91" } }} 
       aria-label="add">
           <AddIcon />
         </Fab>
       </Box>
   </div>
<br/> <br/>   <br/> <br/>   <br/> <br/>
</div>
</> )
}
export default PostsList