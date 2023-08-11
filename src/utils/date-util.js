const current = new Date();

// first Date
const firstDate = new Date(current.getFullYear(), current.getMonth(), 1);

// next Month
const nextMonth = current.getMonth() + 1;
const nextMonthFirstDate = new Date(current.getFullYear(), nextMonth, 1);

// last Date
const lastDate = new Date(nextMonthFirstDate.getTime() - 1);

const formatDate = (date) => {
  const year = date.getFullYear();
  const month  = String(date.getMonth() + 1).padStart(2, '0');
  const day  = String(date.getDay() + 1).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// formatted Date
const formattedFirstDate = formatDate(firstDate);
const formattedLastDate = formatDate(lastDate);

// export date return function
export const dateParams = () => {
  return {
    firstDate: formattedFirstDate,
    lastDate: formattedLastDate
  }
}