import mongoose from "mongoose";

const payment=new mongoose.schema({
    order_id:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"orders",
      required:true
    },
    amount:{
       type:String,
       required:true
    },
    paymentmethod:{
        type:String,
        required:true
    },
    paymentstatus:{
        type:Number,
        required:true
    }
},{timestamps:true});

const payments=mongoose.model("payments",payment);

export default payments;