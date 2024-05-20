import users from "../models/user.model.js";

async function getuser(req,res){
    try {
        const user=await users.find();
        res.status(200).send(user);
    } catch (error) {
       return( console.log(error.message));
    }
}

async function getusernumber(req,res){
        try {
            const phonenumber=req.body.phonenumber;
            const user=await users.findOne({phonenumber});
            res.status(200).send(user);
        } catch (error) {
           return( console.log(error.message));
        }
    }
async function getuseremail(req,res){
        try {
            const email=req.body.email;
            const user=await users.findOne({email});
            res.status(200).send(user);
        } catch (error) {
           return( console.log(error.message));
        }
    }
    
async function postuser(req,res){
    try {
        const validatenumber=async (phonenumber)=>{
           let user=await users.findOne({phonenumber});
           return user?false :true;
        }
        const validateemail=async (email)=>{
            let user=await users.findOne({email});
            return user?false:true;
        }
          if(req.body.phonenumber){  
        const valnumber=await validatenumber(req.body.phonenumber);
        if(!valnumber){
           return res.status(400).send("number already exist");
        }}
        if(req.body.email){
        const valemail=await validateemail(req.body.email);
        if(!valemail){
           return res.status(400).send("email already registered");
        }
    }
         const{fname,lname,email,gender,phonenumber,role}=req.body;
        const user=await users.create(
        {
            fname,
            lname,
            gender,
            email,
            phonenumber,
            role
        }
    )
    user.save();
    res.status(200).json({
        success:true,
        msg:"created succesfully"
    })
    } catch (error) {
        return(res.send(error.message));
    }
   
}

async function updateuser(req,res){
    try {
        const user=await users.findByIdAndUpdate(req.body._id,{fname:req.body.fname,lname:req.body.lname,email:req.body.email,gender:req.body.gender,phonenumber:req.body.phonenumber,role:req.body.role});
    console.log(user);
    user.save();
     res.status(200).json({
        success:true,
        msg:"the user updated succesfully"
     })
    } catch (error) {
        return(res.send(error.message));
    }
    



}

async function deleteuser(req,res){
    try {
        const user=await users.findByIdAndDelete(req.body._id);
        console.log(user);
        res.status(200).json({
            success:true,
            msg:"the user deleted succesfully"
        })
    } catch (error) {
        return(res.send(error.message));
    }
}

export default {getuser,postuser,updateuser,deleteuser,getusernumber,getuseremail};