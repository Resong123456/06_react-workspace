import "./App.css";
import Candy from "./components/Candy";
import Result from "./components/Result";
import { useState } from "react";

function App() {
  const [candy, setCandy] = useState("사과");

  const onChangeCandy = (candy) => {
    setCandy(candy);
  };

  return (
    <>
      <div>
        <Candy candy={candy} onChangeCandy={onChangeCandy} />
        <Result candy={candy} onChangeCandy={onChangeCandy} />
      </div>
    </>
  );
}

export default App;
