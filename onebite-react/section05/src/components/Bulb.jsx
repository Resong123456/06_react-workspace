import { useState } from "react";

const Bulb = () => {
  const [light, setLight] = useState("OFF");
  // 관례적으로, set + state의 이름

  // let light = "OFF";
  // state 를 통해서만 리랜더링이 된다.
  // 이렇게 변수로 하면 리랜더링이 되지 않는다.
  console.log(light);
  /*
      리액트 리랜더링 되는 이유
      1. state 가 변경됐을 때
      2. props 의 값이 변경됐을 때
      3. 부모 컴포넌트 리랜더링 되면 자식 컴포넌트도 리랜더링
  
      + 버튼만 눌러도, console.log(light) 가 실행되는 이유가 위의 이유때문이다.
      => 이벤트가 번지는 걸 이벤트 더블링?이라고 함
  
      => 부모는 자식의 state를 가지고 있으면 좋을 게 없음
      => 별도로 분리해주자 => Counter, light 각각 만들기
    */
  return (
    <div>
      {light === "ON" ? (
        <h1 style={{ backgroundColor: "orange" }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: "lightgray" }}>OFF</h1>
      )}
      <button
        onClick={() => {
          setLight(light === "OFF" ? "ON" : "OFF");
          // light = light === "ON" ? "OFF" : "ON";
        }}
      >
        스위치
      </button>
    </div>
  );
};

export default Bulb;
