import moment from 'moment-timezone';

// base on KST
moment().tz('Asia/Seoul');

// first Date
const firstDate = moment().subtract(2, 'months')
    .startOf('month').format('YYYY-MM-DD');

// last Date
const endDate = moment().subtract(1, 'months')
    .endOf('month').format('YYYY-MM-DD');

export const dateParams = () => {
  return {
    startDate: firstDate,
    endDate: endDate
  };
};