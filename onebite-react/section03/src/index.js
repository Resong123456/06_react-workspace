// npm run start
// npm i - 없는 파일 다운

/* Common JS 방식 
// 방식 1
const m1 = require("./math");
console.log(m1.add(1, 6));
console.log(m1.sub(1, 6));

// 방식 2
const { add, sub } = require("./math");
console.log(add(1, 6));
console.log(sub(1, 6));
*/

/* ================================================================ */

/* ESM (ES 모듈 시스템) : 더 많이 쓴다. */
// package.json에 "type": "module" 추가
// import multiply from "./math.js";
import mul, { add, sub } from "./math.js";

import randomColor from "randomcolor"; // 라이브러리는 확장자 안 적어도 잘 찾음

const color = randomColor();
console.log(color);

// console.log(add(1, 6));
// console.log(sub(1, 6));
// console.log(multiply(1, 6));
