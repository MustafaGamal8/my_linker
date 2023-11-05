import axios from "axios";
import { toast } from 'react-toastify';

// const ServerUrl = "http://localhost:3000";

const ServerUrl = "https://mylinker-server.vercel.app";


const UserInitalizeHandler = async (data,token) => {
  try {
    const response =  await axios.post(ServerUrl + "/users/initalize",
    {
      displayName: data.displayName,
      details: data.details
    }
    ,{
      headers: {
        "x-auth-token": token
      }
    })

    toast.success(response.data.message)
  } catch (error) {
    console.log(error.message)
    
  }
}


export default UserInitalizeHandler