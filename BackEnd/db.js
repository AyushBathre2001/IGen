const mongoose = require('mongoose')

const dbConnect = async ()=>{
    mongoose.set('strictQuery', false);
    const dbstatus = await mongoose.connect("mongodb://localhost:27017/bms")
    console.log("connected to database")
}

module.exports = dbConnect