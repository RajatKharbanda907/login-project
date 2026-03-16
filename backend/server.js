const express = require("express")
const dotenv = require("dotenv")
const app = require("./app")

dotenv.config()   // load .env variables

const port = process.env.PORT 
const host = process.env.HOST 

app.listen(port,host,(err)=>{
    if(err){
        console.log(err + " error occured in server running")
    }else{
        console.log(`server running successfully at http://${host}:${port}`)
    }
})