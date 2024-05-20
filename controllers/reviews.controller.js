import reviews from "../models/reviews.model.js";

async function getreview(req,res){
    try {
        const review=await reviews.find();
        console.log(review);
    } catch (error) {
       return( console.log(error.message));
    }
}

async function userreviews(req,res){
    try {
        const email=req.body.email;
        const review=await reviews.findOne({email});
        res.status(200).send(review);
    } catch (error) {
        res.status(400).send("this is server error",error.message);
    }
}

async function postreview(req,res){
    console.log("hey are you good");
    try {
        if(req.body){
         const{rating,comments,user_id}=req.body;
         console.log(rating,comments);
    const review=await reviews.create(
        {
            user_id,
            rating,
            comments,
        }
    )
    console.log(review);
    await review.save();
} else{
        console.log("body not provided");
    }
    } catch (error) {
        return(res.send(error.message));
    }
       
}

async function updatereview(req,res){
    try {
        const review=await reviews.findByIdAndUpdate(req.body.user_id,{rating:req.body.rating,comments:req.body.comments});
    console.log(review);
    review.save();

    } catch (error) {
        return(res.send(error.message));
    }
    



}

async function deletereview(req,res){
    try {
        const review=await reviews.findByIdAndDelete(req.body._id);
        console.log(review);
    } catch (error) {
        return(res.send(error.message));
    }
}

export default {getreview,postreview,updatereview,deletereview,userreviews};