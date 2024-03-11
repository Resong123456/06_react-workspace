// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴

// 2. 객체 프로퍼티 (객체 속성)
let person = {
  name: "류은송", // name이라는 프로퍼티
  age: "27",
  hobby: "해루질",
  extra: {}, // 객체나 함수를 가질 수 있음
  10: 20,
  "like nano": true,
};

// 3. 객체 프로퍼티를 다루는 방법
// 3_1. 특정 프로퍼티에 접근(점표기법, 괄호표기법)
let name = person.name;
let age = person["age"]; // age라는 변수를 찾고 있어서 안됨, "age"로 적어서 String으로 묶어줘야 함 - 있는 자료형으로 적어줘야 함

let property = "hobby";
let hobby = person[property];

console.log(hobby);

// 3_2. 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer";
person["favoriteFood"] = "엽떡";
console.log(person);

// 3_3. 프로퍼티를 수정하는 방법
person.job = "student";
person["favoriteFood"] = "초콜릿";

console.log(person);

// 3_4. 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];
console.log(person);

// 3_5. 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
let result2 = "nano" in person;
console.log(result1);
