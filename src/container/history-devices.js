import nodeCron from "node-cron";
import logging from "../setup/winston-setup.js";

const historyDevices = () => {
  nodeCron.schedule("* * * * *", () => {
    console.log("??????????아니 찍히는겨?");
    logging.info("message...... *** ");
  }, {
    scheduled: true,
    timezone: "Asia/Seoul"
  });
};

export default historyDevices;

