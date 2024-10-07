import client from 'src/setup/axios-setup.js';

// enter the required api.
export const callApi = (params) => client.post("", params);