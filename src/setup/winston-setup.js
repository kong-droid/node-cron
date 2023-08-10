import  *  as  winston  from  'winston';
import  'winston-daily-rotate-file';
import envSetup from "./env-setup.js";

envSetup();
const winstonSetup = () => {

  const transport = new winston.transports.DailyRotateFile({
    filename: 'application-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d'
  }).on('rotate', (oldFilename, newFilename) => {
    // do something fun
  });

  const consoleOpts = {
    handleExceptions: true,
    level: 'info',
    format: combine(
        colorize({ all: true }),
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' })
    )
  }

  const logger = winston.createLogger({
    level: ,
    format: winston.format.json(),
    transports: [
      transport
    ]
  });

};

export default winstonSetup;