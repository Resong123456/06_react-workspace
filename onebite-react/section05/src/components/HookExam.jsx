import { useState } from "react";
import useInput from "../hooks/useInput";
// 3가지 Hook 관련 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능

// const state = useState();
// 이렇게는 사용 못 함 (함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능해서)

// 3. 나만의 훅(Custom Hook) 직접 만들 수 있다.

const HookExam = () => {
  // 2. 조건부로 호출될 수는 없다.
  //   if (true) {
  //     const state = useState();
  //   }

  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();

  return (
    <div>
      <div>
        <input value={input} onChange={onChange} />
      </div>
      <br />
      <div>
        <input value={input2} onChange={onChange2} />
      </div>
    </div>
  );
};

export default HookExam;
