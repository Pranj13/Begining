import express from "express";

import { register } from "../Controller/auth.js";
import { login } from "../Controller/auth.js"
const router = express.Router();

router.post("/register",register)
router.post("/login",login)

export default router