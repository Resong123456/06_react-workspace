console.log("============1=============");
// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자
console.log(date1);

console.log("============1_2=============");
let date2 = new Date("2024-05-02");
console.log(date2);

let date2_1 = new Date("2024.05.02");
console.log(date2_1);

let date2_2 = new Date("2024/05/02");
console.log(date2_2);

let date2_3 = new Date("2024/05/02 11:20:30");
console.log(date2_3);

let date2_4 = new Date(2024, 5, 2, 23, 59, 59);
console.log(date2_4);

console.log("============2=============");
// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로부터 몇ms 지났는지 의미하는 숫자값
// UTC

let ts1 = date1.getTime();
console.log(ts1);

let date4 = new Date(ts1);
console.log(date4);

console.log("============3=============");
// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1;
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(year, month, date, hour, minute, seconds);

console.log("============4=============");
// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(1);
date1.setDate(2);
date1.setHours(23);

console.log(date1);

console.log("============5=============");
// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString());
console.log(date1.toLocaleDateString());
