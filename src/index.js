import * as http from 'http';
import EnvSetup from './setup/env-setup.js';
import Mailing from './container/mailing.js';
import HistoryProtocols from './container/history-protocols.js';
import HistoryDevices from './container/history-devices.js';
EnvSetup();

const hostname = process.env.NODE_ENV_HOSTNAME;
const port = process.env.NODE_ENV_PORT;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<h1>belogger-cron - ${process.env.npm_lifecycle_event} </h1>`);
});

server.listen(port, hostname, () => {
  // adding batch function...
  Mailing();
  HistoryDevices();
  HistoryProtocols();
});