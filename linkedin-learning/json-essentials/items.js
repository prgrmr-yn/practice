const productsEl = document.querySelector('.products-el')

const products = '[{"id": "530", "name":"Bamboo"}]'
const productParsed = JSON.parse(products)
console.log(productParsed);

const item = '{"id":"539", "name": "Bamboo"}'
const itemParsed = JSON.parse(item)
console.log(itemParsed);

let cart = [
  {
    productId: "530",
    itemKey: "3254235235324",
    itemName: "Bambooo Thermal"
  },
  {
    productKey: "232",
    itemKey: "24353452354344",
    itemName: "Slicker Jacket"
  }
]

const cartJson = JSON.stringify(cart)
console.log(cart);

const content = item => {
  console.log(item);
  return `Id: ${item[0].id}, Name: ${item[0].name}`
}

productsEl.innerHTML = content(productParsed)

