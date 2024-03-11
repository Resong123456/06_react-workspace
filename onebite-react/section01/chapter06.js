// 1. 묵시적 형변환(자동형변환)
// 2. 자바스크립트 엔진이 알아서 형변환 하는 것

let num = 10;
let str = "20";

/*
const result = num + str;
console.log(result);
=> 1020
*/

// 2. 명시적 형변환(강제형변환)
// -> 프로그래머 내장함수 등을 이용해서 직접 형변환을 명시
// -> 문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1);
console.log(10 + strToNum1);

let str2 = "10개"; // parseInt - 처음이 숫자로 시작해야 함
let strToNum2 = Number(str2);
console.log(strToNum2); // 수학적 연산 실패로 NaN

let strToNum3 = parseInt(str2);

console.log(strToNum3);

// 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);

console.log(numToStr1 + "입니다.");
