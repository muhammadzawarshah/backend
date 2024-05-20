import mongoose from "mongoose";


const otpmodel=new mongoose.Schema({
          phonenumber:{
            type:String,
            required:true
          },
          otp:{
               type:String,
               required:true
        },
        expotp:{
            type:Date,
            default:Date.now,
            get: (otpexp) => otpexp ? otpexp.getTime() : undefined,
            set:(otpexp)=>new Date(otpexp)
        }
})

const Otp=mongoose.model("Otp",otpmodel);

export default Otp;