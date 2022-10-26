
const countEvenNums = (arr) => {
  return arr.filter(num => {
    return num  % 2 == 0
  }).length
};

const createArrayOfNums = (num) => {
  const returnArray = [];
  for (let i = 1; i <= num; i++) {
    returnArray.push(i)
  }
  return countEvenNums(returnArray)
}

console.log(createArrayOfNums(60))
