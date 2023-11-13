import axios from "axios";
import { toast } from 'react-toastify';
import UserFetchHandler from "./UserFetchHandler";

// const ServerUrl = "http://localhost:3000";

const ServerUrl = "https://mylinker-server.vercel.app";


const UserInitalizeHandler = async (token) => {
  try {
     await axios.get(ServerUrl + "/users/initalize",{
      headers: {
        "x-auth-token": token
      }
    })
    await UserFetchHandler(token)
  } catch (error) {
    toast.error(error.message)    
  }
}


export default UserInitalizeHandler