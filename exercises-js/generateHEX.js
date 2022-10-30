/*
  Generate random Hexadecimal number
*/
const getRandomHexNumber = () => {
  return Math.floor(Math.random()*16).toString(16)
}

console.log(getRandomHexNumber(3));// [1-10][a-f]

const getRandomHexColor = (num) =>{
  return '#' + Array.from({length:6}).map(e => num()).join('')
}
console.log(getRandomHexColor(getRandomHexNumber));// #c70043 like this
