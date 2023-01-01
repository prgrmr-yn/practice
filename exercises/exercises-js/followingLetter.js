/*
  Write a program to replace every character in a given string with the character following it in the alphabet
*/

const followingAlphabet = (str) => {
  const string = str.split('').map((char =>{
    return String.fromCharCode(char.charCodeAt(0)+ 1)
  })).join('')
  return string
}

console.log(followingAlphabet('gdkkn')); //hello
console.log(followingAlphabet('gdkkm')); //hello
