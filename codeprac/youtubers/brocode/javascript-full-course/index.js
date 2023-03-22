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
}

document.getElementById('submit-button').onclick = () => {
  let a = document.getElementById('aa-label').value
  // a = Number(a);

  let b = document.getElementById('bb-label').value
  // b = parseInt(b,10)

  console.log([a,b]);
  c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
  console.log(c);

  document.getElementById('c-label').textContent = 'hello'
}

