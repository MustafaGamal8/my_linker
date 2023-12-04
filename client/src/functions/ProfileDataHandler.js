
import { toast } from "react-toastify";
import ApiUrl from "../config/baseUrl";


const ProfileDataHandler = async (userId) => {
  try {
    const response =  await ApiUrl.get(`/profile/${userId}`)
      return response.data
    
  } catch (error) {
    toast.error(error.response.data.error);    
  }
  
}



export default ProfileDataHandler