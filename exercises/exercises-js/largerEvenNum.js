const largestEvent = (arr) => {
  return Math.max(...arr.filter(num  => {
    return num % 2 === 0
  }))
}
arr = [1,2,3,5]
console.log(largestEvent([1,2,3,54,6]));
console.log(largestEvent([1,2,3,54,600]));
