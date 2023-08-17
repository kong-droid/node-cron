import dotenv from 'dotenv';

const EnvSetup = () => {
  dotenv.config({ path: process.env.npm_lifecycle_event + '.env' });
};

export default EnvSetup;