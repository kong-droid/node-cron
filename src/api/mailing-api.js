import AxiosSetup from '../setup/axios-setup.js';

export const termsMail = () => AxiosSetup.patch('/api/terms/email');