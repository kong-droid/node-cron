import winston from 'winston';
import winstonDaily from 'winston-daily-rotate-file';
import envSetup from "./env-setup.js";

envSetup();

const transport = new winstonDaily({
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

const logging = winston.createLogger({
  level: process.env.NODE_ENV_LOG_LEVEL_MESSAGE,
  format: combine(
      timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
      logFormat
  ),
  transports: [
    transport
  ]
});

if(process.env.NODE_ENV === 'local') {
  logging.add(new winston.transports.Console({
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple(),
    )
  }));
}

export default logging;