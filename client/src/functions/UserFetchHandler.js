
import ApiUrl from "../config/baseUrl";


const UserFetchHandler = async (token) => {
  try {
    const response =  await ApiUrl.post("/users/get",{},{
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