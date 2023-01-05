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



//Excercise 4
// Lap count

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


// BLACKJACK EXCERCISE

function card() {
  return Math.floor(Math.random()* 12)
}

let firstCard = card()
let lastCard =  card()
console.log(firstCard);
console.log(lastCard);
let sum = firstCard + lastCard
let blackJack21 = false;
let isAlive = true
function blackjack(sum) {
  if (sum < 21) {
    console.log('Do you want to draw a new card');

  } else if (sum === 21) {
    blackJack21 = true
    console.log('BLACKJACK');
  }  else{
    console.log('You are out of the game');
    isAlive = false
  }
}
blackjack(sum)
sum += card()
console.log(sum);
blackjack(sum)

if (blackJack21) {
  console.log("Here's your money");

}
