import { useState, useRef } from "react";
// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

// let count = 0;

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0);
  // console.log("Register 랜더링");
  const inputRef = useRef();

  // let count = 0;

  const onChange = (e) => {
    // count++;
    // console.log(count);
    // let Count 이 방식 + 이 위의것 조합은 안된다.(계속 1만 됨)
    // 리랜더링 되더라도, 값이 다시 초기값으로 초기화되지 않는 특징으로 인해 useRef 나 , state는 증가를 하지만,
    // 변수 선언은 리랜더링 되면 초기값으로 돌아가버리니 차이가 발생하는 것
    // 그렇다면 전역변수로 빼는 방법은?
    // let Count 전역 변수 방식 + 이 위의것 조합은 되긴 하는데,
    // 만약에 전역으로 이렇게 빼버리면, 하나의 변수를 공유하는 치명적인문제 발생 가능
    //
    // console.log(e.target.name, e.target.value);
    // console.log(e.target.name, e.target.value, e);
    //
    countRef.current++;
    console.log(countRef.current);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      // console.log(inputRef.current);
      inputRef.current.focus();
    }
  };

  // console.log(input)

  //   const onChangeName = (e) => {
  //     setInput({
  //       /* 일단 스프레딩을 먼저 해서 다 가져온뒤, 해당 값만 변경을 해야 나머지 값들도 유지가 됨 */
  //       ...input,
  //       name: e.target.value,
  //     });
  //   };

  //   const onChangeBirth = (e) => {
  //     setInput({
  //       ...input,
  //       birth: e.target.value,
  //     });
  //   };

  //   const onChangeCountry = (e) => {
  //     setInput({
  //       ...input,
  //       country: e.target.value,
  //     });
  //   };

  //   const onChangeBio = (e) => {
  //     setInput({
  //       ...input,
  //       bio: e.target.value,
  //     });
  //   };

  return (
    <div>
      {/* <button
        onClick={() => {
          refObj.current++;
          console.log(refObj.current);
        }}
      >
        ref + 1
      </button>
      <br />
      <br /> */}

      {/* value 반드시 적어야 함 중요한 작업임 */}
      <div>
        <input
          ref={inputRef} // useRef와 연결 위함, useRef 에는 이 input 자체가 있을 것
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder="이름"
        />
      </div>
      <br />
      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
        />
      </div>
      <br />
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option></option>
          <option value="kr">한국</option>
          <option>미국</option>
          <option>영국</option>
        </select>
      </div>
      <br />
      <div>
        <textarea
          name="bio"
          value={input.bio}
          onChange={onChange}
          rows={10}
        ></textarea>
      </div>

      <br />
      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
