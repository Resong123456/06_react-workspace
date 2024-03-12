// 1. Falsy한 값(7개)
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; // bigInteger

if (!f1) {
  console.log("falsy");
}

// 2. Truthy한 값
// -> 7가지 Falsy한 값 제외한 나머지 모든 값)
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

// 3. 활용사례
function printName(person) {
  if (!person) {
    // 조건이 true여야 실행됨
    // person - falsy가 ! >> true
    console.log("person의 값이 없음");
    return;
  } // └ falsy할 때는 얘 실행

  // ┌ Truthy할 때는 얘 실행
  console.log(person.name);
} // 이 함수를 빠져나..ㅇ...

let person = null;
// let person = {"dd"} : 안에 들어있을 경우 true
// let person; : undefined / undef 아닐 때만 출력 원, let person = null;
printName(person);
