const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
name:{
        type:String,
        required:true
},
userName:{
    type:String,
    required:true,
    unique:true
},
email:{
    type:String,
    lowercase:true
},
address:{
    type:String,
    required:true
},
phone:String,
},{ timestamps:true})
module.exports=mongoose.model("User",userSchema)