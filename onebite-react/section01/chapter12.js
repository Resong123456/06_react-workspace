function funcA() {
  console.log("funcA");
}
let varA = funcA;
varA();

let varB = function funcB() {
  // 익명함수 => 호이스팅의 대상이 되지 않는다. 변수 안의 function이라
  //   console.log("funcB");
};

varB();
// funcB(); - 이렇게 선언하면 안됨

function funcA() {
  console.log("funcA");
}

// 2. 화살표 함수
let varC = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varC(10));
