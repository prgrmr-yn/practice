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
  console.log(i);
}

let myImages = ['../images/img1.PNG', '../images/img2.PNG', '../images/img3.jpg'];

let currentImage = 0;
document.getElementById('next').onclick = nextPhoto;
document.getElementById('previous').onclick = previousPhoto;
const imgEl = document.getElementById('myImage')


function nextPhoto() {
  currentImage++
  if (currentImage === myImages.length) {
    currentImage = 0
  }
  imgEl.src = myImages[currentImage]
}

function previousPhoto() {
  currentImage--
  if (currentImage < 0){
    currentImage = myImages.length - 1
  }
  imgEl.src = myImages[currentImage]
}
