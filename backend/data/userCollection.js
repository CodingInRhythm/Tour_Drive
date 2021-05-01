const faker = require("faker");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let comments = []
for (let i=0; i < 40; i++) {
  const comment = fake.lorem.sentence()
  comments.push(comment)
}

let firstGroup = [];
let secondGroup = [];
let thirdGroup = [];
let fourthGroup = [];
for (let i = 1; i < 20; i++) {
  let collectionObj = {};
  collectionObj.userId = i;
  collectionObj.albumId = 1;
  collectionObj.comment = comments[getRandomInt(comments.length)]
  firstGroup.push(collectionObj);
}

for (let i = 1; i < 40; i++) {
  let collectionObj = {};
  collectionObj.userId = i;
  collectionObj.albumId = 2;
  secondGroup.push(collectionObj);
}

for (let i = 10; i < 30; i++) {
  let collectionObj = {};
  collectionObj.userId = i;
  collectionObj.albumId = 3;
  thirdGroup.push(collectionObj);
}

for (let i = 10; i < 30; i = i + 2) {
  let collectionObj = {};
  collectionObj.userId = i;
  collectionObj.albumId = 4;
  fourthGroup.push(collectionObj);
}

exportGroup = [...firstGroup, ...secondGroup, ...thirdGroup];
console.log(exportGroup);

module.exports = exportGroup;
