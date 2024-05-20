import mongoose from "mongoose";


const order=new mongoose.model({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    price:{
        type:Number,
        required:true
    },
    orderstatus:{
        type:Number,
        default:0,
        required:true
    }
},{timestamps:true})

const orders=mongoose.model("orders",order);

export default orders;