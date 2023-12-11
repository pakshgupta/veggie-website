const mongoose=require("mongoose");
const ProductSchema=new mongoose.Schema(
    {
        title:{type:String,required:true,unique:true},
        img:{type:String,required:true},
        categories:{type:Array},
        price:{type:Number,required:true},
        //new
        rating:{type:Number,required:true},
        instock:{type:Boolean,default:true},
    },
    {timestamps:true}
);
module.exports=mongoose.model("Product",ProductSchema)