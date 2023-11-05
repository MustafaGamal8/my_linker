import axios from "axios";
import { toast } from "react-toastify";
import UserFetchHandler from "./UserFetchHandler";

// const ServerUrl = "http://localhost:3000";

const ServerUrl = "https://mylinker-server.vercel.app";


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
  data.details.projects?.forEach((project, index) => {
    // If the project image is a file, append it to formData
    if (project.imgFile instanceof File) {
      formData.append(`projectImageFiles[${index}]`, project.imgFile);
    }
    // Otherwise, assume it's a Base64 string and handle it in the backend
    else {
      formData.append(`projectImages[${index}][imgUrl]`, project.imgUrl);
    }
    formData.append(`projectImages[${index}][name]`, project.name);
    formData.append(`projectImages[${index}][link]`, project.link);
  });

  // Append other details as JSON
  formData.append('details', JSON.stringify(data.details));

  try {
    const response = await axios.put(`${ServerUrl}/users/update`, formData, {
      headers: {
        'x-auth-token': token,
        // 'Content-Type': 'multipart/form-data' is not needed, axios sets it automatically when you pass FormData
      },
    });
    toast.success(response.data.message);
    UserFetchHandler();
  } catch (error) {
    console.error(error.message);
    toast.error("Failed to update user data.");
  }
  toast.dismiss(loadingToast);
};


export default UserDataHandler;
