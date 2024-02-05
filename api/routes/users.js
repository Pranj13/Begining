import express from "express"
import { updatedUser ,deleteUser,getUser,getallUsers} from "../Controller/user.js";
import {  verifyUser,verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

// router.get("/checkAuthentication",verifyToken,(req,res,next)=>{
//     res.send("Hello user, You are logged in!")
// })

// router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
//     res.send("Hello user, You are logged in and you can delete your account!")
// })

// router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
//     res.send("Hello Admin, You are logged in and you can delete all accounts!")
// })

//UPDATE

router.put("/:id",verifyUser,updatedUser);

//DELETE

router.delete("/:id",verifyUser,deleteUser);

//GET

router.get("/:id",verifyUser,getUser);

//GETALL

router.get("/",verifyAdmin,getallUsers);

export default router