import express from "express"
const router = express.Router();
import {createRoom, getallRooms,updatedRoom,deleteRoom,getRoom} from "../Controller/room.js"
import { verifyAdmin } from "../utils/verifyToken.js";

//CREATE

router.post("/:hotelid",verifyAdmin,createRoom);

//UPDATE

router.put("/:id",verifyAdmin,updatedRoom);

//DELETE

router.delete("/:id/:hotelid",verifyAdmin,deleteRoom);

//GET

router.get("/:id",getRoom);

//GETALL

router.get("/",getallRooms);

export default router