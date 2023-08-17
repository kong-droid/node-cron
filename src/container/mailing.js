import nodeCron from 'node-cron';
import Logging from '../setup/winston-setup.js';
import {termsMail} from '../api/mailing-api.js';
const Mailing = () => {
  // every night at midnight
  nodeCron.schedule('0 0 * * *', () => {
    termsMail().then(res => {
      Logging.info(`send email ::::: ${res.data.code}: ${res.data.message}`);
    }).catch(e => {
      Logging.error(`server exception message ::::: ${e}`);
    });
  }, {
    scheduled: true,
    timezone: 'Asia/Seoul'
  });
};

export default Mailing;
