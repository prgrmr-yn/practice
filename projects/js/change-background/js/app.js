const colors = ['green', 'red', 'blue', 'grey', 'lighblue', 'purple', 'lightgreen', 'beige', 'tomato', 'pink']

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', ()=>{
  const randomNums = getRandomNumber(colors);
  color.textContent = colors[randomNums];
  document.body.style.backgroundColor = colors[randomNums];

})

function getRandomNumber(colors) {
  return Math.floor(Math.random() *  colors.length)
}
