import menus from "../models/menu.model.js";

async function getmenu(req,res){
    try {
        const menu=await menus.find();
        console.log(menu);
    } catch (error) {
       return( console.log(error.message));
    }
}

async function postmenu(req,res){
    try {
         const{name,description,price}=req.body;
    const menu=await menus.create(
        {
          name,
          description,
          price
        }
    )
    console.log(menu);
    menu.save();
    } catch (error) {
        return(res.send(error.message));
    }
   
}

async function updatemenu(req,res){
    try {
        const menu=await menus.findByIdAndUpdate(req.body._id,{name:req.body.name,description:req.body.description,price:req.body.price});
    console.log(menu);
    menu.save();

    } catch (error) {
        return(res.send(error.message));
    }
    



}

async function deletemenu(req,res){
    try {
        const menu=await menus.findByIdAndDelete(req.body._id);
        console.log(menu);
    } catch (error) {
        return(res.send(error.message));
    }
}

export default {getmenu,postmenu,updatemenu,deletemenu};