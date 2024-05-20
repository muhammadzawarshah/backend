import mongoose from "mongoose";


const orderitems=new mongoose.model({
    order_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"order"
    },
    menu_item_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"menus"
    },
    quantity:{
        type:Number,
        default:1,
        required:true
    },
    price:{
        type:Number,
        required:true
    }

},{timestamps:true});

const orderitem=mongoose.model("orderitems",orderitems);

export default orderitem;