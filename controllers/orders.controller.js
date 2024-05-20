import users from "../models/user.model.js";
///orders remaining
async function getuser(req,res){
    try {
        const user=await users.find();
        console.log(user);
    } catch (error) {
       return( console.log(error.message));
    }
}

async function postuser(req,res){
    try {
         const{fname,lname,email,gender,phonenumber}=req.body;
    const user=await users.create(
        {
            fname,
            lname,
            gender,
            email,
            phonenumber
        }
    )
    console.log(user);
    user.save();
    } catch (error) {
        return(res.send(error.message));
    }
   
}

async function updateuser(req,res){
    try {
        const user=await users.findByIdAndUpdate(req.body._id,{fname:req.body.fname,lname:req.body.lname,email:req.body.email,gender:req.body.gender,phonenumber:req.body.phonenumber});
    console.log(user);
    user.save();

    } catch (error) {
        return(res.send(error.message));
    }
    



}

async function deleteuser(req,res){
    try {
        const user=await users.findByIdAndDelete(req.body._id);
        console.log(user);
    } catch (error) {
        return(res.send(error.message));
    }
}