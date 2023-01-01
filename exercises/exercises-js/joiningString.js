/*
  Write a js program to create a new string from a given string taking the first 3 characters and the last 3 characters of a string and adding them together. The string length must be 3 or more, if not , the original string is returned.
*/

const makeNewString = (str) => {
  const joinStr = str.slice(0,3) + str.slice(-3);
  return str.length < 3 ? str : joinStr;;
}

console.log(makeNewString('abc')); // abc
console.log(makeNewString('abcdef')); // abcdef
console.log(makeNewString('abcdef123')); // abc123
