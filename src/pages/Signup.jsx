import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid #87ceeb;
  outline: none;
  width: 50%;
`;

function Signup() {
  // 닉네임, 아이디(이메일), 비밀번호, 비밀번호 확인
  const [inputName, setInputName] = useState("");
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [inputHome, setHome] = useState("");
  const [inputHomeNum, setHomeNum] = useState("");
  const [inputBank, setBankName] = useState("");
  const [inputBankNum, setBankNum] = useState("");

  // input data의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
  const handleInputName = (e) => {
    setInputName(e.target.value);
    // console.log(e.target.value)
  };

  const handleInputId = (e) => {
    setInputId(e.target.value);
    // console.log(e.target.value)
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const handleConfirmPw = (e) => {
    setConfirmPw(e.target.value);
  };

  const handleInputHome = (e) => {
    setHome(e.target.value);
    // console.log(e.target.value)
  };

  const handleInputHomeNum = (e) => {
    setHomeNum(e.target.value);
    // console.log(e.target.value)
  };

  const handleInputBank = (e) => {
    setBankName(e.target.value);
  };

  const handleInputBankNum = (e) => {
    setBankNum(e.target.value);
  };

  // 회원가입 버튼 클릭 이벤트 (비밀번호와 비밀번호 확인 일치 여부)
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputPw, confirmPw);
    if (inputPw !== confirmPw) {
      return alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
    } else {
      axios
        .post("http://127.0.0.1:8000/community/SignUp/", {
          name: inputName,
          email: inputId,
          password1: inputPw,
          password2: confirmPw,
          home: inputHome,
          home_num: inputHomeNum,
          bank: inputBank,
          bank_num: inputBankNum,
        })
        .then(function (response) {
          if (response.status >= 200 && response.status <= 204) {
            alert("회원가입 성공");
            return true;
          }
        })
        .catch(function (error) {
          alert("오류");
          return false;
        });
    }
  };

  return (
    <div className="signUp">
      <h2>회원가입</h2>
      <div>
        <h4 class="tag">닉네임</h4>
        <StyledInput
          className="input-box"
          type="text"
          id="input_name"
          name="input_name"
          value={inputName}
          placeholder="닉네임"
          onChange={handleInputName}
        />
      </div>

      <div>
        <h4 class="tag">아이디(이메일)</h4>
        <StyledInput
          className="input-box"
          type="email"
          id="input_id"
          name="input_id"
          value={inputId}
          placeholder="아이디(이메일 입력)"
          onChange={handleInputId}
        />
      </div>

      <div>
        <h4 class="tag">비밀번호</h4>
        <StyledInput
          className="input-box"
          type="password"
          id="input_pw"
          name="input_pw"
          value={inputPw}
          placeholder="비밀번호"
          onChange={handleInputPw}
        />
      </div>

      <div>
        <h4 class="tag">비밀번호 확인</h4>
        <StyledInput
          className="input-box"
          type="password"
          id="confirm_pw"
          name="confirm_pw"
          value={confirmPw}
          placeholder="비밀번호 확인"
          onChange={handleConfirmPw}
        />
      </div>

      <div>
        <h4 class="tag">집 주소</h4>
        <StyledInput
          className="input-box"
          type="text"
          id="input_home"
          name="input_home"
          value={inputHome}
          placeholder="집 주소"
          onChange={handleInputHome}
        />
      </div>

      <div>
        <h4 class="tag">우편번호</h4>
        <StyledInput
          className="input-box"
          type="number"
          id="input_home_num"
          name="input_home_num"
          value={inputHomeNum}
          placeholder="우편번호"
          onChange={handleInputHomeNum}
        />
      </div>

      <div>
        <h4 class="tag">은행명</h4>
        <StyledInput
          className="input-box"
          type="text"
          id="input_bank"
          name="input_bank"
          value={inputBank}
          placeholder="은행명"
          maxLength="5"
          onChange={handleInputBank}
        />
      </div>

      <div>
        <h4 class="tag">계좌번호</h4>
        <StyledInput
          className="input-box"
          type="text"
          id="input_bank_num"
          name="input_bank_num"
          value={inputBankNum}
          placeholder="계좌번호"
          onChange={handleInputBankNum}
        />
      </div>

      <button className="button" type="submit" onClick={onSubmit}>
        회원가입
      </button>
    </div>
  );
}

export default Signup;
