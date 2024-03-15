import "./Editor.css";
import { useState, useRef } from "react";

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      // 13 - 엔터코드 , 엔터코드가 눌리면 onsubmit을 실행하게
      onsubmit();
    }
  };

  const onsubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return; // 아무것도 입력 안 하면 추가 안 되게
    }
    onCreate(content);
    setContent(""); // 추가 누를 시 공백됨
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef} // contentRef와 input 요소 잇기 위함
        value={content}
        onKeyDown={onKeyDown}
        onChange={onChangeContent}
        placeholder="새로운 Todo ☆"
      />
      <button onClick={onsubmit}> 추가 </button>
    </div>
  );
};
export default Editor;
