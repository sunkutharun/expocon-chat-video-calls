import { StreamChat } from "stream-chat";
import "dotenv/config";

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
  throw new Error("Stream API key or secret missing");
}

const streamClient = StreamChat.getInstance(apiKey, apiSecret);

// 🔒 Stream helpers use `id` ONLY
 export const upsertStreamUser = async ({ id, name, image }) => {
  if (!id) {
    throw new Error("Stream user id is required");
  }

  const streamUser = {
    id: id.toString(),
    name: name || "",
    image: image || "",
  };

  await streamClient.upsertUsers([streamUser]);
  return streamUser;
};

export const generateStreamToken = (userId) => {
  if (!userId) {
    throw new Error("Stream user id is required");
  }

  return streamClient.createToken(userId.toString());
};

export default streamClient;
