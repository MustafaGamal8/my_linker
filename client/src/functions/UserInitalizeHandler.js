
import { toast } from 'react-toastify';
import UserFetchHandler from "./UserFetchHandler";
import ApiUrl from '../config/baseUrl';


const UserInitalizeHandler = async (token) => {
  try {
     await ApiUrl.get("/users/initalize",{
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