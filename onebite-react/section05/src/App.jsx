import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";
import { useState } from "react";

import Bulb from "./components/Bulb";
import Counter from "./components/Counter";
import Register from "./components/Register";
import HooxExam from "./components/HookExam";

// <Header></Header> 이걸, <Header /> 이렇게 간결하게 표현 가능
function App() {
  /* 이렇게 최상위 부모요소를 리액트에서는 루트 컴포넌트라 함 */
  /*
  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  };
  */

  /*
  <Button {...buttonProps} />
      <Button text={"카페"} color={"green"} />
      <Button text={"블로그"}>
        <Header />
      {<div>자식요소</div>}
  </Button>
  */

  // const [state, setState] = useState(0);
  // state 의 경우, 리랜더링 된다고 해도 초기값으로 돌아가는 게 아니라
  // useState 에 의해 변경된 값을 유지한다.
  // 단, 서버를 재시작 하면 초기값으로 돌아감
  // console.log(state);

  return (
    <>
      <HooxExam />
      {/* <Register /> */}
      {/* <Bulb />
      <Counter /> */}
    </>
  );
}

export default App;
