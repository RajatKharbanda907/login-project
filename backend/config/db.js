const mongoose = require("mongoose")
const connectDB = async ()=>{
    try{
       await mongoose.connect(process.env.MONGODB)
       console.log("database connected successfully");
    }catch(err){
        console.log("err occured in connecting database")
        process.exit(1)
    }

   }
module.exports= connectDB;