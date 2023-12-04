
import axios  from 'axios';

const ApiUrl =  axios.create({baseURL: 'https://mylinker-server.vercel.app'});


export default ApiUrl;