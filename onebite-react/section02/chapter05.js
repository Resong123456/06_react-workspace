let o1 = { name: "졸린사람" };
let o2 = o1;
let o3 = { ...o1 };

console.log(o1);
console.log(o2);
console.log(o3);

o2.name = "진짜 졸린사람";

console.log(o1);
console.log(o2);
console.log(o3);

// o1과 o2 모두 같은 곳을 참조하고 있기에, o2의 속성을 변경한 것이 o1의 속성까지 변경한 것과 동일한 결과를 냄
// o3의 경우, 스프레드를 통해 o1을 복사하였기에 영향x
// 객체를 복사할 때는 얕은 복사가 아닌 깊은 복사를 하자
