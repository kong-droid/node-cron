import client from 'src/config/axios-config.js';
export const termsMail = () => client.patch("/api/terms/email");