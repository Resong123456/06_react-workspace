// 5가지 배열 변형 메서드

console.log("============1=============");
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
let arr1 = [
  { name: "차은우", hobby: "테니스" },
  { name: "신유", hobby: "테니스" },
  { name: "영케이", hobby: "기타치기" },
];

/*
const tennisPeople = arr1.filter((item) => {
  if (item.hobby === "테니스") return true;
});
*/
/* └> */ const tennisPeople = arr1.filter((item) => item.hobby === "테니스");

console.log(tennisPeople);

console.log("============2=============");
// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  console.log(idx, item);
  return item * 2;
});

console.log(mapResult1);

console.log("============2_1=============");
/* 
let names = arr1.map((item) => {
  return item.name;
*/
// 리턴밖에 할 게 없으면 줄여도 됨

let names = arr1.map((item) => item.name);
console.log(names);

console.log("============3=============");
// 3. sort
// 배열을 사전순으로 정렬하는 메소드 ,  원본에 영향 // 숫자 정렬은 잘 안됨
let arr3 = ["b", "a", "c"];
console.log(arr3);

arr3.sort();
console.log(arr3);

console.log("============3_1=============");
let arr3_1 = [10, 3, 5];
arr3_1.sort((a, b) => {
  if (a > b) {
    // b가 a 앞으로 와라
    return 1;
  } else if (a < b) {
    // a가 b 앞으로 와라
    return -1;
  } else {
    // 두 값의 자리를 바꾸지 마라
    return 0;
  }
});

console.log(arr3_1);

console.log("============4=============");
// 4. toSorted
let arr4 = ["c", "a", "b"];
const sorted = arr4.toSorted();

console.log(arr4); // 원본 변형 안 됨
console.log(sorted);

console.log("============5=============");
// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐 반환하는 메소드
let arr5 = ["나는", "어제", "피자를", "먹었다", "존맛!"];
const joined = arr5.join(" ");

console.log(joined);
