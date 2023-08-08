import axios from 'axios';

const client = axios.create({
  baseURL: process.env.NODE_ENV_API_URL
});
export default client;