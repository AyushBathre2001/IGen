const mongoose = require('mongoose')

const billSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    products:[],
    amount:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
    
})

module.exports = mongoose.model('bill',billSchema)