// function hide(params) {
//   // const welcomeEl = document.getElementById('welcome-el')

// // const name = 'Per'
// // const greeting = 'Welcome Back'

// // welcomeEl.innerText = greeting + ', ' + name

// // console.log(name + '');

// // let errPara = document.getElementById('error')

// // function purchase() {
// //   console.log('he');
// //   errPara.textContent = 'Something went wrong, Please try again';
// // }

// //------------2---------------

// // const num1 =5;
// // const num2 =2;

// // document.getElementById('num1-el').textContent = num1;
// // document.getElementById('num2-el').textContent = num2;
// // const result = document.getElementById('el')


// // function show(calc) {
// //   result.textContent ='Result: ' +  calc
// // }

// // function add() {
// //   let calc =  num1 + num2
// //   show(calc)
// // }

// // function sub() {
// //   let calc =  num1 - num2
// //   show(calc)
// // }

// // function mul() {
// //   let calc =   num1 * num2
// //   show(calc)
// // }

// // function div() {
// //   let calc =   num1 / num2
// //   show(calc)

// // }


// let age = 21
// if (age < 21) {
//   ('Cant buy booze');
// }else {
//   ('Can buy booze');
// }

// age = 99
// if (age < 100) {
//   ('Not eligible yet');
// } else if (age === 100){
//   ("Here's your card, you earned it");
// } else {
//   ('You can never get a card again, but good job');
// }


// const person = {
//   name: 'yatin',
//   age: 23,
//   country: 'Australia',
//   logData() {
//     return `${this.name} is ${this.age} years old and lives in ${this.country}`
//   }
// }

// let age = 67

// if (age < 6) {
//   message = 'free'
// }else if (age >=6 && age <= 17) {
//   message = 'child discount'
// } else if (age >= 27 && age < 66) {
//   message = 'full price'
// } else if (age >= 66 && age < 110 ) {
//   message = 'senior citizen discount'
// }else {
//   message = 'please contact customer service'
// }
// console.log(message);

// const largeCountries = ['China', 'India', 'USA', 'Indonesia', 'Pakistan']

// for (let i = 0; i < largeCountries.length; i++) {
//   const element = largeCountries[i];
//   console.log(element);
// }


// largeCountries.pop()
// largeCountries.push('Pakistan')
// largeCountries.shift()
// largeCountries.unshift('China')
// console.log(largeCountries);
// let dayOfMonth = 13;
// let weekDay = 'friday';

// if (weekDay === 'friday' && dayOfMonth === 13) {
//   'spooky face';
// }

// let hands = ['rock', 'scissor', 'paper']

// function random() {
//   return Math.floor(Math.random() * hands.length)
// }

// function randomPick() {
//   return hands[random()]
// }


// let fruits = ['or', 'ap', 'or', 'ap', 'ap']
// const apple = document.querySelector('.apple')
// const orange = document.querySelector('.orange')

// function shelfIt() {
//   let f= '';
//   for (const fruit of fruits) {
//     if (fruit === 'ap') apple.textContent += fruit + ' '
//     if (fruit === 'or') orange.textContent += fruit + ' '
//   }
//   return f
// }
// console.log(shelfIt());
// const inputEl = document.getElementById('input-el')
// const linksEl = document.getElementById('links-el')
// const btn = document.getElementById('input-btn')


// btn.addEventListener('click', save)


// let links = []

// function save() {
//   links.push(inputEl.value);
//   console.log(links);
//   displayLinks()
// }

// function displayLinks() {
//   let urls = ''
//   for (const link of links) {
//     urls += `${link}<br>`
//   }
//   linksEl.innerHTML = urls
// }

// const boxEl = document.getElementById('box-el')

// boxEl.addEventListener('click', open)

// function open() {
//   boxEl.textContent = 'box opened';
//   boxEl.classList.add('open');
//   setTimeout(() => {
//     boxEl.classList.remove('open')
//   }, 700);
// }

// const basePrice = 520;
// let discount = 120;
// let shippingCost = 12
// let shippingTime = '5-12 days'

// shippingCost = 15;
// shippingTime = '7- 12 days'
// const fullPrice = basePrice - discount + shippingCost

// console.log(`Total cost: $${fullPrice}. It will arrive in ${shippingTime}`);
// }

const container = document.querySelector('.container')
container.innerHTML = "<button id = 'buy-btn'>Buy!</button>"
console.log(container);


const buyBtn = document.getElementById('buy-btn')

buyBtn.addEventListener('click', buy)

function buy() {
  let p = document.createElement('p')
  p.textContent = 'Thanks for buying'
  container.appendChild(p)
  console.log(p);
  setTimeout(() => {
    container.removeChild('p')
  }, 1200);
}
