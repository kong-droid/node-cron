import axiosSetup from '../setup/axios-setup.js';
export const termsMail = () => axiosSetup.patch("/api/terms/email");