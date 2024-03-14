function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업을 실제로 진행할 콜백 함수
    // executor

    setTimeout(() => {
      //   const num = null;
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다.");
      }

      // then 메소드
      // -> 그 후에

      // promise.then((value) => {
      //   console.log(value);
      // });

      // catch 메소드
      // -> (실패) 그 후에

      // promise.catch((e) => {
      //   console.log(e);
      // });
      /*
      promise
        .then((value) => {
          console.log(value);
        })
        .catch((error) => {
          console.log(error);
        });
      */

      //     console.log("안녕");
      //     // resolve("안녕"); // promise의 상태를 성공으로 바꿔줌
      //     reject("왜 실패했는지 이유"); // 실패로 바꿔줌
    }, 2000);
  });
  return promise;
}
/*
setTimeout(() => {
  console.log(promise);
}, 3000);
*/
add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);

    return add10(undefined);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
