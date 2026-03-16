const dotenv = require("dotenv")
const path = require("path")
const envPath = path.resolve(__dirname, `../.env.${process.env.NODE_ENV || "development"}`)
console.log('Env path:', envPath)
dotenv.config({
    path: envPath
    
})

console.log(process.env.PORT)