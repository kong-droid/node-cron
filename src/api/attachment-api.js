import client from 'src/config/axios-config.js';
export const empty = (params) => client.post("", params);