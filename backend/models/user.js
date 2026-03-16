const mongoose = require("mongoose")
const usermodel = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
})
const user= mongoose.model("userdata",usermodel)

module.exports = user;