console.log("============1_1=============");

// 1. 배열 순회
let arr = [1, 2, 3];

console.log(arr);
// 1_1. 배열 인덱스
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let arr2 = [4, 5, 6, 7, 8];
for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}
console.log("============1_2=============");

// 1_2. for of 반복문
for (let item of arr) {
  console.log(item);
}

// 2. 객체 순회
let person = {
  name: "류은송",
  age: 27,
  hobby: "해루질",
};

console.log("============2_1=============");
// 2_1. Object.keys 사용
// -> 객체에서 key값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);
console.log(keys);

console.log("============2_1_1=============");
for (let i = 0; i < keys.length; i++) {
  console.log(keys[i]);
}

console.log("============2_1_2=============");
for (let key of keys) {
  console.log(key);
}

console.log("============2_1_3=============");
for (let key of keys) {
  console.log(key, person[key]);
}

console.log("============2_1_4=============");
for (let key of keys) {
  const value = person[key];
  console.log(key, value);
}

console.log("============2_2=============");
// 2_2. Object.values()
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);

for (let value of values) {
  console.log(value);
}

// 2_3. for in
console.log("============2_3=============");
for (let key in person) {
  const value = person[key];
  console.log(value);
}
