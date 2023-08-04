import client from 'config/axios-config';
export const termsMail = () => client.patch("/api/terms/email");