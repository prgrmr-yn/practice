/*
  Write a js program to check whether a given array of integers is sorted in ascending order
*/

const isAscending = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i + 1];
    if (element < arr[i]) return false
  }
  return true
}

console.log(isAscending([1,2,3,4,5,6,7,8 ])) // true
console.log(isAscending([1,2,3,4,5,6,9,8 ])) // false
