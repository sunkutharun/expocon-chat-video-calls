import  {generateStreamToken}  from "../lib/Stream.js";

async function getStreamToken(req, res) {
    try {

        
        const token = await generateStreamToken(req.user._id); // add await if async
        res.status(200).json({ token });
    } catch (error) {
        console.error("error in getStreamToken controller:", error.message);
        res.status(500).json({ message: "internal server error" });
    }
}

export default getStreamToken;