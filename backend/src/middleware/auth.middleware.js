
const jwt =require("jsonwebtoken");
const User = require("../model/User");
const dotenv = require("dotenv").config();


const protectRoute = async (req, res, next)=>{
    try{
const token = req.cookies.jwt
 
if(!token){
    return res.status(401).json({message:"Unauthorized - no token provided"});
}
 const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY);
 if (!decoded){
     return res.status(401).json({message:"Unauthorized - invadid token provided"});
 }
  const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(401).json({ message: "Unauthorized - User not found" });
    }

    req.user = user;
   next()

    }catch(error){
        console.log("error in protectRoute middleware ",error);
        res.status(500).json({message :"internal server error"});

    }
};

module.exports = protectRoute