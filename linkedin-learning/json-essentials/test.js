const emptyObject = {};
const nonEmptyObject = {"apple": "red"}
const stringContent = "banana"
const numberContent = 5;
const arrayContent = ["asparagus", "lettuce", "kale"];
const dateContent = new Date()

const testData = data => {
  // if (Object.keys(data).length === 0  && data.constructor === Object) {
  //   console.log('Its an Empty object');
  // }else {
  //     console.log('not an empty object');
  // }
  for (let prop in data) {
    if (hasOwnProperty === true) {
      console.log('not an empty object');
      return data
    }
  }

  if (JSON.stringify(data) === JSON.stringify({})) {
    console.log('Empty obj');
    return data
  }else {
    console.log('not an empty obj');
    return data
  }

}
testData(nonEmptyObject)
