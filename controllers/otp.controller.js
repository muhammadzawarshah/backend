import Otp from "../models/otp.model.js";
import otpverification from "../helpers/otpvalidator.js";
// import twilio from "twilio";
// import dotenv from "dotenv";
// dotenv.config();
// const accountsid=process.env.port;
// const authtoken=process.env.port;
// const twilio=new twilio(accountsid,authtoken);

async function  sendotp(req,res){
    try {
      const {number}=req.body;
      const otpn=Math.floor(1000 + Math.random() * 9000);

      const cdate=new Date()
    await Otp.findOneAndUpdate({
      phonenumber:number
     },
    {otp:otpn,expotp:new Date(cdate.getTime())},
    {upsert:true, new:true, setDefaultsOnInsert:true}
    
    )
      return(
        res.status(200).json({
            success:true,
            msg:otpn
        }
        )
      )
    } catch (error) {
      return(res.status(400).json({
        success:false,
        msg:error.message
    }))
    }
}
async function verifyotp(req,res){
   try {
    const{number,otp}=req.body;
      const verotp= await Otp.findOne({
        phonenumber:number
    },
    {otp:otp}
  ); 
  const data=await Otp.find(verifyotp._id);
  console.log(data);
      if(!verotp){
      console.log(verotp);
      return(res.status(400).json({
        success:false,
      msg:"you entered wrong otp"
      }
      ))
    }
    console.log(data[0].expotp);
    const otpexpired=otpverification(data[0].expotp);
    
    if(otpexpired){
      return res.status(400).json({
        succes:false,
        msg:"your otp will be expired!"
      })
     
    } 
    return res.status(200).json({
        success:true,
        msg:"you login succesfully"
      })

   } catch (error) {
    console.log("cannot find");
    return(res.status(400).json({
      success:false,
      msg:error.message
    }))
   }


}

export default {sendotp,verifyotp};