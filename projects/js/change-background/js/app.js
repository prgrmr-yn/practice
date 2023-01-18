const colors = ['green', 'red', 'blue', 'grey', 'lighblue', 'purple', 'lightgreen', 'beige', 'tomato', 'pink']

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', ()=>{
  // Get random number between 0 and 3

  const randomNums = getRandomNumber(colors);
  // let randColor = colorGenerator()
  console.log(colors[randomNums]);
  color.textContent = colors[randomNums];
  document.body.style.backgroundColor = colors[randomNums];

})

function getRandomNumber(colors) {
  return Math.floor(Math.random() *  colors.length)
}


function colorGenerator() {
  let hex = '';
  for (let i = 0; i < 6; i++) {
    let randomNum = Math.floor(Math.random() * 15) + 1
    hex += randomNum.toString(16)
  }
  return `#${hex}`
}
