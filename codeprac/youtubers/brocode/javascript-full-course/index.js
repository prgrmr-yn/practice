const l = console.log;
// Nested Loop

function drawTriange() {

  let symbol = prompt('Enter symbol')
  let rows = prompt('Enter # of rowss');
  let columns = prompt('Enter # of columns');

  for (let i = 0; i < rows ; i++) {
    for (let j = 0; j < columns; j++) {
      document.getElementById('draw').innerHTML += symbol
    }
    document.getElementById('draw').innerHTML += '<br>'
  }
};


function math() {
  let x = 3.14;
  // x = Math.ceil(x);
  // x = Math.pow(x, 2);
  x = Math.PI;
  console.log(x);
};


function hypotnuse() {
  document.getElementById('submit-button').onclick = () => {

  }
  let a = document.getElementById('aa-label').value
  // a = Number(a);

  let b = document.getElementById('bb-label').value
  // b = parseInt(b,10)

  console.log([a,b]);
  c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
  console.log(c);

  document.getElementById('c-label').textContent = 'hello'

};

function counter() {
  let count = 0;
  let display = document.getElementById('count-label')

  document.getElementById('decrease-button').onclick = () => {
    count-- ;
    display.textContent = count
  }

  document.getElementById('increase-button').onclick = () => {
  count++ ;
  display.textContent = count
  }

  document.getElementById('reset-button').onclick = () => {
    count = 0 ;
    display.textContent = count
  }
};

function rand() {
  document.getElementById('roll-button').onclick = () => {
    let x = Math.floor(Math.random() * 20) + 1
  }
  let y = Math.floor(Math.random() * 20) + 1
  let z = Math.floor(Math.random() * 20) + 1

  addText('x-label', 'x', x)
  addText('y-label', 'y', y)
  addText('z-label', 'z', z)

  function addText(element, val, el) {
    document.getElementById(element).innerHTML = `${val}: ${el}`
  }
};

function sMethods() {
  let username = 'bro Code '
  let phoneNumber = '123-456-789'
  console.log( username.length);
  console.log(username.charAt(0).toUpperCase() + username.slice(1));
  console.log(username.indexOf('Co'));

  let pn = phoneNumber.replaceAll('-', '.')
  console.log(pn);
  let fullName = 'Bro Code'
  let firstName = fullName.slice(0, fullName.indexOf(' '))
  let lastName = fullName.slice(fullName.indexOf(' ') + 1)

  console.log('First name: ' + firstName);
  console.log(lastName);

  let userName = 'bro'

  let letter = userName.charAt(0).toUpperCase().trim()
  console.log(letter);
};

function statements() {


  let age = 66;
  if (age >= 65) {
    console.log('You are a senior');
  } else if (age > 18) {
    console.log('You can buy alcohal');
  }else {
    console.log('Sorry cant buy alcohal');
  }

  let online = true;

  if (online) {
    console.log('you are online');
  }else{
    console.log('offline');
  }

};

function cBox(params) {
  document.getElementById('my-button').onclick = () => {
    const myCheckBox = document.getElementById('my-check-box');
    if (myCheckBox.checked){
      console.log('you are subscribed');
    }else {
      console.log('you are unsubscribed');
    }
  }
};

function rBox() {

  document.getElementById('sub-button').onclick = () => {
    rBox()
  }
  const visaBtn = document.getElementById('visa-btn');
  const mcBtn = document.getElementById('mc-btn');
  const paypalBtn = document.getElementById('paypal-btn');

  if (visaBtn.checked) {
    console.log('You are paying with visa');
  } else if (mcBtn.checked) {
    console.log('You are paying with mastercard');
  } else if (paypalBtn.checked) {
    console.log('You are paying with paypal');
  }
};

