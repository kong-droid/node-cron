import nodeCron from 'node-cron';
import Logging from '../setup/winston-setup.js';
import {options} from "../utils/cron-options.js";

const SampleContainer = () => {
  nodeCron.schedule('* * * * *', () => {
    Logging.info("cron sample...");
  }, options());
};

export default SampleContainer;

