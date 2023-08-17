import AxiosSetup from '../setup/axios-setup.js';
import {dateParams} from '../utils/date-util.js';

export const removeHistoryDevices = () =>  AxiosSetup.delete('/api/history/devices', {data: dateParams()});
export const removeHistoryProtocols = () =>  AxiosSetup.delete('/api/history/protocols', {data: dateParams()});