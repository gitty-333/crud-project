import  Axios  from "axios"
import {  Link, useNavigate } from "react-router-dom"
import { MdDelete } from "react-icons/md";
import { RiPencilFill } from "react-icons/ri";
import "../style/elements.css"
import "../style/buttons.css"
const PostsItem=({posts,fetchData})=>{
    const navigate=useNavigate()
    const deletePost=async()=>{
    await Axios.delete("http://localhost:7002/api/posts",{
            data:{_id:posts._id}
             })
             fetchData()
    }
return(<>
<div className="onElement">
     <Link className="link" to={`/posts/${posts._id}`}><h1>{posts.title}</h1></Link>
     <div style={{display:"flex",gap:"25px"}}>
     <button className="button" style={{color: "red"}} onClick={deletePost}><MdDelete/></button>
     <button className="button" style={{color: "green"}} onClick={()=>{navigate('/posts/updatePost',{state:{posts}})}}><RiPencilFill /></button>
    </div>
</div>
</>)
}
export default PostsItem
