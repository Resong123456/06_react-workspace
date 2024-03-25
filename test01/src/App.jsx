import "./App.css";
import Pizza from "./components/Pizza";
import Result from "./components/Result";
import { useState } from "react";

function App() {
  const [pizza, setPizza] = useState("딸기"); // 초기값 설정

  const onChangePizza = (pizza) => {
    setPizza(pizza);
  };

  return (
    <>
      <Pizza pizza={pizza} onChangePizza={onChangePizza} />
      <Result pizza={pizza} />
    </>
  );
}

export default App;
