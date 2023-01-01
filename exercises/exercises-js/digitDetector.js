/*
 Write a js program to replace the first figit in a string (should contains at lease digit) with $ character.
*/

const replaceFirstDigit = str => {
  return str.replace(/\d/, '$')
}

console.log(replaceFirstDigit('hello1world'));// hello$world
console.log(replaceFirstDigit('hello1world2'));// hello$world2
