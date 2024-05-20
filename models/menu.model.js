import mongoose from "mongoose";


const menu=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
},{timestamps:true});

const menus=mongoose.model("menu",menu);

export default menus;