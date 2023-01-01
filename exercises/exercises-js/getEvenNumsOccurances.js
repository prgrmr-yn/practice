/*
  Write a js program to find the even nums in a array of integers
*/

const countEvenNumbers = (arr) => {
  return arr.filter((num) => {
    return num % 2 == 0
  }).length
}

console.log(countEvenNumbers([1,2,3,4,5,6]));// 3
console.log(countEvenNumbers([2,2,2,2,2,2]));// 6
console.log(countEvenNumbers([3,1,5,7,9,100,12]));// 2
