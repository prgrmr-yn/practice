const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', ()=>{
  let randColor = colorGenerator()
  color.textContent = randColor;
  document.body.style.backgroundColor = randColor;
})

function colorGenerator() {
  let hex = '#';
  for (let i = 0; i < 6; i++) {
    let randomNum = Math.floor(Math.random() * 15) + 1
    hex += randomNum.toString(16)
  }
  return hex
}
