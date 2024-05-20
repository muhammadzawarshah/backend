import deliverydrivers from "../models/deliverydriver.model.js";

async function getdeliverydriver(req,res){
    try {
        const deliverydriver=await deliverydrivers.find();
        console.log(deliverydriver);
    } catch (error) {
       return( console.log(error.message));
    }
}

async function postdeliverydriver(req,res){
    try {
         const{vechile_details,license_number,available}=req.body;
    const deliverydriver=await deliverydrivers.create(
        {
            vechile_details,
            license_number,
            available
        }
    )
    console.log(deliverydriver);
    deliverydriver.save();
    } catch (error) {
        return(res.send(error.message));
    }
   
}

async function updatedeliverydriver(req,res){
    try {
        const deliverydriver=await deliverydrivers.findByIdAndUpdate(req.body._id,{vechile_details:req.body.vechile_details,license_number:req.body.license_number,available:req.body.available});
    console.log(deliverydriver);
    deliverydriver.save();

    } catch (error) {
        return(res.send(error.message));
    }
    



}

async function deletedeliverydriver(req,res){
    try {
        const deliverydriver=await deliverydrivers.findByIdAndDelete(req.body._id);
        console.log(deliverydriver);
    } catch (error) {
        return(res.send(error.message));
    }
}

export default {getdeliverydriver,postdeliverydriver,updatedeliverydriver,deletedeliverydriver};