import mongoose from 'mongoose';

const HotleSchema = new mongoose.Schema({
    name:{
        type :String,
        require:true
    },
    //type of hotel,cruiceetc
    type:{
        type :String,
        require:true
    },
    city:{
        type :String,
        require:true
    },
    address:{
        type :String,
        require:true
    },
    title:{
        type :String,
        require:true
    },
    distance:{
        type :String,
        require:true
    },
    images:{
        type :[String],
    },
    description:{
        type :String,
        require:true
    },
    rating:{
        type :String,
        min:0,
        max:5
    },
    rooms:{
        type :[String],
        
    },
    cheapestPrice:{
        type :String,
        require:true
    },
    features:{
        type :Boolean,
        require:false
    }
})

export default mongoose.model("Hotel",HotleSchema)