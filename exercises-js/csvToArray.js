/*
  Converts a comma seperated values(CSV) string to a 2d Array
*/

const parseCSV = (csvString) =>{
  return csvString.split('\n').map(row => row.split(','))
}
str = `abc, def, ghi
jkl, mno, pqr
abd, gad, gds`
console.log(parseCSV(str))
