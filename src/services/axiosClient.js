import axios from "axios";

const API_KEY = "6543df3801b5e279de211518";

const axiosInstance = axios.create({
  baseURL: `https://${API_KEY}.mockapi.io/api/adverts`,
});

export { axiosInstance as axios };
