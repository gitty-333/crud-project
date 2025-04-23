const User=require("../models/User")
//כל המשתמשים
const getAllUsers=async(req,res)=>{
    const user=await User.find({},{password:0}).sort({_id:1})
    res.json(user)
}
//הוספת משתמש
const addUser=async (req,res)=>{
    const{name,userName,email,address,phone}=req.body
    if(!name||!userName||!address){return res.status(400).json({"message":"name userName and address are required"})}
   const user=await User.create({name,userName,email,address,phone})
   res.json(user)
 }
//מחיקת משתמש
const deleteUser=async (req,res)=>{
    const{_id}=req.body
    const user=await User.findById(_id).exec()
    if(!user){ return res.status(400).json({"message":"no user found!"})}
    await user.deleteOne()
   res.json( `User: ${user.name} id: ${user._id} deleted`)
}
//עדכון משתמש
const updateUser=async(req,res)=> {
    const {name,userName,email,address,phone}=req.body
    if(!userName||!name||!address) {return res.status(400).json({message:"name userName and address are required"})}
    const{_id}=req.params    
    const users=await User.findById(_id)
    if(!users){ return res.status(400).json({"message":"no user found!"})}
    users.name=name
    users.userName=userName
    users.email=email
    users.address=address
    users.phone=phone
    await users.save();
    res.json(users)
}
// const updateUser= async(req,res)=>{
//     const {_id,userName,name,email,phone,address}=req.body
//     const theSame= await user.findOne({userName:userName})

//     if(!phone||!userName||!name)
//         {
//         return res.status(400).json({message:'phone, userName, name are requier'})
//     }
   
//         const newUser=await user.findById(_id)
//         if(!newUser){    
//              return res.status(404).json({message:'user no faund'})
//         }
//         if(theSame&&userName!=newUser.userName){
//             return res.status(409).json({message: "user name exsist"})
//         }
//         newUser.userName=userName
//         newUser.name=name
//         newUser.email=email
//         newUser.phone=phone
//         newUser.address=address
         
//         // const upUser=await newUser.save()
//         // return res.status(201).json({message:'is updated sucssefuly'})
//     }
//קבלת משתמש בודד
const getUserByID=async(req,res)=>{
    const{_id}=req.params
    const user=await User.findById(_id)
    if(!user){ return res.status(400).json({"message":"no user found!"})}
    res.json(user)
}
module.exports={addUser,getAllUsers,updateUser,deleteUser,getUserByID}