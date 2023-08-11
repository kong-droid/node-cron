import axiosSetup from "../setup/axios-setup.js";
import {dateParams} from "../utils/date-util.js";

export const removeHistoryDevices = () =>  axiosSetup.delete("/api/history/devices", dateParams);
export const removeHistoryProtocols = () =>  axiosSetup.delete("/api/history/protocols", dateParams);