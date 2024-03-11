// 1. 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

// animal = "캣~"; // const - 상수, 변경 불가
// ┌ 상수 객체지만 이렇게는 가능
animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

console.log(animal);

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말한다.

const person = {
  name: "류은송",
  sayHi() {
    // └ 이런 표기법도 있다. ( sayHi() => {} )
    console.log("안녕!");
  },
};

person.sayHi();
person["sayHi"]();
