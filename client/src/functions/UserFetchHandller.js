import axios from "axios";


const ServerUrl = "https://mylinker-server.vercel.app";

const UserFetchHandler = async (token) => {
  try {
    const response =  await axios.post(ServerUrl + "/users/get",{},{
      headers: {
        "x-auth-token": token
      }})
      
      localStorage.setItem('user', JSON.stringify(response.data))
      
  } catch (error) {
    
  }
}

UserFetchHandler("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTMzZmFiMGM1ZWEwNjU5Mzc1Mjk5NjIiLCJpYXQiOjE2OTc5MDU5NTMsImV4cCI6MTY5Nzk5MjM1M30.va5OnO3-XDtS8m5N5nyrlUuTwwxlKKPDZtp-Q09aoqU")



export default UserFetchHandler