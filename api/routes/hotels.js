import express from "express";
import { createError} from "../utils/error.js";
import { createHotel, deleteHotel, getHotel, getallHotels, updatedHotel } from "../Controller/hotel.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE

router.post("/",verifyAdmin,createHotel);

//UPDATE

router.put("/:id",verifyAdmin,updatedHotel);

//DELETE

router.delete("/:id",verifyAdmin,deleteHotel);

//GET

router.get("/:id",getHotel);

//GETALL

router.get("/",getallHotels);

export default router