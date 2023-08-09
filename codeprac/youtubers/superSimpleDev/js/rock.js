// first we want computer to pick when new game begins
// listen from user input
// Compare the game to who has the bigger advantage
const gameElements = ['rock', 'paper', 'scissor'];
const buttons = Array.from(document.querySelectorAll('button'));
const display = document.getElementById('display');

function computerPick(){
  return gameElements[Math.floor(Math.random()* 3)]
}

function displayResults(userPick, compPick,result){
  display.textContent = `Your pick: ${userPick}, Computer picked ${compPick}: ${result.toUpperCase()}`
}

buttons.forEach((button)=>{
  button.addEventListener('click', (event)=>{
    const userPick = button.textContent;
    const compPick = computerPick();
    let result;
    if (userPick == compPick){
      result = 'draw'
    }else if ((userPick  == "rock" && compPick == 'paper') ||
    (userPick  == "paper" && compPick == 'scissor') ||
    (userPick  == "scissor" && compPick == 'rock')){
        result = 'you lost'
      }else{
        result = 'you won'
      }
      displayResults(userPick, compPick,result)
  })
})
