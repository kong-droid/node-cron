import dotenv from "dotenv";
import * as http from "http";
import mailing from "./container/mailing.js";

dotenv.config({ path: process.env.npm_lifecycle_event + '.env' });
const hostname = process.env.NODE_ENV_HOSTNAME;
const port = process.env.NODE_ENV_PORT;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('belogger-cron');
});
server.listen(port, hostname, () => {
  mailing();
});