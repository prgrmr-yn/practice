// VARIABLES
var myName = 'Yatin'
let ourName = 'programmer'
const pi = 3.14

//INITIALIZINGA A VARIABLE
let a;

// ASSIGNING A VARIABLE USING ASSIGNMENT OPERATOR =
let b = 7

//REASSIGNING A VARIABLE
b = 9

// CAPITALIZATION MATTERS
//camelCase is diff than CamelCase

// ADDING NUMS
let sum = 10 + 10

// SUBRACTION OF NUMS
let difference = 54-3

// MULTIPLICATION
let product = 9 * 10

// DIVIDE A NUM
let quotient = 40/10

// INCRIMENTING A NUM
quotient++

// DECRIMENTING A NUM
quotient--

// MULTIPLY DECIMALS IS THE SAME AS OTHER NUMS
product = 3.5 * 3

// REMAINDER
let remainder = 11 % 3

// DOUBLE QUOTES IN STRINGS
let myStr = "\"double\" quotes"

// SINGLE QUOTES
myStr = '"double" quotes'

// BACKTICK QUOTES
myStr =  `"${remainder}"`

// PLAYING W ESCAPE STUFF
myStr = "firstLine\n\t\SecondLine"

// CONCATENATING A STRING USING +
myStr = "hello" + ' there';

// GET LENGTH OF THE STRING
myStr.length

// BRACKET NOTATION FOR THE STRING
myStr[0]

// STRINGS NOT MUTABLE
myStr = 'Hello Hello'

// GET LAST LETTER IN THE STRING
myStr[myStr.length-1]

// MAD LIB GAME
function wordBlanks(noun, adjective, verb, adverb) {
  let result = `The ${adjective} ${noun} ${verb} to the store ${adjective}.`
  return result
}

wordBlanks('dog', 'big', 'ran', 'quickly');
wordBlanks('bike', 'slow', 'flew', 'slowly');

// CREATING AN ARRAY
let myArray = ['quincy', 1,'34', null, ['array', 'nested array']]

// ACCESS ARRAY WITH INDEXES
myArray[4][1]

// MODIFIYING AN ARRAY
myArray[1] = 45
myArray

// PUSHING(add) AN ARRAY AT THE END
let urArray = ['your', 'array']
myArray.push(urArray)

// POPING(remove) AN ARRAY AT THE END
myArray.pop()

// SHIFT(remove) THE ARRAY FROM THE START
myArray.shift()

// UNSHIFT(add) THE ARRAY AT THE START
myArray.unshift('quincy')

// MAKING REUSABLE FUNCTIONS
function ourReusableFunction() {
  return 'Hello world'
};

//FUNCTIONS WITH PARAMS AND ARGS
function summ(a,b) {
  let oopsglobal = 4
  // oopsglobal has local scope

  return [oopsglobal, a + b]
}
// console.log(summ(2,2));

// GLOBAL SCOPE WHEN DECLARING A VARIABLE
let myGlobal = 3
if(true){
  let myGlobal = 'hello';
  // local variable take presidence
  // console.log(myGlobal);
}

// USE RETURN TO GET THE OUTPUT
function timesFive(num) {
  return num * 5
}

// IF RETURN IS NOT THERE THEN FUNCTION OUTPUT UNDEFINED
function noReturn() {
  'df'
}

// ASSIGN RESULT TO A VARIABLE
let assignVar = timesFive(3)

//FIFO
function nextInLine(arr, item) {
  arr.push(item)
  return arr.shift()
}

let testArr = [1,23,4,55,3]

// `Before: ${JSON.stringify(testArr)}`;
// nextInLine(testArr, 5);
// `After: ${JSON.stringify(testArr)})`;

// INTRO TO BOOLEAN
function welcomeToBooleans() {
  return false
}

// CASE STATEMENTS
function welcomeToBooleans1(truee) {
  if (truee) {
    return 'yes its true'
  }else{
    return 'nah not true'
  }
}
welcomeToBooleans1(false);

// ASSIGNMENT OPERATOR
// =

// COMPARISON OPERATOR
// convert the type
1 == '1';

