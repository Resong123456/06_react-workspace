import "./Chicken.css";
import { useState } from "react";

const Chicken = ({ chicken, onChangeChicken }) => {
  const [chi, setChi] = useState(chicken);

  const selectChicken = (e) => {
    setChi(e.target.value);
  };

  const clickBtn = () => {
    onChangeChicken(chi);
  };

  return (
    <>
      {/* {chicken} */}
      <div>
        <h2> 🍗치킨 주문 시스템🍗</h2>
        <input
          type="radio"
          name="chicken"
          value="딸기"
          onChange={selectChicken}
          checked={chi === "딸기"}
        />
        🍓 딸기 🍓 <br />
        <input
          type="radio"
          name="chicken"
          value="메론"
          onChange={selectChicken}
          checked={chi === "메론"}
        />
        🍈 메론 🍈 <br />
        <input
          type="radio"
          name="chicken"
          value="바나나"
          onChange={selectChicken}
          checked={chi === "바나나"}
        />
        🍌 바나나 🍌 <br />
        <button className="choice" onClick={clickBtn}>
          choice
        </button>
        <br />
      </div>
    </>
  );
};

export default Chicken;
