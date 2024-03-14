function task() {
  setTimeout(() => {
    console.log("안녕하세요");
  }, 3000);
}

task();

function add(a, b, callback) {
  setTimeout(() => {
    const sum = a + b;
    callback(sum);
  }, 3000);
}

add(1, 2, (value) => {
  console.log(value);
});

// 음식을 주문하는 상황
function orderFood(collback) {
  // collback 함수를 붙이면 밖에서도 쓸 수 있다.
  setTimeout(() => {
    const food = "피자";
    collback(food);
  }, 3000);
}
orderFood((food) => {
  console.log(food);
});

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownFood = `식은 ${food}`;
    callback(cooldownFood);
  }, 2000);
}
function freezeFood(food, callback) {
  setTimeout(() => {
    const freezeFood = `냉동된 ${food}`;
    callback(freezeFood);
  }, 1500);
}
// 인덴트(indent) : 들여쓰기
orderFood((food) => {
  console.log(food);
  cooldownFood(food, (cooldownFood) => {
    console.log(cooldownFood);

    freezeFood(cooldownFood, (freezeFood) => {
      console.log(freezeFood);
    });
  });
});
