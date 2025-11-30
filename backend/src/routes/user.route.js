const express = require("express");
const protectRoute = require("../middleware/auth.middleware.js");
const { getRecommendedUsers,
     getMyFriends,
     acceptFriendRequest,
     sendFriendRequest,
     getFriendRequests,
     getOutgoingFriendReqs } = require("../controllers/user.controller.js");

const router = express.Router();

router.use(protectRoute)
router.get("/",getRecommendedUsers);
router.get("/friends",getMyFriends);


router.post("/friend-request/:id",sendFriendRequest);
router.put("/friend-request/:id/accept",acceptFriendRequest);

router.get("/friend-requests",getFriendRequests);
router.get("/outgoing-friend-requests",getOutgoingFriendReqs);

module.exports = router