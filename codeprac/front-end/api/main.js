// Get request
const img = document.getElementById("myImg");
let catUrl = ''
fetch('https://api.thecatapi.com/v1/images/search')
 .then(res => {
  img.src = res.url
  console.log(res.url)
  res.json()
 })
 .then(d => console.dir(d))
/*
fetch('url')
 .then(res => {
   if(res.ok){
     res.json()
   }else{
     console.log('not success');
   }
 }
 .then(data => data)
 */


 /////// POST REQUEST

//  fetch('https://discord.com/api/webhooks/1027741592683032677/ATWnt5El6lZBIQ1qZwzr1dN8gsH3Wcga4MlwcFbnK-KV0ztP1VTX8620MEdeewLyASUQ', {
//   method: 'POST',
//   headers: {'Content-Type': 'application/json'},
//   body: JSON.stringify({
//     "content": null,
//   "embeds": [
//     {
//       "title": "meow meow",
//       "color": 9422636,
//       "image": {
//         "url": 'https://cataas.com/cat/gif'
//       }
//     }
//   ],
//   "username": "fagoa"

//   })
//  })
//  .then(r => r.json())
//  .then(d => console.log(d))
//  .catch(e => console.log('e'));









// fetch('https://cataas.com/cat')
//  .then(res => res.json())
//  .then(data => {
//   console.log(data);}
// )
