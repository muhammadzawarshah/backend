import payments from "../models/payments.model.js";

async function getpayment(req,res){
    try {
        const payment=await payments.find();
        console.log(payment);
    } catch (error) {
       return( console.log(error.message));
    }
}

async function postpayment(req,res){
    try {
         const{amount,paymentmethod,paymentstatus}=req.body;
    const payment=await payments.create(
        {
            amount,
            paymentmethod,
            paymentstatus
        }
    )
    console.log(payment);
    payment.save();
    } catch (error) {
        return(res.send(error.message));
    }
   
}

async function updatepayment(req,res){
    try {
        const payment=await payments.findByIdAndUpdate(req.body._id,{amount:req.body.amount,paymentmethod:req.body.paymentmethod,paymentstatus:req.body.paymentstatus});
    console.log(payment);
    payment.save();

    } catch (error) {
        return(res.send(error.message));
    }
    



}

async function deletepayment(req,res){
    try {
        const payment=await payments.findByIdAndDelete(req.body._id);
        console.log(payment);
    } catch (error) {
        return(res.send(error.message));
    }
}

export default {getpayment,postpayment,updatepayment,deletepayment};