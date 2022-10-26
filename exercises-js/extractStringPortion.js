/*
  Write a program to extract the first half of th string of even length
*/


const firstHalf = (str) => {
  const halfString = (str.length/2) % 2 === 0 ? str.length/2 : str.length/2 +1
  return str.slice(0, halfString)
}

console.log(firstHalf('Temples'));
