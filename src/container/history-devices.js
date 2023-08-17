import nodeCron from 'node-cron';
import Logging from '../setup/winston-setup.js';
import {removeHistoryDevices} from '../api/history-api.js';
const HistoryDevices = () => {
  // 0 0 1 */2 * = once in two months
  nodeCron.schedule('0 0 1 */2 *', () => {
    removeHistoryDevices().then(res => {
      if(res.data.code === 0 && res.data.data === true) {
        Logging.info('deleted successfully.');
      } else {
        Logging.info('history devices is no data to delete.');
      }
    }).catch(e => {
      Logging.error(`server exception message ::::: ${e}`);
    });
  }, {
    scheduled: true,
    timezone: 'Asia/Seoul'
  });
};

export default HistoryDevices;

