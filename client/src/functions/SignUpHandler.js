import axios from "axios";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

// const ServerUrl = "https://mylinker-server.vercel.app";
const ServerUrl = "http://localhost:3000";





const SignUpHandler = async (email, password,displayName) => {
  const loadingToast = toast.loading("جاري إنشاء حساب");

  try {
    const response =  await axios.post(ServerUrl + "/auth/signup", {
      email: email,
      password: password,
      displayName: displayName
    })
    
    window.location = "/auth/login"
    toast.success(response.data.message)
  } catch (error) {
    toast.error(error.response.data.error);    
  }

  toast.dismiss(loadingToast);
}



export default SignUpHandler;