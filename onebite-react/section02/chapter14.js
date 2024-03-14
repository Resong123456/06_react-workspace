// 확인 원하는 것만 남기고 지워서 확인

// async
// 어떤 함수를 비동기 함수로 만들어 주는 키워드
// 함수가 프로미스를 반환하도록 변환해 주는 그런 키워드 // 객체 리턴 x

console.log("============1=============");
async function getData() {
  return {
    name: "차은우",
    id: "cha",
  };
}

console.log(getData());

console.log("============1_1=============");
async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {}, 1500);
  });
}

console.log(getData());

console.log("============1_3=============");
async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "차은우",
        id: "cha",
      });
    }, 1500);
  });
}
console.log(getData());

console.log("============2=============");
// await
// async 함수 내부에서만 사용 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

function printData() {
  getData().then((result) => {
    console.log(result);
  });
}

printData();

console.log("============2_1=============");
async function printData() {
  const data = await getData();
  console.log(data);
}
printData();
