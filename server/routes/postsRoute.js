const express=require("express")
const router=express.Router()
const postsController=require("../controllers/postsController")
router.get("/",postsController.getAllPosts)
router.post("/",postsController.addPosts)
router.put("/:_id",postsController.updatePosts)
router.delete("/",postsController.deletePosts)
router.get("/:_id",postsController.getPostsByID)
module.exports=router