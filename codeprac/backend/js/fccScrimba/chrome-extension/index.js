const userBtn = document.getElementById('user-btn');
const userName = document.getElementById('username');
const ulEl = document.getElementById('ul-el');

console.log(ulEl);

userBtn.addEventListener('click', saveUser)

const userNames = []

function displayList() {
  let list = ''
  for (const username of userNames) {
    list += `<li> <a href =${username} target="_blank">${username}</a></li>`
  }
  ulEl.innerHTML = list
}

function loadList() {
  if (localStorage.getItem('lists')) {
    const lists = JSON.parse(localStorage.getItem("lists"))
    userNames.push(...lists)
    displayList()
    console.log(lists);
  }else {

    localStorage.setItem("lists", JSON.stringify(userNames) )
  }

}

loadList()

function saveUser() {
  userNames.push(userName.value)
  userName.value = '';
  localStorage.setItem("lists", JSON.stringify(userNames) )
  displayList()
}
