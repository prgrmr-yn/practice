const userBtn = document.getElementById('user-btn');
const userName = document.getElementById('username');
const ulEl = document.getElementById('ul-el');
const tabBtn = document.getElementById('tab-btn');
const deleteBtn = document.getElementById('delete-btn');

const userNames = []

function loadList() {
  if (localStorage.getItem('lists')) {
    const lists = JSON.parse(localStorage.getItem("lists"))
    userNames.push(...lists)
    displayList(userNames)
  }
  // }else {

  //   localStorage.setItem("lists", JSON.stringify(userNames) )
  // }

}
loadList()


function deleteAll(a) {
  const empty = arr => arr.length = 0;
  empty(a);
  // only target this list
  localStorage.setItem("lists", JSON.stringify([...a]) )
  // localStorage.clear()
  displayList(userNames)
}

function displayList(arr) {
  let list = ''
  for (const username of arr) {
    list += `<li> <a href =${username} target="_blank">${username}</a></li>`
  }
  ulEl.innerHTML = list
}

function saveUser(arr) {
  if (userName.value) {
    arr.push(userName.value)
    userName.value = '';
    localStorage.setItem("lists", JSON.stringify(arr) )
    displayList(userNames)
  }
}

userBtn.addEventListener('click', e => {
  saveUser(userNames)
})
deleteBtn.addEventListener('dblclick', e => {
  deleteAll(userNames)
})

tabBtn.addEventListener('click', ()=> {

  chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    let currentTab = tabs[0];
    let currentUrl = currentTab.url;
    userNames.push(currentUrl)
    localStorage.setItem("lists", JSON.stringify(userNames) )
    displayList(userNames)
  // });
  })
});

// navigator.clipboard.writeText("Hello World");