function tempEx() {

  let grade = 'A'
    switch (grade) {
      case 'A': console.log('You did great!');
        break;
      case 'B': console.log('You did good!');
        break;
      case 'C': console.log('You did okay!');
        break;
      case 'D': console.log('You passed... barely!');
        break;
      case 'F': console.log('You failed! eww');
      default:
        break;
    }


  let temp = -14;

  if (temp >= 0) {
  console.log('Its cold');
  }else if (temp < 0) {
    console.log('Its freezing');
  }


  let username;

  do {
    userName = window.prompt('Enter your name')
  }while (userName == '')

  console.log('Hello ' + userName);

  for (let i = 0; i < 30; i++) {
    if (i === 12) break
  }

  let rows = window.prompt('Enter number of rows')
  let columns = window.prompt('Enter number of columns');

};

function drawRectangle() {


  document.querySelector('#draw-submit').onclick = () => {
  let symbol = readVal('my-symbol');
  let row = readVal('my-row');
  let column = readVal('my-column');

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      document.getElementById('draw-here').innerHTML += symbol;
    }
    document.getElementById('draw-here').innerHTML += `<br>`
  }


  }

  function readVal(val) {
    return document.getElementById(val).value
  }

};

function toLocaleS(){

  let num = 121212;
  console.log(num.toLocaleString());
  num.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
  num.toLocaleString('hi-EN', {style: 'currency', currency: 'INR'})
  num = 94;
  console.log(num.toLocaleString(undefined, {style: 'unit', unit: 'celsius'}));

};

function numGuessingGame(){



  const answer = Math.floor(Math.random() * 10) + 1;
  let guesses = 0;
  console.log(answer);

  const submitEl = document.getElementById('submit-button')

  submitEl.onclick = ()=> {
    let guess = document.getElementById('num').value
    guesses += 1;

    if (guess == answer) {
      alert(`${answer} is the #. It took you ${guesses} guesses`)
    }else if  (guess > answer){
      alert('too big')
    }else if  (guess < answer){
      alert('too small')
    }
  }
};

function toCelciusFahrenheit() {




  let temp = 32;

  function toCelsius(temp) {
    return (temp-31)* (5/9)
  }


  function toFahrenheit(temp){
    return temp * 9/5 + 32
  }

  document.getElementById('submit-button').onclick = () => {
    let temp = document.getElementById('text-box').value
    temp = parseInt(temp)

    const cButton = document.getElementById('c-button')
    const fButton = document.getElementById('f-button')
    const resultEl = document.getElementById('result-button')

    if (cButton.checked){
      temp = toCelsius(temp)
      resultEl.innerHTML = `result: ${temp.toLocaleString(undefined, {style: 'unit', unit: 'celsius'})}`;
    }else if (fButton.checked){
      temp = toFahrenheit(temp)
      resultEl.innerHTML = `result: ${temp.toLocaleString(undefined, {style: 'unit', unit: 'fahrenheit'})}`;
    }else {
      console.log('must select something');
    }
  }
};

function arraysKnol() {




    let fruits = ['apple', 'orange', 'banana', 'kiwi', 'mango', 'watermelon']

    let index = fruits.indexOf('dapple')
    console.log(index);
    index = fruits.indexOf('apple')
    console.log(index);

    let prices = [4, 54, 35, 65]

    for (const price of prices) {
      console.log(price);
    }

    for (let i = prices.length -1; i >=0 ; i--){
      const element = prices[i];
      console.log(element);
    }


    // fruits = fruits.sort()
    fruits = fruits.sort().reverse()

    for (const fruit of fruits) {
      console.log(fruit);
    }

    let veggies = ['carrots', 'zuccini', 'onion', 'tomatoes'];
    let meats = ['chicken', 'beaf', 'fish']

    let groceries = [fruits, veggies, meats]

    for (const lists of groceries) {
      for (const food of lists) {
        console.log(food);
      }
    }

    let nums = [1,2,3,4,5,5,67]
    console.log(...nums);

    console.log( Math.max(...nums));

    let a = 1;
    let b = 2;
    let c = 3;
    let d = 4;
    let e = 5;

    console.log(sum(a, b, c,d));

    function sum(...sums) {
      let total = 0;
      for (const sum of sums) {
        total += sum
      }
      return total
    }

};

