

import Cookies from "universal-cookie";

const LogoutHandler = () => {
  const cookies = new Cookies();
  cookies.remove("token"||"Token");
  localStorage.removeItem("user");
  window.location.reload()
};


export default LogoutHandler