// 1. 콜백함수

function main(value) {
  value();
}

main(() => {
  // 콜백함수 : 뒷전에 실행되는, 나중에 실행되는
  //   console.log("i am sub");
}); // 인수가 들어옴, 콜백 함수

// 2. 콜백 함수의 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}
// 이 함수 자체가 콜백에 들어감
repeat(5, (idx) => {
  console.log(idx);
});

repeat(5, (idx) => {
  console.log(idx * 2);
});

repeat(5, (idx) => {
  console.log(idx * 2);
});

repeat(5, (idx) => {
  console.log(idx * 3);
});
