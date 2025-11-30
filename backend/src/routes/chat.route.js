const express = require("express");
const protectRoute = require("../middleware/auth.middleware.js");
const router = express.Router();
const getStreamToken = require("../controllers/chat.controller.js")


router.get("/token",protectRoute,getStreamToken)


module.exports =router;