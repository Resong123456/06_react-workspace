import { useEffect } from "react";

const Even = () => {
  // Even이 갖고 있는 함수를 정리한다.
  useEffect(() => {
    // 클린업, 정리함수
    return () => {
      console.log("unmount");
    };
  }, []);
  return <div>짝수입니다.</div>;
};

export default Even;
