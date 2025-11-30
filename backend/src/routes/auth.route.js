const express = require("express");
const router = express.Router();
const { login, signup, logout,onboard } = require("../controllers/auth.controller");
const protectRoute = require("../middleware/auth.middleware")

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.post("/onboarding",protectRoute,onboard)

router.get("/me",protectRoute,(req,res)=>{
    res.status(200).json({success:true , user :req.user});
})



module.exports = router;
