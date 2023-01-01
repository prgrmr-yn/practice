/*
  Check the properties name of obj1 is the same in obj2
*/

console.log('hello');

const objA = {a: 1, b: 2, c: 3};
const objB = {a: 1, b: 1, c: 1};
const objC = {a: 1, b: 2, d: 3};

const objEqual = (a, b) => {
  return Object.keys(a).every(key => b[key]);
}

console.log(objEqual(objA, objB));// true
console.log(objEqual(objA, objC)); // false
