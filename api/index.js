import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authrout from "./routes/auth.js"
import hotels from "./routes/hotels.js"
import rooms from "./routes/rooms.js"
import users from "./routes/users.js"
import cookieParser from "cookie-parser";

const app= express();
dotenv.config();

const connect= async ()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongoDB!")
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB disconnected")
})

//middleware
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth",authrout);
app.use("/api/users",users);
app.use("/api/hotels",hotels);
app.use("/api/rooms",rooms);


//error handling
app.use((err,req,res,next)=>{
    const errorStatus =err.status || 500
    const errorMessage =err.message || "somethign went wrong"

    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack,
    })
    });

app.listen(8800,()=>{
    connect()
    console.log("connected to backend!");
});

