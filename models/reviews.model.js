import mongoose from 'mongoose';

const review=new mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
    },
    rating:{
        type:Number,
        required:true
    },
    Comments:{
        type:String,
    }
},{timestamps:true})

const reviews=mongoose.model("review",review);

export default reviews;