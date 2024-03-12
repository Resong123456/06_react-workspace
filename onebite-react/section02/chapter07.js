// 6가지의 요소 조작 메소드

console.log("============1=============");
// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메소드
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6, 7);

console.log(arr1);
console.log(newLength);

console.log("============2=============");

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 반환
let arr2 = [1, 2, 3];
const popItem = arr2.pop();

console.log(popItem);
console.log(arr2);

console.log("============3=============");
// 3. shift , 느림
// 배열의 맨 앞에 있는 요소를 제거, 반환
let arr3 = [1, 2, 3];
const shiftItem = arr3.shift();

console.log(shiftItem, arr3);

console.log("============4=============");
// 4. unshift , 느림
// 배열의 맨 앞에 새로운 요소를 추가하는 메소드
let arr4 = [1, 2, 3];
let newLength2 = arr4.unshift(0);

console.log(newLength2, arr4);

console.log("============5=============");
// 5. slice
// 마치 가위처럼, 배열의 특정범위를 잘라내서 새로운 배열로 반환
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5); // 새 배열로 반환
console.log(sliced);
console.log(arr5);

console.log("============5_1=============");
// 5. slice
// 마치 가위처럼, 배열의 특정범위를 잘라내서 새로운 배열로 반환
let arr5_1 = [1, 2, 3, 4, 5];
let sliced_1 = arr5_1.slice(2, 5); // 새 배열로 반환
let sliced_2 = arr5_1.slice(2);
let sliced_3 = arr5_1.slice(-3);
console.log(arr5_1);
console.log(sliced_1);
console.log(sliced_2);
console.log(sliced_3);

console.log("============6=============");
// 6. concat
// 두 개의 서로 다른 배열을 이어 붙여서 새로운 배열로 반환

let arr6 = [1, 2];
let arr7 = [3, 4];
let concatArr = arr6.concat(arr7);

console.log(concatArr);
console.log(arr6);
console.log(arr7);
