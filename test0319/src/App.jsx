import "./App.css";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("빨강");

  const updateSelect = (click) => {
    setColor(click);
  };

  return (
    <>
      <Select color={color} updateSelect={updateSelect} />
      <Result color={color} />
    </>
  );
}

const Select = ({ color, updateSelect }) => {
  const [sel, setSel] = useState(color);

  const selectColor = (e) => {
    setSel(e.target.value);
  };

  const clickResult = () => {
    updateSelect(sel);
  };

  return (
    <>
      <h1>컬러 팔레트</h1>
      <select name="color" onChange={selectColor}>
        <option value="빨강">빨강</option>
        <option value="주황">주황</option>
        <option value="파랑">파랑</option>
        <option value="보라">보라</option>
      </select>
      <button onClick={clickResult}>선택하기</button>
    </>
  );
};

const Result = ({ color }) => {
  return <h4>당신이 선택한 컬러는 {color} 입니다.</h4>;
};

export default App;
