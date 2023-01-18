// Set initial count
let count = 0;

const value = document.getElementById('value')
console.log(value);
const btns = document.querySelectorAll('.btn')

btns.forEach( btn => {
  btn.addEventListener('click', e => {
    const styles = e.currentTarget.classList;
    if (styles.contains('decrease')) {
      count--
      interactiveNum('decrement')
      if (count < 0) {
        count = 0;
      }
    } else if (styles.contains('increase')) {
      count++
      interactiveNum('increment')
    } else {
      count = 0;
      interactiveNum('neutral')
    }
    value.textContent = count;
  })
})

function interactiveNum(className) {
  value.classList.add(className)
  setTimeout(() => {
    value.classList.remove(className)
  }, 250);

}
