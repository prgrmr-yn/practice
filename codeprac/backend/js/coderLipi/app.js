let l = console.log

function firstChapter(params) {
  let y = false
  if (y) {
    console.log('hello');
  }else {
    console.log('hi');
  }
}

function secondChapter(params) {
  let a = 7;
  // Intellisense helps shows useful information
  // radix is just a base
  let b = parseInt('3', 10);
  console.log(b);
  let c = a + b;
  console.log(c);
  // String and number adds when detects coersion
}

function thirdChapter(params) {
  let a = 21;
  // Bad practice

  // Good Practice
  let age = 21
}

function fourthChapter() {

  let counter = 0
  function timeout() {
    setInterval(() => {
      console.log('hi' + ++counter);
    }, 1000);
    setTimeout(()=> {
      console.log('5 seconds has elapsed');
    }, 5000)
  }


  timeout()
}

function fifthChapter() {

  (function () {
    console.log('Immediately invoked function expression'); // IIFE
  })();
}

function sixthChapter() {
  let count = 3;

  if (count === 4) {
    console.log('hello');
  }else if (count > 4) {
    console.log('count is greate than 4');
  } else if (count < 4) {
    console.log('count is less than 4');
  }else {
    console.log('Count is ot 4');
  }

  let hero = 'Batman';
  switch (hero.toLowerCase()) {
    case 'superman':
      console.log('Super strength');
      break;
    case 'batman':
      console.log('Intelligence');
      break;
    default:
      console.log('member of JLA');
  }

  // Falsy values
  // '', null, undefined, false, 0, Nan
  // Truthy values are pretty much whats not falsy
  let a = 1, b = '1'
  console.log(a===b ? 'equal': 'inequal');

}

function seventhChapter() {


  for(let i=1; i <= 10; i++) {
    console.log(i);
  }

  let nums = [4, 8, 15, 16, 23, 42]

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    console.log(element);
  }
}

function eighthChapter() {

// var counter = (function () {

//   let count = 0

//   function print(message) {
//     console.log(`${message} ---${count}`);
//   }

//   return {
//     //value: count,

//     get: function()f   {return count}
//     set: function(value) {return count = value}

//     increment() {
//       count += 1
//       print('After increment: ');
//     },
//     reset: function(){
//       print('Before reset: ')
//       count = 0
//       print('After reset: ')
//     }
//   }

// })()

// console.log(counter.value);
// counter.increment()
// counter.increment()
// counter.increment()

// counter.set(7)
// counter.reset()
// console.log(counter.value);

}

function closures(){

function sayHello(name) {
  return function() {
    console.log('Howdy ' + name);
  }
}

let bob = sayHello('bob')
let conrad = sayHello('conrad')
let grant = sayHello('grant')
bob();
grant();
conrad();

}

function thisChapter() {


  let car = {
    make: 'Audi',
    model: 'A6',
    printDescription() {
      return `The car is ${this.make} ${this.model}`
    }
  }

  console.log(car.printDescription());


  function first() {
    'use strict';
    return this;
  }


  console.log(first() === global);
  console.log(first() === undefined);


  let myObj = { value: 'myObject'};


  function third() {
    return this.value
  }

  let hel = 'hello';

  function fifth() {
    console.log(this.firstName + ' ' + this.lastName);
  }

  let customer1 = {
    firstName: 'bob',
    lastName: 'tabor',
    print: fifth
  }

  let customer2 = {
    firstName: 'Bob',
    lastName: 'Tabor',
    print: fifth
  }

  customer1.print()
  customer2.print()

  let nae = {
    name: 'dave'
  }
  global.name = 'Dave'

  function sixth() {
    return this.name
  }
  console.log(sixth.apply(nae));
  console.log(sixth());


  function intro() {
    return `First Name: ${person1.fname}, Last Name: ${person1.lname}`
  }

  let person1 = {
    fname: 'yatin',
    lname: 'negs',
    intro: intro
  }

  console.log(person1.intro());
}

function destructuringChapter() {


  let names = ['david', 'edith', 'alex', 'michael', 'sammy']
  let [a, b, c, e, d] = names;
  console.log([a, b, c, d, e]);

  let namess = ['david', 'edith', 'alex', 'michael', 'sammy']
  let others;
  [a,b, ...others] = namess
  console.log([...others]);

  let car = {
    make: 'Audi',
    model: 'A4',
    year: 2010
  }

  let {year, model, make: mk} = car

  console.log([year, model, mk]);
}

function protoChapter() {



    function Car(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.description = function description() {
        return `${this.make} ${this.model} is sick that came in ${this.year}`
      }
    }

    let car1 = new Car('Audi', 'A4', 2004)
    // console.log(car1);


    let person = {
    name: 'dave',
    model: 'd1211'
  }


  let newPerson = Object.create(person)
  person.walk = true;

  console.log(newPerson.model);
  console.log(Object.getPrototypeOf(newPerson) );
  newPerson.walk = false
  console.log(newPerson.walk);

  console.log(person.hasOwnProperty('walk'));
  console.log(newPerson.hasOwnProperty('walk'));

}

function classChapter() {
  class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }

    print() {
      return `${this.make}---${this.model} ----${this.year}`
    }

  }

  let myCar = new Car('Audi', 'a4', 2004)

  l(myCar.print())


  class SportsCar extends Car {
    revEngine() {
      return 'Vroom Vroom goes the ' + this.make
    }
  }

  let mySportsCar = new SportsCar('Audi', 'A6', 2007)
  l(mySportsCar.print())
  l(mySportsCar.revEngine())

}

let hi = () => { l('howdy')}
hi()


let hello = name =>  `Hello ${name}`
l(hello('dave'))
