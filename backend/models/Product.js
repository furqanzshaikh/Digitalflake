const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ProductSchema = ({
    id :{
        type:Number,
        // required:true
       
    },
    name :{
        type:String,
        // required:true
    },
    packsize :{
        type:String,
        required:true
    },
    thumbnail :{
        type:String,
        // required:true
    },
    category :{
        type:String,
        // required:true
    },
    mrp :{
        type:Number,
        // required:true
    },
    status :{
        type:Array,
        // required:true
    },
    createdAt :{
        type:Date,
        default:Date.now()
    },
})



module.exports =mongoose.model('Product',ProductSchema)