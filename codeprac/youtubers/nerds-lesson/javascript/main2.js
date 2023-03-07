function chapOne() {
  let pagetop;

  window.addEventListener('scroll', () => {
    pagetop = window.pageYOffset
    console.log(pagetop);
  })

  window.addEventListener('resize', () => {
    console.log(`The window width is ${window.innerWidth}`);
    console.log(`The window width is ${window.innerHeight}`);
  })

}

document.addEventListener('keydown', (e) => {
    console.log(`The ${e.key} key was pressed`)
})



newVar = 'not properly defined';
console.log(newVar);

for (let i = 0; i<10; i++) {
  i
}

// Img slider

let currentImage = 0;
let myImages = ['img1.PNG', 'img2.PNG', 'img3.jpg'];

document.getElementById('next').addEventListener('click', nextPhoto);
document.getElementById('previous').onclick = previousPhoto;
const imgEl = document.getElementById('myImage')
const container = document.getElementById('content');


function nextPhoto() {
  imgEl.className = 'fadeinimg'
  currentImage++
  if (currentImage === myImages.length) {
    currentImage = 0
  }
  imgEl.src = `../images/${myImages[currentImage]}`
  setTimeout(() => {
    imgEl.classList.remove('fadeinimg')
  }, 1000);
}

function previousPhoto() {
  currentImage--
  if (currentImage < 0){
    currentImage = myImages.length - 1
  }
  imgEl.src = myImages[currentImage]
}
