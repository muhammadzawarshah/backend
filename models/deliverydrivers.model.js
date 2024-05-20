import mongoose from "mongoose";



const deliverydriver=new mongoose.model({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    vehicle_details:{
        type:String,
        required:true
    },
    license_number:{
        type:String,
        required:true
    },
    available:{
        type:number,
        required:true
    }
},{timestamps:true})

const deliverydrivers=mongoose.model("deliverydriver",deliverydriver);

export default deliverydrivers;