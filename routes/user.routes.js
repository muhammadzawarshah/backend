import getuser from "../controllers/user.controller.js";
import adminrole from "../middlewares/admin.middleware.js";
import express from "express";

const Router=express.Router();
Router.get("/getuser",adminrole,getuser.getuser);
Router.get("/getusernumber",getuser.getusernumber);
Router.get("/getuseremail",getuser.getuseremail);
Router.post("/newuser",getuser.postuser);
Router.patch("/updateuser",getuser.updateuser);
Router.delete("/deleteuser",getuser.deleteuser);

export default Router;