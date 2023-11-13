import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Cookies from 'universal-cookie';





const Auth = () => {
  const cookies = new Cookies()
  const { mood } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const handleToken =  () => {
      if (mood === 'provider') {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');
        if (token) {
          cookies.set('token', token, { path: '/'  ,maxAge: 24 * 60 * 60});
          navigate('/profile');
        }
      }
    };

    handleToken();
  }, [mood]);

  return (
    <main>
      {
        mood === "login" ? <Login /> : null
      }
      {
        mood === "signup" ? <SignUp /> : null
      }

    </main>
  );
}
export default Auth;