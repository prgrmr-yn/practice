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
}


function math() {
  let x = 3.14;
  // x = Math.ceil(x);
  // x = Math.pow(x, 2);
  x = Math.PI;
  console.log(x);
}


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

}

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
}

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
}

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
}

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

}
function cBox(params) {
  document.getElementById('my-button').onclick = () => {
    const myCheckBox = document.getElementById('my-check-box');
    if (myCheckBox.checked){
      console.log('you are subscribed');
    }else {
      console.log('you are unsubscribed');
    }
  }
}

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
}

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
}
