import envSetup from "./setup/env-setup.js";
import mailing from "./container/mailing.js";
import * as http from "http";
import historyDevices from "./container/history-devices.js";

envSetup();

const hostname = process.env.NODE_ENV_HOSTNAME;
const port = process.env.NODE_ENV_PORT;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('belogger-cron');
});

server.listen(port, hostname, () => {
  // adding batch function...
  mailing();
  historyDevices();
});