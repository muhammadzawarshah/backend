import express from "express";
import dotenv from "dotenv";
import Routerg from "./routes/otp.route.js";
import userroute from "./routes/user.routes.js";
import reviews from "./routes/reviews.route.js";
import cors from "cors";
import "./db/dbconnect.db.js";
dotenv.config();


const app=express();
const port=process.env.PORT;
app.use(cors());
app.use(express.json());  
app.use(express.urlencoded({ extended: true }));


app.use("/post",Routerg);
app.use("/user",userroute);
app.use("/review",reviews);

app.listen(port,()=>{
    console.log(`the server was runing on ${port}`)
})