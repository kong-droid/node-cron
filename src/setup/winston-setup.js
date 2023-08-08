import winston from "winston";

const winstonSetup = () => {
  const logger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    defaultMeta: {
      service: "user-service"
    },
    transports: [

    ]
  })
};

export default winstonSetup;