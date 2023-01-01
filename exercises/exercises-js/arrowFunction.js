// practicing arrow function and closure


const wish = (name)=> {
  return age =>{
    return `Happy birthday ${name}! You are ${age}, congrats`;
  }
}
const age = wish('Yatin')
console.log(age(26));
