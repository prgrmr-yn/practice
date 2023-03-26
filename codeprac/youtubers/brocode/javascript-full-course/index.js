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