function arrayMethods() {
    sum(2,3,displayConsole)


  function sum(x, y, callBack) {
    let result = x + y;
    callBack(result);
  }

  function displayConsole(output) {
    console.log(output);
  }

  function displayDom(output) {
    document.getElementById('my-label').innerHTML = output
  }

  let students = ['jerimeh', 'spong', 'patrick']

  students.forEach(capitalize)

  function capitalize(element, index, array) {
    return array[index] = element[0].toUpperCase() + element.slice(1)
  }

  let nums = [1, 2, 3, 4, 5];

  function square(element) {
    return Math.pow(element, 2)
  }

  let mappedArr = nums.map(square);

  console.log(mappedArr);

  function cube(element){
    return Math.pow(element, 3)
  }

  let cubedArr = nums.map(cube)
  console.log(cubedArr);


  let ages = [18, 23, 43, 44, 16]
  let adults = ages.filter(checkAge)

  function checkAge(element) {
    return element >= 18
  }

  console.log(ages);
  console.log(adults);

  let over500Tax = 5;
  let prices = [18, 223, 143, 44, 16];
  let totalPrices = prices.reduce(checkout, over500Tax)


  function checkout(total, element) {
    return total + element
  }

  console.log(`The total is $${totalPrices}`);


  let grades = [100, 50, 60, 70, 80, 90]
  grades = grades.sort(descendingSort)

  function descendingSort(x, y) {
    return y - x
  }

  console.log(grades);

};

function increaseOrDecrease() {
  let count = 0;


  document.getElementById('increase-btn').onclick = ()=> {
    count += 1;
    document.getElementById('my-label').innerHTML = count;
  }

  document.getElementById('decrease-btn').onclick = ()=> {
    count -= 1;
    document.getElementById('my-label').innerHTML = count;
  }
  let gradesS = [200, 33, 43, 54, 52, 139]

  gradesS.sort((a,b) =>b-a )

  let cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

  console.log(cards);

  function shuffle(arr) {
    let currentIndex = arr.length;

    while (currentIndex) {
      let randomIndex = Math.floor(Math.random()* arr.length)
      currentIndex -= 1;

      let temp = arr[currentIndex]
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = temp;
    }
  }

  shuffle(cards)
  console.log(cards);
};


function learnMap() {


  let userName = 'Bro';
  let userInbox = 0;

  function login() {
  displayUserName()
  displayUserInbox()

  function displayUserName() {
    console.log(`Welcome ${userName}`);
  }

  function displayUserInbox() {
    console.log(`You have ${userInbox} new messages`);
  }
}

login()


const store = new Map([
  ['t-shirt', 20],
  ['jeans', 30],
  ['socks', 10],
  ['underwear', 50]
])


store.forEach((value, key) =>{
  console.log(`${key}: ${value}`);
})

let shoppingCart = store.get('t-shirt')
store.set('socks', 20)
store.delete('jeans')
shoppingCart += store.get('socks')
console.log(shoppingCart);

console.log(store);
console.log(store.has('underwear'));
console.log(store.size);

};


function classObject(){


  const car = {
    model: 'Mustang',
    color: 'red',
    year: 2023,
    drive(){
      console.log('you will now drive the ' + this.model
      );
    },
    brake() {
      console.log('You are now breaking the ' + this.model);
    },
    hi: () =>{
      console.log();
    }
  }


  car.drive();
  car.brake();
  car.hi()

  class Player {
    score = 0;

    pause(){
      return 'You paused the game';
    }

    exit(){

      return 'You exited the game';
    }
  }

  const player1 = new Player();
  console.log(player1);
  player1.score += 1;

  console.log(player1.pause());

  class Student {
    constructor(name, age, gpa){
      this.name = name;
      this.age = age;
      this.gpa = gpa;
    }

    study() {
      return `${this.name} is studying`
    }
  }

  const student1 = new Student('michael', 20, 3.4)
  const student2 = new Student('sandy', 30, 2.4)

  console.log(student1);

  console.log(student1.age);


  class Car{
    static numberOfCars = 0;
    constructor(model){
      this.model = model;
      Car.numberOfCars += 1;
    }

    static startRace(){
      console.log('3...2...1..GO');
    }
  }

  const car1 = new Car('BMW')
  const car2 = new Car('Mercedes')
  const car3 = new Car('Audi')

  console.log([car1, car2, car3]);

  console.log(Car.numberOfCars);


};

