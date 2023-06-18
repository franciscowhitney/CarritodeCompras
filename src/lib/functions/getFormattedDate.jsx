const getFormattedDate = () => {
  let date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  let formattedMonth = month;
  let formattedDay = day;
  if (month < 9) formattedMonth = '0' + String(Number(month + 1));
  if (day < 9) formattedDay = '0' + String(Number(day + 1));
  return formattedDay + '/' + formattedMonth + '/' + year;
}

export default getFormattedDate;