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
