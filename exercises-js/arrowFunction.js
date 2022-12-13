// practicing arrow function and closure


const wish = (name)=> {
  return age =>{
    console.log(`Happy birthday ${name}! You are ${age}, congrats`);
  }
}
const age = wish('Yatin')
age(26)
