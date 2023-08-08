import nodeCron from "node-cron";
import {termsMail} from "../api/mailing-api.js";

const mailing = () => {
  nodeCron.schedule("* * * * *", () => {
    // todo:: add winston config
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
