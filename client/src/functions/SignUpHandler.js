import { toast } from "react-toastify";
import ApiUrl from "../config/baseUrl";

const SignUpHandler = async (email, password,displayName) => {
  const loadingToast = toast.loading("جاري إنشاء حساب");

  try {
    const response =  await ApiUrl.post("/auth/signup", {
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