function classInDetail() {



  class Animal{
    alive = true;

    constructor(name){
      this.name = name;
    }
    eat(){
      return `This ${this.name} is eating`
    }
    sleep(){
      return `This ${this.name} is sleeping`
    }

  }

  class Rabbit extends Animal {

    constructor (name,age){
      super(name)
      this._age = age
      this._energy = 100
    }

    get age(){
      return `${this._age} years old`
    }
    run(){
      return `This ${this.name} is running and he is only ${this.age}`
    }
  }

  const rabbit1 = new Rabbit('zoomba', '2');
  console.log(rabbit1.run());
  console.log(rabbit1);


  class Car {
    constructor(power){
      this._gas = 25;
      this._power = power;
    }

    get power(){
      return `${this._power}hp`;
    }

    get gas(){
      return `${this._gas}L (${this._gas / 50 * 100}%)`
    }

    set gas(value){
      if (value > 50){
        value = 50
      } else if(value > 0){
        value = 0
      }else{

      }
      this._gas = value;
    }
  }

  let car = new Car(400)
  console.log(car.power);
  console.log(car.gas);


  class Carr {
    constructor(model, year, colour){
      this.model = model
      this.year = year
      this.colour = colour
    }

    drive(){
      console.log(`You drive the ${this.colour} ${this.model}`);
    }

  }

  function displayInfo(car){
    console.log([car.model, car.year, car.colour]);
  }

  let carr1 = new Carr('mustang', 2021, 'red')
  let carr2 = new Carr('mustang', 2021, 'green')

  let carrs = [carr1, carr2]


  class Card {
    constructor(value, suit){
      this.value = value;
      this.suit = suit
    }
  }

  let card1 = new Card('A', 'Hearts')
  let card2 = new Card('A', 'Spaded')
  let card3 = new Card('A', 'Diamonds')

  let cards = [card1, card2, card3];

  console.log();
};

function timeOutAndErrors() {



  try {
    let x = 2
    // let x = window.prompt('Enter a #')
    x = Number(x);

    if (isNaN(x)) throw "That wasn't a number!"
    if (x == '') throw 'That was empty'
  }
  catch(err){
    console.error(err)
  }
  finally{
    l('finally')
  }


  function firstMessage() {
    alert(`Buy this course for $500`)
  }

  function secondMessage() {
    alert(`This is not a scam`)
  }
  function thirdMessage() {
    alert(`This is deffo not a scam`)
  }


  let timer1 = setTimeout(firstMessage, 3000);
  let timer2 = setTimeout(secondMessage, 5000);
  let timer3 = setTimeout(thirdMessage, 7000);

  document.getElementById('my-btn').onclick = function () {
    clearTimeout(timer1)
    clearTimeout(timer2)
    clearTimeout(timer3)
    alert('Thanks for buying')
  }


};

function clock() {



  const myLabel = document.getElementById('my-label');

  update()
  setInterval(update, 1000);

  function update() {
    let date = new Date()
    myLabel.innerHTML = formatTime(date);

    function formatTime() {
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      let amOrPm = hours >= 12 ? 'pm': 'am';
      hours = ( hours % 12 ) || 12

      hours = formatZeroes(hours);
      minutes = formatZeroes(minutes);
      seconds = formatZeroes(seconds);

      return `${hours}:${minutes}:${seconds} ${amOrPm}`
    }

    function formatZeroes(time) {
      time = time.toString();
      return time.length < 2 ? '0' + time : time
    }
  }
};

