const current = new Date();

// first Date
const firstDate = new Date(current.getFullYear(), current.getMonth(), 1);
const formattedFirstDate = formatDate(firstDate);

// next Month
const nextMonth = current.getMonth() + 1;
const nextMonthFirstDate = new Date(current.getFullYear(), nextMonth, 1);

// last Date
const lastDate = new Date(nextMonthFirstDate.getTime() - 1);
const formattedLastDate = formatDate(lastDate);
const formatDate = (date) => {
  const year = date.getFullYear();
  const month  = String(date.getMonth() + 1).padStart(2, '0');
  const day  = String(date.getDay() + 1).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// export function
export const dateParams = () => {
  return {
    firstDate: formattedFirstDate,
    lastDate: formattedLastDate
  }
}