import { useState } from "react";

const Pizza = ({ pizza, onChangePizza }) => {
  const [select, setSelect] = useState(pizza);

  const selectPizza = (e) => {
    setSelect(e.target.value);
  };

  const clickBtn = () => {
    onChangePizza(select);
  };

  return (
    <>
      <div>
        <h1>피자주문</h1>
        <input
          onChange={selectPizza}
          type="radio"
          name="pizza"
          value="딸기"
          checked={select === "딸기"}
        />
        딸기
        <input
          onChange={selectPizza}
          type="radio"
          name="pizza"
          value="초코"
          checked={select === "초코"}
        />
        초코
        <input
          onChange={selectPizza}
          type="radio"
          name="pizza"
          value="메론"
          checked={select === "메론"}
        />
        메론
        <input
          onChange={selectPizza}
          type="radio"
          name="pizza"
          value="파인애플"
          checked={select === "파인애플"}
        />
        파인애플
      </div>
      <button onClick={clickBtn}>선택하기</button>
    </>
  );
};
export default Pizza;
