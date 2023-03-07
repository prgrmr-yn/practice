let convertType = 'miles'
const convertForm = document.getElementById('convert');
const conversionEl = document.getElementById('conversion');
const paraEl = document.getElementById('para');
const resultEl = document.getElementById('answer');
let distanceEl = document.getElementById('distance')
console.log(distanceEl);

window.addEventListener('keyup', (e)=>{
  e.preventDefault()
  if (e.key === 'k') {
    resultEl.textContent = ''
    convertType = 'kilometres'
    conversionEl.innerHTML = 'Km to Miles'
    distanceEl.value = '';
    paraEl.textContent = 'Type in a number of kms and click the button to convert the distance to miles.'
  }else if (e.key === 'm'){
    convertType = 'miles'
    conversionEl.innerHTML = 'Miles to Km'
    paraEl.textContent = 'Type in a number of miles and click the button to convert the distance to kilometres.'
    resultEl.textContent = ''
    distanceEl.value = '';
  }
})

convertForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let distance = parseFloat(distanceEl.value)

  if (distance) {
    if (convertType === 'miles' ){
      resultEl.textContent = `${distance} miles is ${mtkm(distance).toFixed(3)} km`
    }else if (convertType === 'kilometres'){
      resultEl.textContent = `${distance} kms is ${kmtm(distance).toFixed(3)} miles`

    }
  }

  function mtkm(int) {
    return int * 1.609344
  }

  function kmtm(int){
    return int *  0.621371
  }

})
