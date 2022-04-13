const express=require("express")
const productRouter=express.Router();





const productControllers=require("../controllers/product")



productRouter.route('/').get(productControllers.getDetails)
            //  .post(productControllers.getDetails())  
            //  .delete(productControllers.getDetails()) 

module.exports=productRouter