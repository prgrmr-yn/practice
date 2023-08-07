let cartQuantity = 0;
let display = document.getElementById('display');




function showQuantity(){
  return display.textContent = cartQuantity;
}

function addToCart() {
  cartQuantity += 1
  return display.textContent = cartQuantity;
}

function plus2Cart(){
  cartQuantity += 2;
  return display.textContent = cartQuantity;
}

function plus3Cart(){
  cartQuantity += 3;
  return display.textContent = cartQuantity;
}

function resett() {
  cartQuantity = 0;
  return display.textContent = cartQuantity;
}