// STRICT EQUALITY OPERATOR
1 === '1';

// INEQUALITY OPERATOR
1 != 1;
// type conversion
1 !== '1'
// no type conversion

// GREATER THAN OP >
1 > 4
// GREATER THAN OR EQUAL TO OP >=
1 >= 1
// LESS THAN OP <
1 < 1
// LESS THAN OR EQUAL TO OP <=
1 <= 1

// AND LOGICAL OP
if (1 == 1 && 4==4) {
  'hoohoo';
}

// OR LOGICAL OP
if (1 != 1 || 4==4) {
  'hoohoo';
}

// ELSE STAT
if (1 != 1){
  console.log('df');
}else {
  'false';
}

// SWITCH STAT
let sw = 2
switch (sw) {
  case 1:
    console.log(1);
    break;
  case 2:
    2;
    break;
  default:
    console.log('not found');
    break;
}

(a > b) // return true or false by default

let aa =1
let bb = -1
if(aa < 0 || bb < 0){
  undefined;
}

// COUNTING CARDS
function cc(card) {
  let count = 0
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--
      break;
  }
  let holdbet = 'Hold'
  if (count > 0){
    holdbet = 'Bet'
  }
  return count + ' ' + holdbet
}
cc(3); cc('K');


let myCat = {
  name: 'buttercup',
  age: 3,
  "outdoor cat": true,
  color: 'ranga',
  favFood: ['dry food', 'bikkies']
}

myCat.name;
myCat['outdoor cat'];

// UPDATING VALUES
myCat.age = 4

// DELETE KEY VALUE
delete myCat.color
myCat // log it

function dayOfTheWeek(key) {
  let days = {
    mon: 'Monday',
    tue: 'Tuesday',
    wed: 'Wednesday',
    thu: 'Thursday',
    fri: 'Friday',
    sat: 'Saturday',
    sun: 'Sunday'
  }
  return days[key];
}
dayOfTheWeek('thu')

function checkObj(myObj, prop) {
  if(myObj.hasOwnProperty(prop)){
    return myObj[prop]
  }else {
    return 'not found'
  }
}
checkObj(myCat, 'name')

// ARRAYS IN OBJ AND MULTI-DIM OBJECTS
const obj = {
  artist: 'Billy Joel',
  formats: ['CD', '8T', 'LP'],
  objj: {
    hadAPartner: false
  }
}

obj.objj.hadAPartner // log it
const artists = {
  1:{
    name: 'John',
    tracks: ['track 1', 'track 2'],
    album: 'Slippery when wet'
  },
  2:{
    name: 'Lenon',
  }
}

const copyArtists = JSON.parse(JSON.stringify(artists));

function updateRecords(id, prop, value){
  if (value === ''){
    delete copyArtists[id][prop]
  }else if (prop === 'tracks'){
    copyArtists[id][prop]= copyArtists[id][prop]? copyArtists[id][prop]: []
    copyArtists[id][prop].push(value)
  }else {
    copyArtists[id][prop]= value
  }
  return copyArtists[id][prop]
}

updateRecords(2, 'tracks', 'test');
// WHILE LOOP
const myArr = [];
let i = 1
while (i< 5){
  myArr.push(i)
  i++
}
myArr // log it

// FOR LOOP
for (let i = 0; i < 4; i++){
  i // log it
}

let total = 0
for (let i of myArr){
  i //log it
  total += i
}

total; // log it

function MultiplyAll(mArr){
  let product = 1
  for  (let i of mArr){
    for (let j of i)
      product *= j; // log it

  }
}
MultiplyAll([[1,2,3],[4,5,6,7]])

// DO WHILE LOOP
i = 0
do {
  i // log it
  i++
}while (i> 5)


const arrOfObjs = [
  {
    fname: 'Peter',
    lname: 'Griffin',
    family: ['meg', 'chris']
  },
  {
    fname: 'Michael',
    lname: 'Scott',
    family: ['jen', 'judy']
  }
]

function lookUpProfile(fname, prop) {
  for (let i of arrOfObjs){
    if (i.fname === fname) {
      return i[prop] || 'no such prop'
    }else {
      return 'no such contact found'
    }
  }
}

