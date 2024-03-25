import "./App.css";
import Chicken from "./components/Chicken";
import Result from "./components/Result";
import { useState } from "react";

function App() {
  const [chicken, setChicken] = useState("딸기");

  const onChangeChicken = (chicken) => {
    setChicken(chicken);
  };

  return (
    <>
      <Chicken chicken={chicken} onChangeChicken={onChangeChicken} />
      <Result chicken={chicken} />
    </>
  );
}

export default App;
