// math 모듈
/*
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}
*/

/* CJS 방식
module.exports = {
  add, // 이렇게, 맵핑값이 같을 경우에는 생략해서 표기도 가능
  sub: sub,
};
*/

/* ================================================================ */

/* ESM 방식 */
// 방식 1
// export { add, sub };

// 방식 2
export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export default function multiply(a, b) {
  return a * b;
}
