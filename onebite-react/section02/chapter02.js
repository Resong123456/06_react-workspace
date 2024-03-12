function returnFalse() {
  console.log("False 함수");
  return undefined;
}

function returnTrue() {
  console.log("True 함수");
  return 10;
}

console.log(returnTrue() || returnFalse());
// console.log(returnTrue() || returnFalse()); : true를 잡으면 true 수행
// returnTrue return 10; - truthy // console.log(returnTrue() || returnFalse()); => 10

// 단락평가 활용 사례

function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
  //          └ falsy    └ truthy
}

// printName();
printName({ name: "차은우" });
