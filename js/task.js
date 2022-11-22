function fizzbuzz(num) {
  if (num % 15 === 0) {
    console.log(num +' is a fizz buzz');
  }else if (num % 5 ===0) {
    console.log(num +' is a buzz');
  }else if (num % 3 ===0) {
    console.log(num + ' is a fizz');
  }
}

function fb(num) {
  for (let i= 1; i<num; i++) {
    fizzbuzz(i)
  }
}

fb(45)
