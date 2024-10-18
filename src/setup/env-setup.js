import dotenv from 'dotenv';
import {environment} from "../utils/extensions.js";

const EnvSetup = () => {
  dotenv.config({
    path: '.' + environment() + '.env',
    encoding: 'UTF-8'
  });
};

export default EnvSetup;