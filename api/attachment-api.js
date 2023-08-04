import client from 'config/axios-config';
export const empty = (params) => client.post("", params);