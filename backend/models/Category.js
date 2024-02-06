const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CategorySchema = ({
    id:{
        type:Number,
        default:Math.floor(Math.random() * 2)
    },
    description :{
        type:String,
        // required:true
    },
 
    category :{
        type:String,
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

module.exports =mongoose.model('Category',CategorySchema)