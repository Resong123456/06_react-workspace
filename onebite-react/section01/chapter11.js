// 함수 선언
/*
function greeting() {
  console.log("안녕하세요 반가워요");
}

console.log("호출전");
greeting(); // 실질적 실행 시 함수이름 쓰고 호출
console.log("호출후");
*/
/*
function getArea(width, height) {
  // 매개변수

  function another() {
    // 함수 내부의 또 다른 함수, 중첩됨 : 중첩 함수
    console.log("another");
  }
  another();

  let area = width * height;

  // console.log(area);
  return area;
  console.log("hello"); // 위에 리턴하면 위의 코드는 수행되지 않음
}
// getArea(10, 20);
*/

let area1 = getArea(10, 20); // 내가 여기에 넘겨주는 값 : 인수 // 10과 20을 인수로 넘기고
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);

getArea(120, 200);

// 호이스팅
// -> 끌어올리다
function getArea(width, height) {
  // 매개변수

  function another() {
    // 함수 내부의 또 다른 함수, 중첩됨 : 중첩 함수
    console.log("another");
  }
  another();

  let area = width * height;

  // console.log(area);
  return area;
}
