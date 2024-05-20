import express from "express";
const Router=express.Router();
import sendotp from "../controllers/otp.controller.js";

Router.post("/",sendotp.sendotp);
Router.post("/verifyotp",sendotp.verifyotp);

export default Router;