/*
  Write a js program to check a given string contains 2 to 4 occurances of a specified character
*/

const countChars = (str, char) => {
  return str.split('').filter(ch =>ch === char).length
}


const contains2to4 = (str, char) => {
  return countChars(str, char) >=2 && countChars(str, char) <= 4
}

console.log(countChars('helo', 'l'));// 1
console.log(contains2to4('helo', 'l'));// false

console.log(countChars('hello', 'l')); // 2
console.log(contains2to4('hello', 'l')); // true
