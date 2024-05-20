import getreviews from "../controllers/reviews.controller.js";
import admin from "../middlewares/admin.middleware.js";
import express from "express";

const Router=express.Router();
Router.get("/reviews",admin,getreviews.getreview);
Router.get("/userreview",getreviews.userreviews);
Router.post("/postreview",getreviews.postreview);
Router.patch("/updatereview",getreviews.updatereview);
Router.delete("/deletereview",getreviews.deletereview);

export default Router;