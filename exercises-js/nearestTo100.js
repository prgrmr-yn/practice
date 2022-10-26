/*
  Given two values, write a JavaScript program to find out which one is nearest to 100
*/

const closeTo100 = (a, b) => {
  const closeNum = (100-a) > (100-b) ? b : a;
  return `${closeNum} is close to 100`
}
console.log(closeTo100(90, 10)); // 90 is close to 100
console.log(closeTo100(10, 70)); // 70 is close to 100
