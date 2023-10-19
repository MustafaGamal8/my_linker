import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Login from "./Login";
import {useCookies} from "react-cookie"

import MouseEffect from '../components/mouseEffect';
import SignUp from "./SignUp";





const Auth = () => {
  const [cookies, setCookie] = useCookies([]);
  const { mood } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const handleToken =  () => {
      if (mood === 'provider') {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');
        if (token) {
           setCookie('Token', token, { path: '/' });
          navigate('/profile');
        }
      }
    };

    handleToken();
  }, [mood]);




  return (
    <main className="cursor-none">
    <MouseEffect />
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