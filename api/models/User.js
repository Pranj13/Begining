import mongoose from "mongoose"
const UserSchema = new mongoose.Schema({
username:{
    type :String,
    require:true,
    unique:true
},
email:{
    type :String,
    require:true,
    unique:true
},
//type of hotel,cruiceetc
password:{
    type :String,
    require:true
},

isAdmin:{
    type :Boolean,
    require:false
}
},{timestamps:true})

export default mongoose.model("User",UserSchema)