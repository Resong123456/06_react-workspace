import { useState } from "react";
const Candy = ({ candy, onChangeCandy }) => {
  const [select, setSelect] = useState(candy);

  const setCandy = (e) => {
    setSelect(e.target.value);
  };

  const clickBtn = () => {
    onChangeCandy(select);
  };

  return (
    <>
      <h1>좋아하는 사탕</h1>
      <input
        type="radio"
        name="candy"
        value="사과"
        onClick={setCandy}
        checked={select === "사과"}
      />
      🍏사과
      <input
        type="radio"
        name="candy"
        value="박하"
        onClick={setCandy}
        checked={select === "박하"}
      />
      🍭박하
      <input
        type="radio"
        name="candy"
        value="민트"
        onClick={setCandy}
        checked={select === "민트"}
      />
      🌱민트
      <input
        type="radio"
        name="candy"
        value="당고"
        onClick={setCandy}
        checked={select === "당고"}
      />
      🍡당고
      <br />
      <br />
      <button onClick={clickBtn}>결정!</button>
    </>
  );
};

export default Candy;
