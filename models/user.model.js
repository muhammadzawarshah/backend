import mongoose from "mongoose";


const user=new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    phonenumber:{
        type:String,
    },
    role:{
        type:String,
        enum:["admin","customer","driver"],
        default:"customer",
        required:true
    }
},{timestamps:true});

const users=mongoose.model("user",user);

export default users;