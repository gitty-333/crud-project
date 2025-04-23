const Todos=require("../models/Todos")
//קבלת כל הטודוז
const getAllTodos=async(req,res)=>{
    const todos=await Todos.find().sort({_id:1})
    res.json(todos)
}
//הוספת הטודוז
const addTodos=async (req,res)=>{
   const{title,tags,completed}=req.body
   if(!title){return res.status(400).json({"message":"title is required"})}
   const todos=await Todos.create({title,tags,completed})
   res.json(todos)
}
//מחיקת הטודוז
const deleteTodos=async (req,res)=>{
    const{_id}=req.body
    const todos=await Todos.findById(_id).exec()
    if(!todos){ return res.status(400).json({"message":"no todos found!"})}
    await todos.deleteOne()
    res.json(`Todos '${todos.name}' id '${todos._id}' deleted`)
}
//עדכון הטודוז
const updateTodos=async(req,res)=> {
    const {title,tags,completed}=req.body
    if(!title) return res.status(400).json({"message":"title is requierd"})
    const{_id}=req.params
    const todos=await Todos.findById(_id)
    if(!todos){ return res.status(400).json({"message":"no todos found!"})}
    todos.title=title
    todos.tags=tags
    todos.completed=completed
    await todos.save();
    res.json(todos)
}
//עדכון האם המשימה בוצעה
const updateTodosComleted=async(req,res)=> {
    const {title,tags,completed}=req.body
    const{_id}=req.params
    const todos=await Todos.findById(_id)
    if(!todos){ return res.status(400).json({"message":"no todos found!"})}
    todos.title=title
    todos.tags=tags
    todos.completed=completed
    res.json(todos)
}
// קבלת טודוז בודד
const getTodosByID=async(req,res)=>{
    const{_id}=req.params
    const todos=await Todos.findById(_id)
    if(!todos){ return res.status(400).json({"message":"no todos found!"})}
    res.json(todos)
}
module.exports={getAllTodos,addTodos,deleteTodos,updateTodos,getTodosByID,updateTodosComleted}