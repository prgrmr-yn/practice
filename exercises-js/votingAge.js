let legalAge = prompt('How old are you')
let result = null
if(legalAge >= 18){
  result = 'You can vote'
}else{
  result = `Sorry, you cant vote today.
  Come back in ${18 - legalAge} years`
}
console.log(result)
