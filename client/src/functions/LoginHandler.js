import { toast } from 'react-toastify';
import Cookies from 'universal-cookie';
import ApiUrl from "../config/baseUrl";


const LoginHandler = async (email, password) => {
  const cookies = new Cookies();
  
  const loadingToast = toast.loading("جاري تسجيل الدخول")
  try {
    const response = await ApiUrl.post( "/auth/login", {
      email: email,
      password: password
    })
    const {token,user} = response.data
    toast.success(response.data.message)
          cookies.set('token', token, { path: '/'  ,maxAge: 24 * 60 * 60});
    localStorage.setItem('user', JSON.stringify(user))
    window.location = "/profile"
  } catch (error) {
    toast.error(error.response.data.error);
  }


  toast.dismiss(loadingToast)
}






export default LoginHandler