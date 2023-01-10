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

for(let i=1; i <= 10; i++) {
  console.log(i);
}

let nums = [4, 8, 15, 16, 23, 42]

for (let i = 0; i < nums.length; i++) {
  const element = nums[i];
  console.log(element);
}
