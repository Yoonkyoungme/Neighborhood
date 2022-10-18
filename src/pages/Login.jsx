import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid #87ceeb;
  outline: none;
  width: 50%;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
`;

function Login() {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  // input data의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
  const handleInputId = (e) => {
    setInputId(e.target.value);
    // console.log(e.target.value)
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  // 로그인 버튼 클릭 이벤트
  const onClickLogin = (e) => {
    e.preventDefault();
    console.log("click login");
    console.log(inputId, inputPw);

    axios
      .post("url", {
        id: inputId,
        password: inputPw,
      })
      // 서버에서 보내준 결과값이 response
      .then(function (response) {
        alert("로그인 성공");
        return true;
      })
      .catch(function (error) {
        alert("로그인 실패");
        return false;
      });
  };

  return (
    <div className="login">
      <h2>로그인</h2>
      <div>
        <h4>아이디(이메일)</h4>
        <StyledInput
          type="text"
          id="input_id"
          name="input_id"
          value={inputId}
          placeholder="아이디(이메일)"
          onChange={handleInputId}
        />
      </div>
      <div>
        <h4>비밀번호</h4>
        <StyledInput
          type="password"
          id="input_pw"
          name="input_pw"
          value={inputPw}
          placeholder="비밀번호"
          onChange={handleInputPw}
        />
      </div>
      <div>
        <button className="button-log" type="submit" onClick={onClickLogin}>
          로그인
        </button>
      </div>

      <Link to="/signup">
        <button className="button-sign" type="button">
          회원가입
        </button>
      </Link>
    </div>
  );
}
export default Login;
