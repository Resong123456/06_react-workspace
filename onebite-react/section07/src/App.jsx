import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";
import { useState, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  // 복습
  // useState() : 스테이트가 변경되면 리랜더링 됨
  // useRef() : 스테이트가 변경되어도 리랜더링 되지 않음

  // 1. 마운트 : 탄생
  useEffect(() => {
    console.log("mount"); // 예시 확인을 위해 이렇게 썼지만,
    // 실제로는 db에서 데이터를 가져오게 하는 코드를 넣을 것
  }, []);
  // 빈 배열을 써놓는 경우 : 마운트를 위한 effect구나 라고 생각할 것

  // 2. 업데이트 : 변화, 리랜더링
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });
  // 배열을 안 써놓는 경우 : 모든 요소가 업데이트 될 때마다 실행될 effect구나 라고 생각할 것
  // 배열에 뭔가가 있다면? 해당 배열의 요소가 업데이트 될 때마다 실행될 effect구나 라고 생각할 것

  // 3. 언마운트 : 죽음

  /*
  useEffect(() => {
    console.log(`count:${count} / input:${input}`);
  }, [count, input]);
  // 인자 : 함수(함수 안에 넣는 것 : ~~이 바뀔때마다~ 뭘 수행할건지), 배열(배열 안에 넣는 것 : ~~이 바뀔때마다~ 의 ~~물결)
  // 의존성 배열
  // dependency array => deps
  */

  const onClickButton = (value) => {
    setCount(count + value);
    // console.log(count); => 여기서 이렇게 해도 동일한 효과가 나오나? no, js가 성격이 매우 급해서 이 방식으로 하면
    // setCount가 아직 완료되지 않았는데 콘솔에 먼저 찍혀버리기에 꼬임
    // 비동기이기에 발생하는 문제점 (async / await 으로 해결하는 것도 가능하긴 함)
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>

      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      {/* section : 구획 나눌 때 사용 */}
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
        {/* 짝수면 Even 보여주고 아니면 null */}
      </section>

      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
