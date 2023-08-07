import nodeCron from 'node-cron';

const cron = (syntax, func) => {
  nodeCron.schedule(syntax, func = () => {

  })
}
export default cron;