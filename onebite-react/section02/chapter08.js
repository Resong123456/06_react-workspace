// 5가지 요소 순회 및 탐색 메소드

console.log("============1=============");
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메소드

let arr1 = [1, 2, 3];
arr1.forEach(function (item, idx, arr) {
  // 안에 (function () {}) 들어가있음 - 콜백 (함수 안의 함수)
  console.log(item, idx, arr);
  /*
  1 0
  2 1 
  3 2
  */
  console.log("============1_반복됨=============");
  console.log(item, idx * 2);
});

console.log("============1_1=============");

let doubledArr = [];
arr1.forEach((item) => {
  doubledArr.push(item * 2);
});
console.log(doubledArr);

console.log("============2=============");
// 2. includes
// 배열에 특정 요소가 있는지 확인하는 그런 메소드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);
console.log(isInclude);

console.log("============2_1=============");
let arr2_1 = [1, 2, 3];
let isInclude_1 = arr2_1.includes(10);
console.log(isInclude_1);

console.log("============3=============");
// 3.indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메소드
let arr3 = [1, 2, 3];
let index = arr3.indexOf(20);
console.log(index);

console.log("============3_1=============");
let objectArr = [{ name: "차은우" }, { name: "신유" }];
console.log(objectArr.indexOf({ name: "차은우" }));

console.log(objectArr.findIndex((item) => item.name === "차은우"));

console.log("============4=============");
// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런
// 특정 요소의 인덱스(위치)를 반환하는 메소드

let arr4 = [1, 2, 3];
const finedIndex = arr4.findIndex((item) => item % 2 !== 0);

console.log(finedIndex); // 1이 속해있는 0을 가지고 나옴, 1인덱스를 뱉고 나옴

console.log("============4_1=============");
let arr4_1 = [1, 2, 3];
const finedIndex_1 = arr4_1.findIndex((item) => item === 999); // 999 - 원시타입, 여기에 객체타입을 넣으면 안 될 수가 있어서 여러가지 알아둬야 함

console.log(finedIndex_1);

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환

/*
let arr5 = [{ name: "차은우" }, { name: "신유" }];
arr5.find((item) => {
  item.name === "차은우";
  return true;
});

-> 아래처럼 변경
*/

let arr5 = [{ name: "차은우" }, { name: "신유" }];
const finded = arr5.find((item) => item.name === "차은우");
console.log(finded);
