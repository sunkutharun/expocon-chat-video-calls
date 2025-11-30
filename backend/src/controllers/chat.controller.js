const { generateStreamToken } = require("../lib/Stream.js");

async function getStreamToken(req, res) {
    try {
        const token = await generateStreamToken(req.user.id); // add await if async
        res.status(200).json({ token });
    } catch (error) {
        console.error("error in getStreamToken controller:", error.message);
        res.status(500).json({ message: "internal server error" });
    }
}

module.exports = getStreamToken;