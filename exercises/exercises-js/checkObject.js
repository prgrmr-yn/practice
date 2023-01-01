/*
  Write a js program to create a new string adding 'New!' in front of a given string begins with 'New!' already then return the original string
*/

const addNew = (str) => {
 return str.indexOf('New!') === 0 ? str : `New! ${str}`;
}

console.log(addNew('offers'))
