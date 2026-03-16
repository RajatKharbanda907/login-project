const express = require("express");
const cookieparser= require("cookie-parser")
const connectDB = require("./config/db");
require("./config/env")
const userRoutes = require("./routes/userRoutes")
const app = express();
connectDB()
app.use(cookieparser())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/user",userRoutes)
module.exports= app;