import axios from "axios";
import { toast } from 'react-toastify';
import Cookies from 'universal-cookie';


const ServerUrl = "https://mylinker-server.vercel.app";


const LoginHandler = async (email, password) => {
  const cookies = new Cookies();
  
  const loadingToast = toast.loading("جاري تسجيل الدخول")
  try {
    const response = await axios.post(ServerUrl + "/auth/login", {
      email: email,
      password: password
    })
    const {token,user} = response.data
    toast.success(response.data.message)
    cookies.set('token', token, { path: '/' }); 
    localStorage.setItem('user', JSON.stringify(user))
    window.location = "/profile"
  } catch (error) {
    toast.error(error.response.data.error);
  }


  toast.dismiss(loadingToast)
}






export default LoginHandler