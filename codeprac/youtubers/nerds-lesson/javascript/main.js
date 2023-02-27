console.log("Hello World");

let happy = true;
let sad = false;

function chapOne() {
  if (sad) {
    console.log("I am sad");
  } else {
    console.log("I am not sad");
  }

  let myNum = 5;
  let stringNum = "5";

  if (myNum >= stringNum) {
    console.log("equal");
  }

  console.log(5 - "che");

  if (!(5 - "che")) {
    console.log("is nan");
  } else {
    console.log("not nan");
  }

  let colors = ["red", "green", "blue", "yellow"];
  let selectedColor = "red";

  if (selectedColor === "red") {
    console.log("The color is red");
  } else if (selectedColor === "green") {
    console.log("The color is green");
  } else if (selectedColor === "blue") {
    console.log("The color is blue");
  } else {
    console.log("The color is yellow");
  }
}

function chapSecond() {
  let colors = ["red", "green", "blue", "yellow"];
  let selectedColor = colors[2];

  switch (selectedColor) {
    case "red":
      console.log("The color is red");
      break;
    case "green":
      console.log("The color is green");
      break;
    case "blue":
      console.log("The color is blue");
      break;
    case "yellow":
      console.log("The color is yellow");
      break;
    default:
      console.log("unknown response");
  }

  let goodMood = true;
  let gotSleep = false;
  let gotFood = true;

  if (goodMood && (gotSleep || gotFood)) {
    console.log("Today is gonna be a good day");
  } else {
    console.log("I am grumpy");
  }

  for (let i = 1; i <= 10; i++) {
    for (let j = 0; j < 6; j++) {
      for (let k = 0; k < 5; k++) {
        console.log(`i: ${i}, j: ${j}, k: ${k}`);
      }
    }
  }
  colors = ["red", "green", "orange", "blue", "purple"];

  for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
  }

  for (const color of colors) {
    console.log(color);
  }
  for (const string of "strings") {
    console.log(string);
  }

  let incrementer = 0;
  let text = "";

  while (incrementer <= 10) {
    text += `The increment has gone upto ${incrementer}  \n`;
    incrementer++;
  }
  console.log(text);
}

function challenges() {
  let firstName = "Bill";
  let lastName = "Mead";

  console.log(`${firstName} ${lastName}`);
}

function chapThree() {
  function uppercase(string) {
    return string.toUpperCase();
  }

  function addNums(num1, num2) {
    return num1 + num2;
  }

  function maxMinusOneInt(arr) {
    console.log(arr);
    return [
      Math.max(...arr) - Math.min(...arr),
      Math.min(...arr),
      Math.max(...arr),
    ];
  }

  function generateArrayOfRandomNums(len) {
    let arr = [];
    for (let i = 1; i <= len; i++) {
      let rand = Math.floor(Math.random() * 100);
      arr.push(rand);
    }
    return arr;
  }

  let result = maxMinusOneInt(generateArrayOfRandomNums(5));
  const [total, min, max] = result;
  console.log(`${max} - ${min} = ${total} `);

}

function chapFour() {

  let pEls = document.getElementsByTagName('p')

  for (let el of pEls) {
      el.style.color= 'green'
  }

  let myClass = document.getElementsByClassName('plain-text');
  myClass[1].style.color = 'red';


  let selectedClass = document.querySelector('#special .someclass')
  selectedClass.style.color = 'blue'

  let selectedClasses = document.querySelectorAll('.plain-text')
  console.log(selectedClasses);
  selectedClasses.forEach((el)=>{
    console.log(el.className);
  })



  let myDiv = document.querySelector('#special .someclass')
  console.log(myDiv.innerHTML);
  console.log(myDiv.className = 'blue');

  let checkBox = document.querySelector('#check')
  checkBox.setAttribute('checked', 'checked')
  console.log(checkBox);


  let pTag = document.createElement('p')
  let pText = document.createTextNode('Here is a new paragraph')
  pTag.appendChild(pText)
  let myDivEl = document.querySelector('div');
  console.log(myDivEl);
  myDivEl.appendChild(pTag)
  myDivEl.removeChild(myDiv.children[1])

}