function promiseExample() {

  //start
  console.time('response time')
  // alert('clik the ok button')
  // start end
  console.timeEnd('response time')

  const promise = new Promise((resolve, reject) =>{
    let fileLoaded = false;

    if (fileLoaded){
      resolve('File loaded')
    }else {
      reject('File not loaded')
    }
  })

  promise.then((res)=>{
      console.log(res);
    })
    .catch(err =>{
      console.log(err);
    });


  const prom = time => new Promise(resolve =>{
    setTimeout(resolve, time);
  })

  prom(3000).then(()=>{
    console.log('Ta');
  })
}

function asyncAwait() {

  async function loadFile() {
    let fileLoaded = false;

    if (fileLoaded){
      return 'File Loaded'
    }else {
      throw 'File not loaded'
    }
  }

  // loadFile().then(val =>{
  //   console.log(val);
  // }).catch(err=>{
  //   console.log(err);
  // })

  async function startProgress() {
    try {
      let message = await loadFile()
      console.log(message);
    }catch(err) {
      console.log(err);
    }
  }

  startProgress()
}

function domFruits(params) {

  const fruits = document.getElementsByName('fruits')
  console.log(fruits);

  fruits.forEach(val =>{
    console.log(val.value);
  })


  let veggies = document.getElementsByTagName('li')
  console.log(veggies);


  let desserts = document.getElementsByClassName('desserts')
  console.log(desserts);

  const innerDiv = document.getElementById('inner-div')
  const outerDiv = document.getElementById('outer-div')
  console.log(innerDiv);
  console.log(outerDiv);

  innerDiv.addEventListener('click', changeRed);
  outerDiv.addEventListener('click', changeRed);

  function changeRed() {
    console.dir(this);
    console.log(this.id);
    this.style.backgroundColor = 'red';
  }

  function changeGreen() {
    this.style.backgroundColor = 'lightgreen'

    function doSomething() {
        alert('you click me')
      }

    const mytext = document.getElementById('my-text');
    const el = document.getElementById('my-div')

    mytext.onchange = doSomething
  }
}

function canvas() {



let canvas = document.getElementById('my-canvas');
console.log(canvas);

let context = canvas.getContext('2d');
context.beginPath()

// context.lineWidth = 10;
// context.moveTo(0, 0);
// context.lineTo(250, 250);
// context.lineTo(250, 500);
// context.stroke();


context.beginPath();

context.strokeStyle = 'blue'
context.fillStyle = 'lightblue'
context.moveTo(250, 0)
context.lineTo(0, 495)
context.lineTo(500, 495 )
context.lineTo(250, 0)
context.moveTo(500, 495)
context.lineTo(0, 150)
context.lineTo(500, 150)
context.lineTo(0, 495);
context.fill();

context.stroke();

}

// document.cookie = "firstName=SpongeBob; expires=Sun, 1 January 2024 12:00:00 UTC; path=/"
console.log(navigator.cookieEnabled);



function setCookie(name, value, daysToLive) {
  const date = new Date();
  date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000 )
  let expires = `expires = ${date.toUTCString()}`;
  document.cookie = `${name}=${value}; ${expires}; path=/`
}

function deleteCookie(name) {
  setCookie(name, null, null)
}

setCookie('email', 'yyy@y.com', 5);
// deleteCookie('email')
console.log(document.cookie);

function getCookie(name) {
  const cDecoded = decodeURIComponent(document.cookie)
  const cArray = cDecoded.split('; ')
  console.log(cArray);
  let result = null;

  cArray.forEach(e => {
    if (e.startsWith(name)){
      result = e.substring(e.indexOf('=') + 1)
    }

  })
  return result;
}


const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const submitButton = document.getElementById('submit-button')
const cookieButton = document.getElementById('cookie-button')

submitButton.addEventListener('click', ()=>{
  setCookie("firstName", firstName.value, 5)
  setCookie("lastName", lastName.value, 5)
})

cookieButton.addEventListener('click', () => {
  firstName.value = getCookie('firstName')
  lastName.value = getCookie('lastName')
})


document.getElementById('user').textContent = "Hi " + (getCookie('firstName') || 'user')
