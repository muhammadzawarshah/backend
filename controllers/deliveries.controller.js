import deliverie from "../models/deliveries.model.js";

async function getdeliveries(req,res){
    try {
        const deliveries=await deliverie.find();
        console.log(deliveries);
    } catch (error) {
       return( console.log(error.message));
    }
}

async function postdeliveries(req,res){
    try {
         const{delivery_adderess,delivery_status,estimated_delivery_time,actual_delivery_time}=req.body;
    const deliveries=await deliverie.create(
        {
            delivery_adderess,
            delivery_status,
            estimated_delivery_time,
            actual_delivery_time
        }
    )
    console.log(deliveries);
    deliveries.save();
    } catch (error) {
        return(res.send(error.message));
    }
   
}

async function updatedeliveries(req,res){
    try {
        const deliveries=await deliverie.findByIdAndUpdate(req.body._id,{delivery_adderess:req.body.delivery_adderess,delivery_status:req.body.delivery_status,estimated_delivery_time:req.body.estimated_delivery_time,actual_delivery_time:req.body.actual_delivery_time});
    console.log(deliveries);
    deliveries.save();

    } catch (error) {
        return(res.send(error.message));
    }
    



}

async function deletedeliveries(req,res){
    try {
        const deliveries=await deliverie.findByIdAndDelete(req.body._id);
        console.log(deliveries);
    } catch (error) {
        return(res.send(error.message));
    }
}

export default {getdeliveries,postdeliveries,updatedeliveries,deletedeliveries};