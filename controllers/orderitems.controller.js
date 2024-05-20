import orderitems from "../models/orderitems.model.js";

async function getorderitem(req,res){
    try {
        const orderitem=await orderitems.find();
        console.log(orderitem);
    } catch (error) {
       return( console.log(error.message));
    }
}

async function postorderitem(req,res){
    try {
         const{quantity,price}=req.body;
    const orderitem=await orderitems.create(
        {
           quantity,
           price
        }
    )
    console.log(orderitem);
    orderitem.save();
    } catch (error) {
        return(res.send(error.message));
    }
   
}

async function updateorderitem(req,res){
    try {
        const orderitem=await orderitems.findByIdAndUpdate(req.body._id,{quantity:req.body.quantity,price:req.body.price});
    console.log(orderitem);
    orderitem.save();

    } catch (error) {
        return(res.send(error.message));
    }
    



}

async function deleteorderitem(req,res){
    try {
        const orderitem=await orderitems.findByIdAndDelete(req.body._id);
        console.log(orderitem);
    } catch (error) {
        return(res.send(error.message));
    }
}

export default {getorderitem,postorderitem,updateorderitem,deleteorderitem};