let coinSides = ['heads','tails']
let coinPossibilities = Math.floor(Math.random()*coinSides.length);
let coinResult = coinSides[coinPossibilities];
console.log(coinResult)
let choice = prompt("Heads or tails? ",'heads')
let result = choice === coinResult ? 'won': 'lost';
let computerResult = choice ===coinResult ? 'lost': 'won'
console.log(`You ${result} , Computer ${computerResult}`)
