import { useState } from "react";

function useInput() {
  // 이렇게 use~~~ 하고 이름 붙이면 커스텀 훅으로 인식됨
  const [input, setInput] = useState("");
  const onChange = (e) => {
    setInput(e.target.value);
  };
  return [input, setInput];
}

export default useInput;
