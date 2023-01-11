console.log('Please provide 3 positive numbers ');

function digitChecker(num1, num2, num3) {
  if (num1 >= 0 && num2 >= 0 && num3 >= 0) {
    return {
      answer: (num1%10 === num2%10 && num2 % 10 === num3 % 10),
      message(){
        if (this.answer) {
         return  `yea mate, you got it right`
      }
    }}
  }else if (num1 <= 0 && num2 <= 0 && num3 <= 0) {
    console.log('bro, all the nums are not positive, how abour yu read instructions next time');
  }else if (num1 >= 0 || num2 >= 0 || num3 >= 0) {
    console.log('one of the number is not positive, please provide positive numbers');
  }else {
    console.log('invalid input');
  }
}

console.log( digitChecker(41, 41, 31).message());
