const secretWord = 'ruby';
let guess = '';
let guessCount = 1;
let guessLimit = 3;
let outOfGuesses = false;
guess = prompt('whats rb short for? ')

while (guess !== secretWord && !outOfGuesses){
  if (guessCount < guessLimit){
    if(guess !== secretWord){
      guess = prompt ('Wrong answer, try again')
    }
    guessCount ++

  }else{
    outOfGuesses = true
  }
}

if(guess === secretWord){
  alert('you won')
}else{
  alert('you lost sorry')
}