lookUpProfile('Peter', 'family'); // log it

function randomFraction(min, max){
  return Math.floor(Math.random()*(max - min + 1)+ min)
}
randomFraction(3,10);

// PARSE INT
function cs(str) {
  parseInt(str,2)
  parseInt(str,10)
  parseInt(str)
  return parseInt(str, 16)
}
cs('F')

1 === 1 ? 'its eq': 'its not';

function cS(num) {
  return num > 0 ? 'positive': num < 0 ? 'negative': 'zero'
}
cS(-1);

const MATH_CONSTANT= {
  PI:3.14
}
MATH_CONSTANT;
Object.freeze(MATH_CONSTANT)
try {
  MATH_CONSTANT.PI  = 314;
}catch (ex){
  console.log(ex)
}

MATH_CONSTANT;

// ANNONYMOUS FUNCTION
let funcc = function () {
  return 'hello'
}

let summm = (a,b) => a + b;


const numArray =[4,5.6, -9.8,3.14, 42, 6, 8.34, -2 ]

const sq = arr => {
  const sqInts = arr.filter(n => {
    return Number.isInteger(n) && n > 0
  }).map(x => x * x)
  return sqInts
}

sq(numArray);

//iife
const increment = (function(){
  return function increment(num, val = 1) {
    return num + val
  }
})()
increment(3)
increment(3,2)

const summer = function(...args){
  return args.reduce ((a,b) => a + b, 0)
}

// SPREAD OPERATOR
arr1 = [1,2,3,4]
arr2 = [...arr1]
arr1[0]= 'hello'


// DESTRUCTURING
let vowel = {
  a: 'america',
  b: 'banana',
  c: 'cunt'
}
const {a : abc,b:  bca, c} = vowel

const AVG_TEMP = {
  today: 77.5,
  tommorrow: 79
}

function getTemp(obj){
  'use strict';
  const {today, tommorrow : tempOfTom} = obj
  return tempOfTom
}

const LOCAL_FORECAST  = {
  today:  {min: 72, max: 83 },
  tommorrow: { min: 73.3, max: 84.6 }
}

function getMaxOfTom(obj) {
  'use strict'
  const {tommorrow: {max: moTommorrow}, today: {min: moToday}} = obj
  return [moToday, moTommorrow]
}


// DESTRUCTURING OF ARRAY
const arr4 =[1,2,3,4]
let [z,x,,cz] = arr4

const lll = (()=>{
  [z,x] = [x, z]
})()

const stats = {
  min: 10,
  man: 20,
  max: 30
}

function staru({max, min}) {
  return[min, max]
}

const result = {
  success: ['max-length', 'no-amc', 'prefer-arrow-function'],
  failure: ['no-var', 'var-on-top', 'line-break']
}
function makeList(arr){
  return arr.map(x =>{
    return `<li class = "text-warning">${x}</li>`
  })
}
const createPerson = (name, age, gender) => {name, age, gender}

// this

const bi = {
  gear: 2,
  setGear(newGear){
    this.gear = newGear
  }
}

class Shuttle{
  constructor(targetPlanet){
    this.targetPlanet= targetPlanet
  }
}
let shu = new Shuttle('jh322')

class Garden {
  constructor(fruit, vegetable){
    this._fruit = fruit
    this.vegetable = vegetable
  }
  get froot(){
    return this._fruit
  }

  set froot(newFruit){
    this._fruit = newFruit
  }
}

let myGarden = new Garden('Strawberry', 'tomato')
myGarden.froot = 'Rasberry'
myGarden.froot


function makeClass() {
  class Thermostat{
    constructor(temp){
      this._temp = 5/9 * (temp -32);
    }
    get temperature(){
      return this._temp
    }

    set temperature(u){
      this._temp = u
    }

  }
  return Thermostat
}

const Thermostat = makeClass();
const thermos = new Thermostat(6);
let temp = thermos.temperature;
// console.log(temp);
thermos.temperature = 26
temp = thermos.temperature
// console.log(temp);
let foo = 'var'
