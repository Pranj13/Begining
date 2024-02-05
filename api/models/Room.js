import mongoose from "mongoose"
const RoomSchema = new mongoose.Schema({
title:{
    type :String,
    require:true,
    
},
price:{
    type :Number,
    require:true,

},
maxpeople:{
    type :Number,
    require:true,
},
//type of hotel,cruiceetc
desc:{
    type :String,
    require:true
},

roomNumbers: [{number:Number , unavailabledates :{type:[Date]} }],
},

{timestamps:true}
);

export default mongoose.model("Room",RoomSchema)