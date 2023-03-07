let detailsForm = document.querySelector('#destintion-details-form');
let container = document.querySelector('#destination-container');
let storage = []

if (localStorage.getItem('storage')){
  console.log('theres stuff in storage')
    storage.push(...(JSON.parse(localStorage.getItem('storage'))))
    console.log(storage);
}else {
  localStorage.setItem('storage', '')
  console.log(storage);
}


(function renderStorage() {
  for (let data of storage){
    container.insertAdjacentHTML('beforeend', renderimage(data.name, data.description, data.photo, data.location))
  }
})()


detailsForm.addEventListener('submit', handleFormSubmit);

function renderimage(destName, destDescription, destPhoto, destLocation) {
  let card = `<div class="card">
  <img src="${destPhoto}" alt="screenshot of iphone">
    <div class="card-body">
      <h3>${destName}</h3>
      <h4>${destLocation}</h4>
      <p class="card-text">${destDescription}</p>
      <button class = "remove">Remove</button>
    </div>
  </div>`
  return card
}

function handleFormSubmit(e) {
  e.preventDefault()
  let destName = e.target.elements['name'].value;
  let destLocation = e.target.elements['location'].value;
  let destPhoto = e.target.elements['photo'].value;
  let destDescription = e.target.elements['description'].value;


  container.insertAdjacentHTML('beforeend', renderimage(destName, destDescription, destPhoto, destLocation))
  storage.push({
    name: destName,
    location: destLocation,
    photo: destPhoto,
    description: destDescription
  })
  emptyBox(['name', 'location', 'photo', 'description'])
  updateStorage()
}

function emptyBox(elements) {
  console.log(elements);
  for (let element of elements) {
    document.getElementById(element).value = ''
  }
}

function updateStorage() {
  localStorage.setItem('storage', JSON.stringify(storage))
  console.log(JSON.parse(localStorage.getItem('storage')));
}

container.addEventListener('click', remove)
function remove(e) {
  if (e.target.classList.contains('remove')){
    e.target.parentElement.parentElement.remove()
    console.log('deleted, congrats');
  }
}
