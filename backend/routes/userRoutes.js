const express = require("express")
const router = express.Router()
const {register,login,logout,profile} = require("../controllers/userController")
const authmiddleware = require("../middleware/authmiddleware")
router.post("/register",register)
router.post("/login",login)
router.post("/logout",logout)
router.get("/profile",authmiddleware,profile)
module.exports=router;