/*
  Write a js program to get the extention of a filename
*/

const getFileExtention = (str) => {
  const extention = str.slice(str.lastIndexOf('.'));
  return `Its a ${extention.slice(1)} file`
}

console.log(getFileExtention('index.html'));
console.log(getFileExtention('webpack.config.js'));
