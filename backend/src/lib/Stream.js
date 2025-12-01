import { StreamChat } from "stream-chat";
import "dotenv/config";


const apikey = process.env.STREAM_API_KEY
const apisecret = process.env.STREAM_API_SECRET


if (!apikey || !apisecret){
    console.error("Stream Api key or Secret is missing");

}

const streamClient = StreamChat.getInstance(apikey, apisecret); 
  

  const upsertStreamUser = async (userData)=>{
    try{
        await streamClient.upsertUsers([userData]);
        return userData;

    } catch (error){
        console.error("error upserting Stream user:",error)
    }
  }

  const generateStreamToken = (userId) =>{
    try {
      // ensure userId is a string
      const userIdStr = userId.toString();
      return streamClient.createToken(userIdStr);

    } catch (error) {
      console.error("error generating stream token",error)
    }
  };



  export default {upsertStreamUser,generateStreamToken}