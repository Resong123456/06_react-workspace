// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

/*
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2); // 모듈러 연산
*/

let inf = Infinity; // 양의 무한대
let minf = -Infinity; // 음의 무한대

let nan = NaN; // Not a Number

console.log(1 * "hello"); // 수치연산 실패 시 NaN이 뜰 수 있음

// 2. String type
let myName = "류은송";
let myLocation = "서울 광진구";
let introuduce = myName + myLocation;

// jsp에서 backTick 쓸 때는 별도 방법 찾아볼 것
// 템플릿 리터럴 문법
let introduceText = `${myName}은 ${myLocation}에 거주합니다.`;
console.log(introduceText);

// 3. Boolean Type
let isSwitchOn = true; // 1
let isEmpty = false; // 0

// 4. Null Type
let empty = null; // null이라도 들어가 있음
console.log(empty);

// 5. Undefined Type
let none; // 한 번도 값을 준 적 없는 것
console.log(none);
