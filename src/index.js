import * as http from 'http';
import EnvSetup from './setup/env-setup.js';
import SampleContainer from "./container/sample-container.js";

EnvSetup();
const hostname = process.env.NODE_ENV_HOSTNAME;
const port = process.env.NODE_ENV_PORT;
const server = http.createServer();
server.listen(port, hostname, () => {
  SampleContainer();
});