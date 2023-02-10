// import { xml2json } from 'xml-js';

// const xml = `<name>Garage</name>
// <cars>
//     <color>red</color>
//     <maxSpeed>120</maxSpeed>
//     <age>2</age>
// </cars>
// <cars>
//     <color>blue</color>
//     <maxSpeed>100</maxSpeed>
//     <age>3</age>
// </cars>
// <cars>
//     <color>green</color>
//     <maxSpeed>130</maxSpeed>
//     <age>2</age>
// </cars>`;

// // var pe = (new DOMParser()).parseFromString(xml, 'text/xml')
// const json = xml2json(xml, '');

// console.log(json);

const powerbanks = 'while(1);[{"id": 1,"name": "Anker"},{"id": 2}, {"id": 3}, {"id": 4}, {"id": 5}, {"id": 6}]'

function debunk(json) {
  return json.slice(9)
}


const data = JSON.parse(debunk(powerbanks))
console.log(powerbanks);
console.log(data);
console.log(JSON.stringify(data, null, 4));
