import "./Main.css";

// JSX 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다. // if나 for 안됨
// 2. 숫자, 문자열, 배열 값만 렌더링 된다.
// 3. 모든 태그는 닫혀있어야 함
// 4. 최상위 태그는 반드시 하나여야 한다.
{
  /* 마땅히 쓸 태그 없을 때 비워둬도 됨 */
}

const Main = () => {
  const user = {
    name: "차은우",
    isLogin: true,
  };

  //   return <>{user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</>;

  if (user.isLogin) {
    return (
      <div className="logoutDiv">
        <button className="logout">로그아웃</button>
      </div>
    );
  } else {
    return (
      <div className="loginDiv">
        <button className="login">로그인</button>
      </div>
    );
  }
};
export default Main;
