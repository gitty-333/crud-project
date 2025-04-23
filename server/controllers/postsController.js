const Posts=require("../models/Posts")
//קבלת כל הפוסטים
const getAllPosts=async(req,res)=>{
    const posts=await Posts.find().sort({_id:1})
    res.json(posts)
}
//הוספת פוסטס
const addPosts=async (req,res)=>{
   const{title,body}=req.body
   if(!title){return res.status(400).json({"message":"title is required"})}
   const posts=await Posts.create({title,body})
   res.json(posts)
}
//מחיקת פוסטס
const deletePosts=async (req,res)=>{
    const{_id}=req.body
    const posts=await Posts.findById(_id).exec()
    if(!posts){ return res.status(400).json({"message":"no posts found!"})}
    await posts.deleteOne()
    res.json(`Posts '${posts.name}' id '${posts._id}' deleted`)
}
//עדכון פוסטס
const updatePosts=async(req,res)=> {
    const {title,body}=req.body
    if(!title) return res.status(400).json({"message":"title is requierd"})
    const{_id}=req.params    
    const posts=await Posts.findById(_id)
    if(!posts){ return res.status(400).json({"message":"no posts found!"})}
    posts.title=title
    posts.body=body
    await posts.save();
    res.json(posts)
}
// קבלת פוסטס בודד
const getPostsByID=async(req,res)=>{
    const{_id}=req.params
    const posts=await Posts.findById(_id)
    if(!posts){ return res.status(400).json({"message":"no posts found!"})}
    res.json(posts)
}
module.exports={getAllPosts,addPosts,deletePosts,updatePosts,getPostsByID}