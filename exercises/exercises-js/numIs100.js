/*
  Write a program to chech two nums and return true if one of the num is 100 o if the sum of two nums is 100
*/

const isEqualTo100 = (a,b) => {
  return a === 100 || b === 100 || (a + b) === 100
}

console.log(isEqualTo100(10,100));//true
console.log(isEqualTo100(100,10)); // true
console.log(isEqualTo100(90,20)); // false
console.log(isEqualTo100(20, 80)); // true
