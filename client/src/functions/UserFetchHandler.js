import axios from "axios";


const ServerUrl = "https://mylinker-server.vercel.app";

const UserFetchHandler = async (token) => {
  try {
    const response =  await axios.post(ServerUrl + "/users/get",{},{
      headers: {
        "x-auth-token": token
      }})
      
      localStorage.setItem('user', JSON.stringify(response.data.user))
      window.location.reload()
      
  } catch (error) {
    console.log(error)
  }
}


export default UserFetchHandler