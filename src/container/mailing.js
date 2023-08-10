import nodeCron from "node-cron";
import {termsMail} from "../api/mailing-api.js";

const mailing = () => {
  nodeCron.schedule("* * * * *", () => {
    // todo:: add log
    termsMail().then(res => {
      console.log(res.data.code, res.data.message);
    }).catch(e => {
      console.log(e);
    });
  }, {
    scheduled: true,
    timezone: "Asia/Seoul"
  });
};

export default mailing;
