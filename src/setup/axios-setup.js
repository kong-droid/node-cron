import axios from 'axios';
import EnvSetup from "./env-setup.js";

EnvSetup();
const AxiosSetup = axios.create({
  baseURL: process.env.NODE_ENV_API_URL
});
export default AxiosSetup;