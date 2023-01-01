/*
  Write a js program to get the current date.
  Expected Output :
    mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

const  formatDate = (date = new Date()) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  //return[day, month, year]
  return `${day}/${month}/${year}`
}
console.log(formatDate());
