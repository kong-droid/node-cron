import nodeCron from "node-cron";
import {termsMail} from "../api/mailing-api.js";
import logging from "../setup/winston-setup.js";
const mailing = () => {
  nodeCron.schedule("* * * * *", () => {
    // todo:: add log
    termsMail().then(res => {
      logging.info(`terms mail ::::: ${res.data.code}: ${res.data.message}`);
      console.log(res.data.code, res.data.message);
    }).catch(e => {
      logging.error(e);
    });
  }, {
    scheduled: true,
    timezone: "Asia/Seoul"
  });
};

export default mailing;
