import winston from "winston";
import winstonDaily from "winston-daily-rotate-file";
import EnvSetup from "./env-setup.js";

EnvSetup();

const {combine, printf, timestamp, colorize, simple} = winston.format;

const logFormat = printf(({timestamp, level, message}) => {
  return `[${timestamp}] ${level} : ${message}`;
});

const transport = new winstonDaily({
  datePattern: "YYYY-MM-DD",
  dirname: process.env.NODE_ENV_LOG_FILE_DIR,
  filename: `node-cron_%DATE%.log`,
  maxFiles: 100,         // after 100 day delete..
  zippedArchive: false,  // zipping log files
});

const console = new winston.transports.Console({
  format: combine(
      colorize(),
      simple(),
      logFormat
  )
});


const Logging = winston.createLogger({
  level: process.env.NODE_ENV_LOG_LEVEL_MESSAGE,
  format: combine(
      timestamp({format: "YYYY-MM-DD HH:mm:ss"}),
      logFormat
  ),
  transports: [
    transport,
    console
  ]
});


export default Logging;