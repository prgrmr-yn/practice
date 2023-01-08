//Exercise 1
// create two variables, myAge and humanDogRatio
// Multiply the two together and store the result in myDogAge
// Log myDogAge to the console

const myAge = 25;
const humanDogRatio = 7
let myDogAge = myAge * humanDogRatio;
myDogAge;

// Excercise 2
// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100
// Decrease it down to 25, and then finally increase it to 70

let bonusPoints = 50;
bonusPoints += 50;
bonusPoints -= 75;
bonusPoints += 45;


// Excercise 3
// People counter
// initialize the count as zero
// listen for clicks
// increment on clicks
// show on html
let count = 0;
const incButton = document.getElementById('count-el');
const saveEl = document.getElementById('save-el');

function showCount() {
  incButton.innerText = count;
}

function resett() {
  count = 0
  showCount()
}

function increment() {
  count++;
  showCount()
}

function decrement() {
  count--
  if (incButton.innerText <= 0) resett();
  showCount()
}

function save() {
  saveEl.textContent += count + ' - '
  resett()
}


// Exercise
// Concatenate the string using messed up method
let username = 'per'
let message = 'You have three notifications'
let messageToUser = message + ',  ' +username + '!'



// Excercise 4
// Lap count
function lapCount(params) {


  let lapsCompleted = 0
  // Create a function that increments the lapsCompleted variable with one
  // Run it three times

  function incrementLap() {
    lapsCompleted++
  }

  incrementLap()
  incrementLap()

  lapsCompleted; // console.log();

  // Drag my number
  incButton.draggable = true

  let myPoints = 3;

  function add3Points() {
    myPoints += 3
  }

  function remove1Points() {
    myPoints--
  }

  add3Points();
  add3Points();
  add3Points();
  remove1Points();
  remove1Points();

  myPoints // console.log();


}

// Excercise 5
// BLACKJACK EXCERCISE

const cardTitle = document.getElementById('card-title');
const cardsEl = document.getElementById('cards-el')
const sumEl = document.getElementById('sum-el')
const messageEl = document.getElementById('message-el')
const initialEl = document.getElementById('initial-el')
const endGameEl = document.getElementById('end-game-el')
const anotherCardEl = document.getElementById('another-card-el')
const noEl = document.getElementById('no-el')
const playAgainEl = document.getElementById('play-again-el')
const playerEl = document.getElementById('player-el')

let sum = 0;
let cards = []

const player = {
  name: 'Yatin',
  chips: 150,
  hello() {
    console.log('heisann');
  }
}
player.hello();

playerEl.textContent = `${player.name}: $${player.chips}`

// i wish stimulus controller was here hahhahaha
function hideElement(...el) {
  for (const e of el) {
    e.style.display = 'none'
  }
}

function showElement(el) {
  el.style.display = 'inline-block'
}

hideElement(anotherCardEl, endGameEl, playAgainEl, noEl)

function gameOver() {
  cards = [];
  sum = 0;
  cardTitle.style.display = 'block'
  hideElement(endGameEl, anotherCardEl, noEl)
  showElement(playAgainEl)

}

function card() {
  let random =  Math.floor(Math.random()* 13) + 1
  console.log( random);
  if (random === 1){
    console.log(random);
    return 11
  }else if (random > 10){

    return 10
  }
  return random
}

function initialCards(){
  cards.push(card())
  cards.push(card())
  sum += cards[0] + cards[1]
  hideElement(cardTitle)
  hideElement(initialEl)
  hideElement(playerEl)
  showElement(endGameEl)
  showElement(noEl)
  renderGame(sum, cards[0], cards[1]);
  anotherCardEl.style.display = 'inline-block'
  messageEl.style.display = 'block'
}

function anotherCard(params) {
  let oldSum = sum;
  let newCard = card()
  sum += newCard
  cards.push(newCard)
  renderGame(sum, oldSum, newCard)
}

function noMoreCard() {
  hideElement(noEl)
  gameOver()
}

function renderGame(sum, firstCard, secondCard) {
  let blackJack21 = false;
  let isAlive = true
  let gameFinish = false
  if (sum < 21) {
    message = 'Do you want to draw a new card';

  }else if (sum === 21) {
    message = 'BLACKJACK, YOU WON!';
    blackJack21 = true
    gameFinish = true

  }else{
    message = 'You are out of the game';
    isAlive = false
    gameFinish = true
  }
  messageEl.textContent = message
  sumEl.textContent = `Sum: ${sum}`

  cardsContent = '';
  for (const [i, card] of cards.entries()) {
    if (i === cards.length - 1) {
      cardsContent += `${card}`
    }else {
      cardsContent += `${card}----`
    }
  }
  cardsEl.textContent = `Cards: ${cardsContent}`

  if (blackJack21) {
  console.log("Here's your money");
  }
  if (gameFinish) {
    gameOver()
    setTimeout(() => {
      alert(`Gameover! ${message}`)
    }, 500);
  }
}

function endGame() {
  sum = 0;
  cards = []
  hideElement(messageEl, endGameEl, anotherCardEl)
  showElement(initialEl)
  cardTitle.style.display = 'block'
  cardsEl.textContent = 'Cards: '
  sumEl.textContent = 'Sum: '

}

function playAgain() {
  endGame()
  hideElement(playAgainEl, noEl)
}

// Escercise 5
//
