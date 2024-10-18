export const options = () => {
  return {
    scheduled: true,
    timezone: "Asia/Seoul"
  }
};

export const environment = () => {
  let lifeCycleEvent = process.env.npm_lifecycle_event;
  switch (lifeCycleEvent) {
    case "local":
    case "dev":
    case "stage":
    case "prod":
      return lifeCycleEvent;
    case "start":
      return "prod";
    default:
      if(lifeCycleEvent.indexOf("build-") !== -1) {
        return lifeCycleEvent.replace("build-","");
      } else if(lifeCycleEvent.indexOf("build") !== -1) {
        return "prod";
      }
  }
}
