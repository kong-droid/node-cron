import * as winston from 'winston';
import 'winston-daily-rotate-file';
import envSetup from "./env-setup.js";

envSetup();

const transport = new winston.transports.DailyRotateFile({
  level: process.env.NODE_ENV_LOG_LEVEL,
  datePattern: 'YYYY-MM-DD',
  dirname: process.env.NODE_ENV_LOG_FILE_DIR,
  filename: `belogger-cron_%DATE%.log`,
  maxFiles: 100,         // after 100 day delete..
  zippedArchive: false,  // zipping log files
});

const {combine, timestamp, printf} = winston.format;

const logFormat = printf(f => {
  return `${f.timestamp} ${f.level}: ${f.message}`;
});

export const log = winston.createLogger({
  level: process.env.NODE_ENV_LOG_LEVEL_MESSAGE,
  format: combine(
      timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
      logFormat,
      winston.format.colorize()
  ),
  transports: [
    transport
  ]
});