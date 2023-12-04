import { toast } from "react-toastify";
import UserFetchHandler from "./UserFetchHandler";
import ApiUrl from "../config/baseUrl";


const UserDataHandler = async (data, token) => {
  
  const loadingToast = toast.loading("جاري تحديث البيانات...");
  const formData = new FormData();

  // Append profile and cover images if they are files
  if (data.details.pictureFile) {
    formData.append('pictureFile', data.details.pictureFile);
  }
  if (data.details.coverFile) {
    formData.append('coverFile', data.details.coverFile);
  }

  // Process project images
  if (data.details.projects && data.details.projects.length > 0) {
    data.details.projects.forEach((project, index) => {
      if (project.imgFile) {
        formData.append(`projectImagesFile`, project.imgFile);
        formData.append(`projectIndexs`,  index);
      }
    });
  }

  
  
  
  // Append other details as JSON
  formData.append('details', JSON.stringify(data.details));

  try {
    const response = await ApiUrl.put(`${ServerUrl}/users/update`, formData, {
      headers: {
        'x-auth-token': token,
        // 'Content-Type': 'multipart/form-data' is not needed, axios sets it automatically when you pass FormData
      },
    });
    toast.success(response.data.message);
    UserFetchHandler(token);
  } catch (error) {
    toast.error(error.response.data.error);
  }
  toast.dismiss(loadingToast);
};


export default UserDataHandler;
