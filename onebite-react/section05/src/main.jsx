import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

/*
const Hello = () => {
  return <div>hello</div>;
};
// test. 아래 App을 Hello로 바꿔주면 변경됨
*/

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
