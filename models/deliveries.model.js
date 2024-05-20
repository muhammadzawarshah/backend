import mongoose from "mongoose";


const deliveries=mongoose.model({
    order_id:{
        type:mongoose.Schema.Types.ObjectId,
    ref:"users"
},
   driver_id:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"deliverydrivers"
   },
   delivery_adderess:{
    type:String,
    required:true
   },
   delivery_status:{
    type:String,
    required:true
   },
   estimated_delivery_time:{
    type:String,
    required:true
   },
   actual_delivery_time:{
    type:String,
    required:true,
    default: 30
   }
},{timestamps:true});

const delivery=mongoose.model("deliveries",deliveries);

export default delivery;
