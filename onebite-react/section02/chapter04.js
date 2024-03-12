console.log("============1=============");
// 1. Spread 연산자
// -> Spread : 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러 개의 값을 개별로 흩뿌려 주는 역할

let arr1 = [1, 2, 3];
//let arr2 = [4, arr1[0], arr1[1], arr1[2], 5, 6]; // 이렇게 끼워넣을 수는 있지만 위험
let arr2 = [4, ...arr1, 5, 6];
console.log(arr2);

console.log("============2=============");
let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  ...obj1, // 모래뿌려주듯이
  c: 3,
  d: 4,
};

console.log(obj2);
console.log("============3=============");

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}
funcA(...arr1);

console.log("============4=============");

// 2. Rset 매개변수
// -> Rset 나머지, 나머지 매개변수

function funcB(one, two, ...restKK) {
  // rest 매개변수, rest는 마지막에 있어야 함 / 꼭 rest로 기재하지 않아도 됨
  console.log(one, two);
  console.log(restKK);
}
funcB(...arr1);
