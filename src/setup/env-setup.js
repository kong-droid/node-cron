import dotenv from "dotenv";

const envSetup = () => {
  dotenv.config({ path: process.env.npm_lifecycle_event + '.env' });
};

export default envSetup;