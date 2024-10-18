import * as http from 'http';
import EnvSetup from './setup/env-setup.js';
import SampleContainer from "./container/sample-container.js";
import Logging from "./setup/winston-setup.js";

EnvSetup();
const hostname = process.env.NODE_ENV_HOSTNAME;
const port = process.env.NODE_ENV_PORT;
const server = http.createServer();
server.listen(port, hostname, () => {
  Logging.info(`server open :: ${process.env.NODE_ENV}`)
  SampleContainer();
});