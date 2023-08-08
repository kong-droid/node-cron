import envSetup from "./env-setup.js";
import axios from 'axios';

envSetup();

const axiosSetup = axios.create({
  baseURL: process.env.NODE_ENV_API_URL
});
export default axiosSetup;