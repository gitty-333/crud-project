const express=require("express")
const router=express.Router()
const userController=require("../controllers/userController")
router.post("/",userController.addUser)
router.get("/",userController.getAllUsers)
router.get("/:_id",userController.getUserByID)
router.delete("/",userController.deleteUser)
router.put("/:_id",userController.updateUser)
module.exports=router