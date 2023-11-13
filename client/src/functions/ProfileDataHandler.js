import axios from "axios";
import { toast } from "react-toastify";


// const ServerUrl = "http://localhost:3000";

const ServerUrl = "https://mylinker-server.vercel.app";
const ProfileDataHandler = async (userId) => {
  try {
    const response =  await axios.get(ServerUrl +  `/profile/${userId}`)
      return response.data
    
  } catch (error) {
    toast.error(error.response.data.error);    
  }
  
}



export default ProfileDataHandler