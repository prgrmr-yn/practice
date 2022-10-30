/*
  Checks an array value
*/

//Higher order function
// console.log([1,23,4,5,3].every(x => x < 300));

array = [1,2,3,4,5,6,7];

const isEveryElement = (arr, fn) => {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if(fn(element)) {return true}
    return false
  }
}

console.log(isEveryElement(array, c => c < 300));
console.log(isEveryElement(array, c => c > 300));
